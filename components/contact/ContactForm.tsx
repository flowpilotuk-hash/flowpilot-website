"use client";

import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  contactFormSchema,
  type ContactApiResponse,
  type ContactFieldErrors,
  type ContactFormState,
} from "@/lib/validation/contact";
import { brand } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Aircraft } from "@/components/effects/Aircraft";
import { EASE_GENTLE } from "@/lib/motion";

const EMPTY: ContactFormState = {
  name: "",
  email: "",
  business: "",
  phone: "",
  message: "",
  website: "",
};

const fieldBase =
  "w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-[0.95rem] text-ink placeholder-ink-muted transition-colors focus:outline-none focus:ring-2 focus:ring-chartreuse/25";

function fieldClass(hasError: boolean) {
  return `${fieldBase} ${hasError ? "border-red-500/60 focus:border-red-500/60" : "border-line focus:border-chartreuse/50"}`;
}

function collectIssues(
  issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>
): ContactFieldErrors {
  const out: ContactFieldErrors = {};
  for (const issue of issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in out)) {
      (out as Record<string, string>)[key] = issue.message;
    }
  }
  return out;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormState>(EMPTY);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof ContactFormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as keyof ContactFieldErrors]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key as keyof ContactFieldErrors];
        return next;
      });
    }
  }

  function focusFirstError(fieldErrors: ContactFieldErrors) {
    const first = Object.keys(fieldErrors)[0];
    if (first && formRef.current) {
      const el = formRef.current.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    // Client-side validation using the shared schema (instant feedback).
    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors = collectIssues(result.error.issues);
      setErrors(fieldErrors);
      focusFirstError(fieldErrors);
      return;
    }
    setErrors({});
    setBusy(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => null)) as ContactApiResponse | null;

      if (res.ok && data?.ok) {
        setSubmitted(true);
        return;
      }
      if (data && !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
          focusFirstError(data.fieldErrors);
        }
        setFormError(data.error);
      } else {
        setFormError(`Something went wrong. Please email us at ${brand.email}.`);
      }
    } catch {
      setFormError(`Couldn't reach the server. Please email us at ${brand.email}.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_GENTLE }}
          className="flex flex-col items-center py-8 text-center"
          role="status"
          aria-live="polite"
        >
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 16 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-chartreuse/30 bg-chartreuse/10 text-chartreuse"
          >
            <Aircraft className="h-7 w-7 drop-shadow-[0_0_12px_rgba(182,255,0,0.7)]" />
          </motion.span>
          <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Message sent.</h3>
          <p className="lede mx-auto mt-3 max-w-sm">
            Thanks — we&apos;ve got it. We&apos;ll be in touch by email soon, usually within one working
            day. We&apos;ll take it from here.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY);
              setSubmitted(false);
            }}
            className="link-underline mt-8 text-sm text-ink-secondary"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE_GENTLE }}
          className="flex flex-col gap-5"
          aria-describedby={formError ? "form-error" : undefined}
        >
          {/* Honeypot — hidden from humans, tempting to bots. */}
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="cf-website">Leave this field empty</label>
            <input
              id="cf-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="cf-name"
              name="name"
              label="Your name"
              placeholder="Jane Smith"
              autoComplete="name"
              required
              value={values.name}
              error={errors.name}
              onChange={(v) => update("name", v)}
            />
            <Field
              id="cf-email"
              name="email"
              type="email"
              label="Email address"
              placeholder="jane@yourbusiness.co.uk"
              autoComplete="email"
              required
              value={values.email}
              error={errors.email}
              onChange={(v) => update("email", v)}
            />
            <Field
              id="cf-business"
              name="business"
              label="Business name"
              placeholder="Smith & Co."
              autoComplete="organization"
              value={values.business}
              error={errors.business}
              onChange={(v) => update("business", v)}
            />
            <Field
              id="cf-phone"
              name="phone"
              type="tel"
              label="Phone"
              optionalLabel
              placeholder="07123 456789"
              autoComplete="tel"
              value={values.phone}
              error={errors.phone}
              onChange={(v) => update("phone", v)}
            />
          </div>

          <Field
            id="cf-message"
            name="message"
            label="How can we help?"
            placeholder="Tell us a little about your business and what you'd like your website to do."
            multiline
            required
            value={values.message}
            error={errors.message}
            onChange={(v) => update("message", v)}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" magnetic={false}>
              {busy ? "Sending…" : "Send message"}
            </Button>
            <p className="text-sm text-ink-muted">
              Prefer email?{" "}
              <a href={`mailto:${brand.email}`} className="link-underline text-ink-secondary">
                {brand.email}
              </a>
            </p>
          </div>

          {formError && (
            <p
              id="form-error"
              role="alert"
              className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300"
            >
              {formError}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  optionalLabel?: boolean;
  multiline?: boolean;
};

function Field({
  id,
  name,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  required,
  optionalLabel,
  multiline,
}: FieldProps) {
  const describedBy = error ? `${id}-error` : undefined;
  const shared = {
    id,
    name,
    value,
    placeholder,
    autoComplete,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className: fieldClass(Boolean(error)),
  } as const;

  return (
    <div className={`flex flex-col gap-2 ${multiline ? "" : ""}`}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optionalLabel && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      {multiline ? (
        <textarea rows={4} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      {error && (
        <p id={describedBy} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
