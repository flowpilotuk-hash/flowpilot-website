import { NextResponse, type NextRequest } from "next/server";
import {
  contactFormSchema,
  type ContactApiResponse,
  type ContactFieldErrors,
} from "@/lib/validation/contact";
import { rateLimitContact } from "@/lib/rate-limit";
import { sendContactEmails } from "@/lib/email/send-contact-emails";

// Resend + React Email need the Node.js runtime (not edge). POST is dynamic.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  // 1) Parse JSON body defensively.
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  const raw = (body ?? {}) as Record<string, unknown>;

  // 2) Honeypot: bots fill the hidden `website` field. Silently accept so they
  //    can't distinguish a block from a success, then drop the submission.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 3) Rate limit by client IP. Fail open if the limiter backend errors — we'd
  //    rather risk a rare extra email than drop a genuine enquiry.
  try {
    const result = await rateLimitContact(`ip:${getClientIp(req)}`);
    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "You've sent a few messages already. Please try again shortly, or email us directly at hello@flowpilotuk.com.",
        },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }
  } catch (err) {
    console.error("[contact] rate limiter error:", err);
  }

  // 4) Authoritative server-side validation (same schema as the client).
  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        (fieldErrors as Record<string, string>)[key] = issue.message;
      }
    }
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  // 5) Send the emails.
  try {
    await sendContactEmails(parsed.data, { submittedAt: new Date() });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong sending your message. Please email us directly at hello@flowpilotuk.com.",
      },
      { status: 502 }
    );
  }
}

export function GET(): NextResponse<ContactApiResponse> {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
