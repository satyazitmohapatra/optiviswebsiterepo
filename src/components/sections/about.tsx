"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card3D } from "@/components/ui/card-3d";

type AboutProps = {
  headline: string;
  description: string;
};

type AboutSlide = {
  id: string;
  image: string;
  badgeValue: string;
  badgeLabel: string;
  title: string;
  description: string;
};

const ABOUT_SLIDES: AboutSlide[] = [
  {
    id: "digital-city",
    image: "/images/about_digital_city_innovation.png",
    badgeValue: "24/7",
    badgeLabel: "Enterprise Support",
    title: "Powering the City That Never Sleeps",
    description: "Resilient, mission-critical digital infrastructure engineered to handle constant global demand.",
  },
  {
    id: "gpu-computing",
    image: "/images/about_ai_supercomputing.png",
    badgeValue: "99.99%",
    badgeLabel: "Uptime SLA",
    title: "Next-Gen AI & High-Performance Computing",
    description: "Accelerating enterprise intelligence with high-throughput neural workloads and edge computing.",
  },
  {
    id: "cloud-security",
    image: "/images/about_cloud_cybersecurity.png",
    badgeValue: "50+",
    badgeLabel: "Global Deployments",
    title: "Seamless Cloud Architecture & Security",
    description: "End-to-end cloud transformations, automated DevOps, and zero-trust cybersecurity frameworks.",
  },
  {
    id: "digital-transformation",
    image: "/images/about_digital_transformation.png",
    badgeValue: "10x",
    badgeLabel: "Velocity Boost",
    title: "Hyper-Scalable Digital Transformation",
    description: "Modernizing legacy systems to drive exponential business growth and friction-free operations.",
  },
];

const PILLARS = [
  { title: "Strategic Partnership", copy: "We embed with your teams to uncover high-impact optimization opportunities." },
  { title: "Deep Domain Expertise", copy: "Cross-industry engineering, data, and public-sector delivery experience." },
  { title: "Measurable Outcomes", copy: "Every engagement is scoped against clear, trackable business metrics." },
];

export function About({ headline, description }: AboutProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + ABOUT_SLIDES.length) % ABOUT_SLIDES.length);
  }, []);

  // Auto rotate slides every 4.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const currentSlide = ABOUT_SLIDES[activeIndex];

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

          {/* Right Column: Auto-Rotating 3D Image Card with Bespoke Generated Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Card3D depth={14} className="rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div
                className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full group overflow-hidden select-none bg-secondary"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated Slide Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90" />

                    {/* Bottom Caption & Title */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 space-y-2 z-10">
                      <p className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                        {currentSlide.title}
                      </p>
                      <p className="text-sm text-white/80 leading-relaxed max-w-md drop-shadow-sm">
                        {currentSlide.description}
                      </p>
                    </div>

                    {/* Top-Left Floating Metric Badge */}
                    <div className="absolute top-6 left-6 rounded-xl bg-background/85 backdrop-blur-xl border border-white/15 px-5 py-3.5 shadow-2xl z-10">
                      <p className="text-3xl font-extrabold text-primary leading-none">
                        {currentSlide.badgeValue}
                      </p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted mt-1">
                        {currentSlide.badgeLabel}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Top-Right Active Indicator Dots */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1.5 shadow-lg">
                  {ABOUT_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? "w-6 bg-primary"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Hover Arrows for Manual Navigation */}
                <div className="absolute inset-y-0 left-3 right-3 z-20 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md hover:bg-black/80 hover:scale-110 active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md hover:bg-black/80 hover:scale-110 active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
