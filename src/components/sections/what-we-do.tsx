import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <section id="what-we-do" className="py-24 sm:py-32 bg-background border-y border-border overflow-hidden">
      <Container className="space-y-16">
        <SectionHeading
          badge="What We Do"
          title="Featured Project Delivery"
          description="A curated set of production-focused builds designed for performance, usability, and measurable business outcomes."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-2xl md:hover:shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 md:group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-30 flex h-20 items-end px-6 pb-5 sm:px-7 sm:pb-6">
                  <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md transition-opacity duration-300 md:group-hover:opacity-0">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 transition-opacity duration-500 ease-out md:group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-6 sm:px-7 sm:pb-7 pt-20 opacity-100 md:translate-y-6 md:opacity-0 transition-all duration-500 ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="hidden text-sm leading-relaxed text-white/90 md:block line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
