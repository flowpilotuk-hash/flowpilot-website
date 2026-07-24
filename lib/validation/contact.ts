import { z } from "zod";

/**
 * Contact form validation — the single source of truth shared by the client
 * component (instant feedback) and the API route (authoritative check).
 *
 * Only the visible, user-facing fields live here. The spam honeypot is handled
 * separately in the route so bots never see it validated.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name." })
    .max(100, { message: "That name is too long." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." })
    .max(200, { message: "That email is too long." }),
  business: z
    .string()
    .trim()
    .max(120, { message: "That business name is too long." })
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(40, { message: "That phone number is too long." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little more (at least 10 characters)." })
    .max(5000, { message: "That message is a little too long." }),
});

/** The clean, validated + transformed shape used on the server. */
export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** The raw shape the client form holds in state (all strings, includes honeypot). */
export type ContactFormState = {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
  /** Honeypot — must stay empty. Named to tempt bots, hidden from humans. */
  website: string;
};

/** Per-field error map keyed by field name. */
export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

/** Typed API response contract, shared by route + client. */
export type ContactApiResponse =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: ContactFieldErrors };
