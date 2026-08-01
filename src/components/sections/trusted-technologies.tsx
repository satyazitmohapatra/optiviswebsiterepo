"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnologyMarquee } from "@/components/ui/technology-marquee";
import {
  CLOUD_TECHNOLOGIES,
  AI_INFRA_DATABASE_TECHNOLOGIES,
} from "@/data/technologies";

export function TrustedTechnologies() {
  const combinedMobileItems = [...CLOUD_TECHNOLOGIES, ...AI_INFRA_DATABASE_TECHNOLOGIES];

  return (
    <section
      id="what-we-do"
      className="py-28 sm:py-36 bg-[#050C1A] text-white border-y border-white/10 relative overflow-hidden select-none"
    >
      {/* Background Ambient Animated Mesh & Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-primary/15 blur-[160px] animate-ambient-mesh" />
        <div
          className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px] animate-ambient-mesh"
          style={{ animationDelay: "-7s" }}
        />
        <div className="absolute inset-0 grid-texture opacity-30" />
      </div>

      <Container className="space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="Trusted Stack & Partners"
            title="Trusted Technologies & Partners"
            description="We leverage industry-leading technologies, cloud platforms, AI frameworks, and development tools to build secure, scalable, and future-ready digital solutions."
            align="center"
          />
        </motion.div>

        {/* Desktop & Tablet View: Dual Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hidden sm:space-y-6 sm:block"
        >
          {/* Row 1: Left -> Right */}
          <TechnologyMarquee items={CLOUD_TECHNOLOGIES} direction="left" />

          {/* Row 2: Right -> Left */}
          <TechnologyMarquee items={AI_INFRA_DATABASE_TECHNOLOGIES} direction="right" />
        </motion.div>

        {/* Mobile View: Single Marquee Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="block sm:hidden"
        >
          <TechnologyMarquee items={combinedMobileItems} direction="left" />
        </motion.div>
      </Container>
    </section>
  );
}
