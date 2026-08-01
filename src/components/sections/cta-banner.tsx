"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
};

export function CtaBanner({ headline, description, buttonLabel }: CtaBannerProps) {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden bg-[#050C1A] text-white border-y border-white/10">
      {/* Aurora Ambient Background Engine */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[150px] animate-ambient-mesh" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[150px] animate-ambient-mesh" style={{ animationDelay: "-7s" }} />
        <div className="absolute inset-0 grid-texture opacity-30" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-8 p-10 sm:p-14 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/15 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {headline}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="pt-2">
            <Button
              href="#contact"
              variant="accent"
              className="text-base px-9 py-4 shadow-2xl shadow-accent/30 hover:shadow-accent/50"
            >
              {buttonLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
