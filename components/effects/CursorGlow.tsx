"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * A soft chartreuse light that trails the cursor and publishes its position
 * to CSS variables (--cursor-x/y) so any .spotlight surface can react.
 * Pointer-events-none; disabled on touch and reduced motion.
 */
export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      document.documentElement.style.setProperty("--cursor-x", `${x}px`);
      document.documentElement.style.setProperty("--cursor-y", `${y}px`);
    };

    const loop = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${curX - 200}px, ${curY - 200}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen will-change-transform lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(182,255,0,0.10) 0%, rgba(182,255,0,0.04) 30%, transparent 60%)",
      }}
    />
  );
}
