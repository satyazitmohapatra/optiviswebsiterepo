"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card3D } from "@/components/ui/card-3d";

type AboutProps = {
  headline: string;
  description: string;
};

const PILLARS = [
  { title: "Strategic Partnership", copy: "We embed with your teams to uncover high-impact optimization opportunities." },
  { title: "Deep Domain Expertise", copy: "Cross-industry engineering, data, and public-sector delivery experience." },
  { title: "Measurable Outcomes", copy: "Every engagement is scoped against clear, trackable business metrics." },
];

export function About({ headline, description }: AboutProps) {
  return (
    <section id="about" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="space-y-5">
              <Badge label="Who We Are" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                {headline}
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
                {description}
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-4 border-t border-border/80 pt-8"
            >
              {PILLARS.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-surface/80 transition-colors border border-transparent hover:border-border/60"
                >
                  <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  <div>
                    <p className="font-bold text-foreground text-base">{pillar.title}</p>
                    <p className="text-sm text-muted leading-relaxed mt-0.5">{pillar.copy}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Image Card & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Card3D depth={14} className="rounded-2xl border border-border shadow-2xl">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about_enterprise_digital_city.png"
                  alt="Enterprise Digital Infrastructure & Cyber City"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent opacity-90" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 space-y-2">
                  <p className="text-xl font-bold text-white tracking-tight">Powering the City That Never Sleeps</p>
                  <p className="text-sm text-white/80 leading-relaxed max-w-md">
                    Resilient, mission-critical digital infrastructure engineered to handle constant global demand.
                  </p>
                </div>

                <div className="absolute top-6 left-6 rounded-xl bg-background/80 backdrop-blur-xl border border-white/15 px-5 py-3.5 shadow-2xl">
                  <p className="text-3xl font-extrabold text-primary leading-none">24/7</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted mt-1">Enterprise Support</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
