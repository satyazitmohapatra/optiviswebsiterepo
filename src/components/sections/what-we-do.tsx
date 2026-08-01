"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card3D } from "@/components/ui/card-3d";

type Project = {
  title: string;
  description?: string;
  image: string;
  liveDemo: string;
  githubRepo: string;
};

type WhatWeDoProps = {
  projects: Project[];
};

export function WhatWeDo({ projects }: WhatWeDoProps) {
  return (
    <section id="what-we-do" className="py-28 sm:py-36 bg-background border-y border-border/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <Container className="space-y-16">
        <SectionHeading
          badge="What We Do"
          title="Featured Project Delivery"
          description="A curated set of production-focused builds designed for performance, usability, and measurable business outcomes."
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card3D depth={10} className="rounded-2xl border border-border bg-surface shadow-lg hover:shadow-2xl transition-all duration-300">
                <article className="group relative overflow-hidden rounded-2xl h-[340px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/75 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title Bar (Static) */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Details & CTAs */}
                  <div className="absolute inset-0 z-30 p-6 sm:p-7 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary/90 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                      >
                        GitHub Repo
                      </a>
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
