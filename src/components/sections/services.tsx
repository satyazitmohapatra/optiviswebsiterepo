"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Card3D } from "@/components/ui/card-3d";

type Service = {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
};

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-28 sm:py-36 bg-surface/60 border-y border-border/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        <SectionHeading
          badge="Services"
          title="Enterprise Solutions"
          description="High-impact architectures tailored to scale, delivering resilience and measurable business growth."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card3D depth={10} className="h-full rounded-2xl border border-border bg-background p-8 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="group relative flex h-full flex-col">
                  {/* Glowing Top Accent Bar */}
                  <span className="absolute -top-8 -left-8 right-0 h-1 rounded-t bg-gradient-to-r from-primary via-accent to-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  
                  <IconWrapper icon={service.icon ?? "code"} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted mb-6 flex-1">{service.description}</p>
                  
                  {service.points && (
                    <ul className="space-y-2.5 border-t border-border/80 pt-5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs font-semibold text-muted group-hover:text-foreground transition-colors">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary group-hover:bg-accent transition-colors" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
