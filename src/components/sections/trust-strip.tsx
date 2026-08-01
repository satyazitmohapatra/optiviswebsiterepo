"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

type TrustStat = {
  label: string;
  description: string;
};

type TrustStripProps = {
  stats: TrustStat[];
};

export function TrustStrip({ stats }: TrustStripProps) {
  return (
    <section className="relative overflow-hidden bg-[#061122] py-14 border-y border-white/10">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      {/* Ambient Glow Pill behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-[70%] bg-primary/10 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-accent/40 shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl lg:text-5xl group-hover:scale-105 transition-transform duration-300">
                {stat.label}
              </span>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-[0.14em] text-center">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
