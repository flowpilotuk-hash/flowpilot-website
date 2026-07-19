"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, brand } from "@/lib/content";
import { Aircraft } from "@/components/effects/Aircraft";
import { Button } from "@/components/ui/Button";
import { EASE_GENTLE } from "@/lib/motion";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${brand.name} — home`}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03] transition-colors group-hover:border-chartreuse/40">
        <Aircraft className="h-4 w-4 text-chartreuse transition-transform duration-500 ease-gentle group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Flow<span className="text-chartreuse">Pilot</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-gentle ${
        scrolled
          ? "border-b border-line bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-[var(--header-h)] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.95rem] transition-colors ${
                    active ? "text-ink" : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                      transition={{ duration: 0.4, ease: EASE_GENTLE }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" size="md">
              Start a project
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-current"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-base/95 px-6 pb-10 pt-[calc(var(--header-h)+2rem)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: EASE_GENTLE }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-line py-5 font-display text-2xl font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="w-full">
                Start a project
              </Button>
            </div>
            <div className="mt-auto pt-8 text-sm text-ink-muted">
              <a href={`mailto:${brand.email}`} className="link-underline">
                {brand.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
