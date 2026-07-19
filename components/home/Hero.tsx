"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { brand, audiences } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Aircraft } from "@/components/effects/Aircraft";
import { ParticleField } from "@/components/effects/ParticleField";
import { GridBackdrop } from "@/components/effects/GridBackdrop";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { EASE_GENTLE } from "@/lib/motion";

/* ---- Cinematic load sequence: trail draws in, then reveals the hero ---- */
function Intro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1850);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-base"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE_GENTLE }}
    >
      <div className="relative h-[2px] w-[min(52vw,640px)]">
        {/* Horizontal trail */}
        <motion.div
          className="absolute inset-y-0 left-0 origin-left rounded-full"
          style={{
            width: "100%",
            background: "linear-gradient(90deg, transparent, rgba(182,255,0,0.15), #B6FF00)",
            boxShadow: "0 0 20px 1px rgba(182,255,0,0.6)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, ease: EASE_GENTLE, delay: 0.15 }}
        />
        {/* Aircraft rides the leading edge */}
        <motion.div
          className="absolute top-1/2 text-chartreuse"
          initial={{ left: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ left: ["0%", "100%", "100%"], opacity: [0, 1, 1] }}
          transition={{ duration: 1.15, ease: EASE_GENTLE, delay: 0.15, times: [0, 0.75, 1] }}
        >
          <Aircraft className="h-6 w-6 drop-shadow-[0_0_12px_rgba(182,255,0,0.9)]" />
        </motion.div>
        {/* Vertical continuation hinting the journey down the page */}
        <motion.div
          className="absolute left-full top-1/2 w-[2px] origin-top rounded-full"
          style={{
            height: "40vh",
            background: "linear-gradient(180deg, #B6FF00, transparent)",
            boxShadow: "0 0 20px 1px rgba(182,255,0,0.4)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, ease: EASE_GENTLE, delay: 1.0 }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [intro, setIntro] = useState(false);
  const [ready, setReady] = useState(false);

  // Decide whether to play the intro (once per session, motion allowed).
  useEffect(() => {
    const played = sessionStorage.getItem("fp-intro");
    if (reduced || played) {
      setReady(true);
    } else {
      setIntro(true);
      sessionStorage.setItem("fp-intro", "1");
    }
  }, [reduced]);

  // Subtle mouse parallax.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const layerX = useTransform(sx, (v) => v * 18);
  const layerY = useTransform(sy, (v) => v * 18);
  const trailX = useTransform(sx, (v) => v * 34);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, mx, my]);

  const show = ready || !intro;
  const headline = ["KEEP YOUR", "BUSINESS", "MOVING."];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-h)]">
      <AnimatePresence>{intro && <Intro onDone={() => { setIntro(false); setReady(true); }} />}</AnimatePresence>

      {/* Backdrop layers */}
      <GridBackdrop travel={140} />
      <ParticleField className="absolute inset-0 h-full w-full" density={0.9} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-radial-fade" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />

      {/* Vertical flight trail — continues the journey downward */}
      <motion.div
        aria-hidden
        style={{ x: trailX }}
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-40 w-px bg-gradient-to-b from-chartreuse/50 to-transparent lg:block"
      />

      <div className="shell relative z-10">
        <motion.div style={{ x: layerX, y: layerY }} className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_GENTLE, delay: 0.1 }}
            className="flex justify-center"
          >
            <span className="eyebrow">For UK small businesses</span>
          </motion.div>

          <h1 className="mt-7 text-display-lg font-bold uppercase leading-[0.92]">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-chartreuse" : "text-gradient"}`}
                  initial={{ y: "110%" }}
                  animate={show ? { y: 0 } : {}}
                  transition={{ duration: 0.9, ease: EASE_GENTLE, delay: 0.25 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_GENTLE, delay: 0.7 }}
            className="lede mx-auto mt-7 max-w-2xl"
          >
            {brand.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_GENTLE, delay: 0.82 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/packages" size="lg">
              View packages
            </Button>
            <Button href="/how-we-work" variant="secondary" size="lg">
              See how it works
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-14"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Trusted by local businesses</p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              {audiences.slice(0, 7).map((a, i) => (
                <li key={a} className="flex items-center gap-6">
                  {i > 0 && <span aria-hidden className="text-ink-muted/40">·</span>}
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5"
        >
          <span className="h-1.5 w-0.5 rounded-full bg-chartreuse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
