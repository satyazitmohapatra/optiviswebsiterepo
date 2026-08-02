"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/lib/booking/booking-context";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustText?: string;
};

const MASCOT_IMAGES = [
  { src: "/images/hero_mascot_owl.png", alt: "Optivis 3D Executive Owl Mascot" },
  { src: "/images/hero_mascot_falcon.png", alt: "Optivis 3D Executive Falcon Mascot" },
];

export function Hero({
  subheadline = "We provide next-generation digital services and consulting to help enterprises accelerate their transformation journey, build resilience, and unlock new possibilities",
}: HeroProps) {
  const { openBookingModal } = useBookingModal();
  const [mascotIndex, setMascotIndex] = useState(0);

  // Slow mascot cross-fade timer (every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setMascotIndex((prev) => (prev + 1) % MASCOT_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative w-full bg-background text-foreground pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-foreground leading-[1.08] mb-6">
              Navigate Your<br />
              Digital<br />
              Transformation
            </h1>

            {/* Subheadline Paragraph */}
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-xl mb-8">
              {subheadline}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                type="button"
                onClick={() => openBookingModal("Digital Transformation")}
                className="rounded-2xl bg-accent hover:bg-accent/90 text-secondary font-bold px-7 py-4 text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Schedule A Strategy Call
              </button>

              <a
                href="#services"
                className="rounded-2xl border border-border bg-surface hover:bg-border/40 text-foreground font-semibold px-7 py-4 text-sm transition-all duration-200 shadow-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="flex items-center gap-6 sm:gap-10 pt-4 w-full border-t border-border">
              {/* Metric 1 */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">99.9%+</div>
                <div className="text-xs font-semibold text-muted mt-1">Model Precision</div>
              </div>

              {/* Vertical Divider */}
              <div className="h-9 w-[1px] bg-border" />

              {/* Metric 2 */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">1.2M+</div>
                <div className="text-xs font-semibold text-muted mt-1">Req/sec Throughput</div>
              </div>

              {/* Vertical Divider */}
              <div className="h-9 w-[1px] bg-border" />

              {/* Metric 3 */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">8.4 ms</div>
                <div className="text-xs font-semibold text-muted mt-1">Avg Latency</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Mascot Image with High-Tech Precision Geometry Ring */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* High-Tech Precision Geometry Ring Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Soft Ambient Core Glow */}
              <div className="h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] lg:h-[480px] lg:w-[480px] rounded-full bg-primary/8 blur-3xl" />
              
              {/* Outer Precision Ring with Accent Nodes */}
              <div className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[500px] lg:w-[500px] rounded-full border border-border/70 flex items-center justify-center">
                {/* 4 Cardinal Crosshair Nodes */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary/60" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent/60" />
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary/60" />
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent/60" />
              </div>

              {/* Rotating Dashed Precision Tech Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute h-[340px] w-[340px] sm:h-[410px] sm:w-[410px] lg:h-[450px] lg:w-[450px] rounded-full border border-dashed border-primary/25"
              />

              {/* Counter-Rotating Segment Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px] rounded-full border border-primary/15 border-t-primary/50 border-b-accent/50"
              />

              {/* Inner Subtle Geometric Target Box Marks */}
              <div className="absolute h-[260px] w-[260px] sm:h-[310px] sm:w-[310px] lg:h-[340px] lg:w-[340px] rounded-3xl border border-border/40 rotate-45" />
            </div>

            {/* Mascot Image Container */}
            <div className="relative z-10 w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] h-[400px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={MASCOT_IMAGES[mascotIndex].src}
                  src={MASCOT_IMAGES[mascotIndex].src}
                  alt={MASCOT_IMAGES[mascotIndex].alt}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
