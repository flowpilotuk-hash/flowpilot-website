"use client";

import { motion } from "framer-motion";
import type { Package } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { scaleIn } from "@/lib/motion";

function Check({ featured }: { featured?: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
        featured ? "bg-chartreuse text-base" : "bg-chartreuse/10 text-chartreuse"
      }`}
    >
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" aria-hidden>
        <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  const featured = pkg.recommended;

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className={`group relative flex h-full flex-col rounded-3xl p-8 ${
        featured
          ? "lg:-my-4 lg:py-12"
          : ""
      }`}
    >
      {/* Animated gradient border trace (featured) or hairline (others) */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-3xl ${
          featured ? "p-px" : "p-px"
        }`}
        style={
          featured
            ? {
                background:
                  "linear-gradient(120deg, rgba(182,255,0,0.7), rgba(182,255,0,0.05) 30%, rgba(182,255,0,0.05) 70%, rgba(182,255,0,0.7)) border-box",
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }
            : undefined
        }
      >
        {!featured && (
          <span className="absolute inset-0 rounded-3xl border border-line transition-colors duration-300 group-hover:border-white/15" />
        )}
      </span>

      {/* Surface */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 rounded-3xl ${
          featured ? "bg-card shadow-glow-lg" : "bg-white/[0.02] group-hover:bg-white/[0.03]"
        } transition-colors duration-300`}
      />

      {/* Hover glow */}
      {!featured && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "0 0 60px -20px rgba(182,255,0,0.35)" }}
        />
      )}

      {featured && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-chartreuse px-3.5 py-1 text-xs font-semibold text-base">
          <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="M10 1.8l2.3 4.7 5.2.8-3.8 3.7.9 5.2L10 13.9l-4.6 2.5.9-5.2L2.5 7.3l5.2-.8L10 1.8z" />
          </svg>
          {pkg.badge}
        </span>
      )}

      <h3 className="text-xl font-semibold text-ink">{pkg.name}</h3>
      <p className="mt-1.5 text-sm font-medium text-chartreuse">{pkg.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{pkg.description}</p>

      <div className="mt-6">
        <Button href="/contact" variant={featured ? "primary" : "secondary"} className="w-full">
          Get a quote
        </Button>
      </div>

      <div className="my-7 h-px bg-line" />

      <ul className="flex flex-1 flex-col gap-3.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check featured={featured} />
            <span className="text-[0.95rem] leading-relaxed text-ink-secondary">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
