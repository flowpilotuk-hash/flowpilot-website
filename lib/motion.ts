import type { Variants, Transition } from "framer-motion";

// Shared cinematic easing — matches the CSS "gentle" curve.
export const EASE_GENTLE = [0.22, 1, 0.36, 1] as const;
export const EASE_SWIFT = [0.4, 0, 0.2, 1] as const;

export const spring: Transition = { type: "spring", stiffness: 200, damping: 26, mass: 0.9 };

// Fade + rise, used by <Reveal>.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_GENTLE, delay: i * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE_GENTLE } },
};

// Container that staggers its children.
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_GENTLE },
  },
};
