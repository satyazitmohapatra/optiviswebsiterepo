"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card3D } from "@/components/ui/card-3d";

type Insight = {
  title: string;
  category: string;
  snippet: string;
  date: string;
  image: string;
};

type InsightsProps = {
  insights: Insight[];
};

export function Insights({ insights }: InsightsProps) {
  return (
    <section id="insights" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        <SectionHeading
          badge="Insights"
          title="Perspectives on the Future of Enterprise"
          description="Explore our latest thinking on how technology is redefining the enterprise landscape."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {insights.map((insight) => (
            <motion.div
              key={insight.title}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card3D depth={10} className="h-full rounded-2xl border border-border bg-surface shadow-sm hover:shadow-2xl transition-all duration-300">
                <article className="group flex flex-col h-full overflow-hidden">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={insight.title}
                      src={insight.image}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-muted">
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-primary font-bold uppercase tracking-wider text-[10px]">
                        {insight.category}
                      </span>
                      <span>{insight.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors tracking-tight">
                      {insight.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                      {insight.snippet}
                    </p>

                    <div className="flex items-center text-primary text-sm font-bold group-hover:translate-x-1 transition-transform duration-300">
                      Read Article
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
