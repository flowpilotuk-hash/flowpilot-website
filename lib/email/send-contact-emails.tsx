import "server-only";
import { getResend, emailConfig } from "./client";
import { InternalNotificationEmail } from "./templates/internal-notification";
import { CustomerConfirmationEmail } from "./templates/customer-confirmation";
import type { ContactFormValues } from "@/lib/validation/contact";

/**
 * Sends the two contact emails.
 *
 * The internal notification is treated as critical — if it fails, the caller
 * should surface an error so the enquiry is never silently lost. The customer
 * confirmation is best-effort; a bounce there must not fail the whole request.
 */
export async function sendContactEmails(
  data: ContactFormValues,
  meta: { submittedAt: Date }
): Promise<{ internalId?: string }> {
  const resend = getResend();

  const submittedAt = meta.submittedAt.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  // 1) Internal notification — critical (this is the lead).
  const internal = await resend.emails.send({
    from: emailConfig.from,
    to: emailConfig.to,
    replyTo: data.email,
    subject: `New enquiry — ${data.name}${data.business ? ` (${data.business})` : ""}`,
    react: (
      <InternalNotificationEmail
        name={data.name}
        email={data.email}
        business={data.business || undefined}
        phone={data.phone || undefined}
        message={data.message}
        submittedAt={submittedAt}
      />
    ),
  });

  if (internal.error) {
    throw new Error(`Internal notification failed: ${internal.error.message}`);
  }

  // 2) Customer confirmation — best-effort.
  try {
    const confirmation = await resend.emails.send({
      from: emailConfig.from,
      to: data.email,
      subject: "Thanks for getting in touch with FlowPilot",
      react: <CustomerConfirmationEmail name={data.name} />,
    });
    if (confirmation.error) {
      console.error("[contact] confirmation email failed:", confirmation.error);
    }
  } catch (err) {
    console.error("[contact] confirmation email threw:", err);
  }

  return { internalId: internal.data?.id };
}
