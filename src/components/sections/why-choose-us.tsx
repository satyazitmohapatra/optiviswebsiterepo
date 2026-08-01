"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Card3D } from "@/components/ui/card-3d";

type Reason = {
  title: string;
  description: string;
  icon: string;
};

type WhyChooseUsProps = {
  badge: string;
  title: string;
  description: string;
  reasons: Reason[];
};

export function WhyChooseUs({ badge, title, description, reasons }: WhyChooseUsProps) {
  return (
    <section className="py-28 sm:py-36 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        <SectionHeading badge={badge} title={title} description={description} align="center" />
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card3D depth={8} className="h-full rounded-2xl border border-border bg-surface/50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                <div className="group flex flex-col h-full">
                  <IconWrapper icon={reason.icon} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted flex-1">{reason.description}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
