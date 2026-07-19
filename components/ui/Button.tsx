"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks";
import { spring } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
  "transition-colors duration-300 ease-gentle focus-visible:outline-none whitespace-nowrap select-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-chartreuse text-base font-semibold hover:bg-chartreuse-soft",
  secondary: "text-ink border border-line bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20",
  ghost: "text-ink-secondary hover:text-ink",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  magnetic?: boolean;
};

type ButtonAsLink = CommonProps & { href: string; onClick?: never; type?: never };
type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export const Button = forwardRef<HTMLElement, ButtonAsLink | ButtonAsButton>(
  function Button(
    { children, variant = "primary", size = "md", className = "", magnetic = true, ...props },
    _ref
  ) {
    const { ref, offset } = useMagnetic<HTMLDivElement>(magnetic ? 0.25 : 0);
    const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    const glow =
      variant === "primary" ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "rgba(182,255,0,0.55)" }}
        />
      ) : null;

    const inner = (
      <>
        {glow}
        {children}
      </>
    );

    return (
      <motion.div
        ref={ref}
        className="inline-flex"
        animate={{ x: offset.x, y: offset.y }}
        transition={spring}
      >
        {"href" in props && props.href ? (
          <Link href={props.href} className={cls}>
            {inner}
          </Link>
        ) : (
          <button
            type={(props as ButtonAsButton).type ?? "button"}
            onClick={(props as ButtonAsButton).onClick}
            className={cls}
          >
            {inner}
          </button>
        )}
      </motion.div>
    );
  }
);
