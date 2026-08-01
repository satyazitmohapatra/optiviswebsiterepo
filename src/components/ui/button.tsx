"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { MagneticButton } from "./magnetic-button";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/95 focus-visible:ring-primary/60 border border-primary/40",
  secondary:
    "border border-white/20 bg-white/5 backdrop-blur-md text-foreground hover:border-white/40 hover:bg-white/10 focus-visible:ring-primary/30",
  accent:
    "bg-accent text-secondary shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:bg-accent/95 focus-visible:ring-accent/60 font-bold",
  ghost:
    "text-foreground hover:bg-white/10 focus-visible:ring-primary/30",
};

const baseStyles =
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  href,
  type = "button",
  variant = "primary",
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  const content = (
    <>
      {/* Specular Light Reflection Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <MagneticButton>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton>
      <button type={type} className={classes} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    </MagneticButton>
  );
}
