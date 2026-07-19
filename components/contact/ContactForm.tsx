"use client";

import { useState, type FormEvent } from "react";
import { brand } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const ENDPOINT = "https://formspree.io/f/your-form-id"; // ← replace with your Formspree ID
const isPlaceholder = ENDPOINT.includes("your-form-id");

const field =
  "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-[0.95rem] text-ink placeholder-ink-muted transition-colors focus:border-chartreuse/50 focus:outline-none focus:ring-2 focus:ring-chartreuse/25";

export function ContactForm() {
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (!form.checkValidity()) return; // let native validation show
    e.preventDefault();

    const data = new FormData(form);

    if (isPlaceholder) {
      const subject = encodeURIComponent(`Website enquiry from ${data.get("name") || "your website"}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`
      );
      setStatus({ msg: "Opening your email app so you can send this to us directly…", ok: true });
      window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
      return;
    }

    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        form.reset();
        setStatus({ msg: "Thank you — your message is on its way. We'll reply by email soon.", ok: true });
      } else {
        setStatus({ msg: `Something went wrong. Please email us at ${brand.email}.`, ok: false });
      }
    } catch {
      setStatus({ msg: `Something went wrong. Please email us at ${brand.email}.`, ok: false });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>Leave empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className="text-sm font-medium text-ink">Your name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} placeholder="Jane Smith" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className="text-sm font-medium text-ink">Email address</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@yourbusiness.co.uk" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-business" className="text-sm font-medium text-ink">Business name</label>
          <input id="cf-business" name="business" type="text" autoComplete="organization" className={field} placeholder="Smith & Co." />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-phone" className="text-sm font-medium text-ink">Phone <span className="font-normal text-ink-muted">(optional)</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="07123 456789" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-medium text-ink">How can we help?</label>
        <textarea id="cf-message" name="message" rows={4} required className={field} placeholder="Tell us a little about your business and what you'd like your website to do." />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" magnetic={false}>{busy ? "Sending…" : "Send message"}</Button>
        <p className="text-sm text-ink-muted">
          Prefer email? <a href={`mailto:${brand.email}`} className="link-underline text-ink-secondary">{brand.email}</a>
        </p>
      </div>

      {status && (
        <p role="status" aria-live="polite" className={`text-sm font-medium ${status.ok ? "text-chartreuse" : "text-red-400"}`}>
          {status.msg}
        </p>
      )}
    </form>
  );
}
