import "server-only";
import { Resend } from "resend";

/**
 * Server-only Resend client. The `server-only` import guarantees this module
 * can never be bundled into client code, so the API key is never exposed.
 */

let client: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set. Add it to your environment.");
  }
  if (!client) client = new Resend(apiKey);
  return client;
}

/** Email addressing. Overridable via env; sensible FlowPilot defaults. */
export const emailConfig = {
  /** Verified sender. Must be on the Resend-verified domain. */
  from: process.env.CONTACT_FROM_EMAIL ?? "FlowPilot <hello@flowpilotuk.com>",
  /** Internal inbox that receives new-enquiry notifications. */
  to: process.env.CONTACT_TO_EMAIL ?? "hello@flowpilotuk.com",
  /** Public brand address, shown to customers. */
  replyAddress: process.env.CONTACT_TO_EMAIL ?? "hello@flowpilotuk.com",
} as const;
