"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Services & Capabilities",
    question: "What core services does Optivis Consultancy Services specialize in?",
    answer:
      "Optivis specializes in Enterprise Digital Transformation, Custom Full-Stack Web & Mobile Engineering, AI & Neural Workload Analytics, Cloud Infrastructure & DevOps, Multilingual G2C Public Sector Portals, and High-Impact IT Strategy Consulting.",
  },
  {
    category: "Security & Governance",
    question: "How does Optivis guarantee data security and compliance?",
    answer:
      "Security is baked into our engineering lifecycle from sprint zero. We implement Zero-Trust cloud architectures, ISO/IEC 27001 compliance standards, automated CI/CD static security scanning, end-to-end encryption, and role-based access control.",
  },
  {
    category: "Tech Stack & Speed",
    question: "What tech stack powers Optivis enterprise builds?",
    answer:
      "We build on high-throughput modern stacks: React, Next.js (SSR/SSG), TypeScript, Node.js, Python, PyTorch, Docker, Kubernetes, AWS, Google Cloud, and enterprise relational/NoSQL datastores optimized for sub-10ms latencies.",
  },
  {
    category: "Public Sector & Accessibility",
    question: "Does Optivis deliver multilingual civic and government solutions?",
    answer:
      "Yes. We specialize in accessible, high-concurrency Government-to-Citizen (G2C) portals with native multilingual support (English, Odia, Hindi), built to WCAG 2.1 accessibility benchmarks.",
  },
  {
    category: "Engagement & Support",
    question: "How can I schedule a consultation or request a bespoke proposal?",
    answer:
      "You can click any 'Book a Consultation' button to open our interactive session scheduler, or use our Bespoke Custom Package Builder under the Pricing section to tailor your required stack, budget, and timeline.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Clear, transparent answers about our enterprise consulting, technical stack, security standards, and delivery workflows."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-border bg-surface/60 overflow-hidden transition-colors duration-200 hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-primary border-primary text-white rotate-180"
                        : "border-border bg-background text-muted"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-muted leading-relaxed border-t border-border/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
