"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useBookingModal } from "@/lib/booking/booking-context";

const GUARANTEE_PILLARS = [
  {
    tag: "Milestone Security",
    title: "100% Milestone Satisfaction Guarantee",
    description: "Review working code at every sprint milestone. You only approve payments when milestones are fully met to your exact specification.",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    tag: "14-Day Delivery",
    title: "Fast Blueprint Deployment",
    description: "Need rapid time-to-market? Customize and launch our pre-engineered enterprise software blueprints in under 14 days without starting from scratch.",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    tag: "Full IP Ownership",
    title: "100% IP & Source Code Transfer",
    description: "You retain full intellectual property rights, repository ownership, documentation, and source code access from day one.",
    icon: (
      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    tag: "Direct Contact",
    title: "Direct Senior Tech Lead Access",
    description: "No junior account reps or middle managers. Communicate directly with senior technical architects on Slack, Teams, or WhatsApp.",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
];

export function RiskFreeGuarantee() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="guarantee" className="py-28 sm:py-36 bg-surface/60 text-foreground border-y border-border/80 relative overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        <SectionHeading
          badge="Zero-Risk Assurance"
          title="Engineered for Complete Peace of Mind"
          description="We eliminate risk for early enterprise partners so you can move forward with 100% confidence."
          align="center"
        />

        {/* 4 Clean Human Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEE_PILLARS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-none" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-border">
                <span className="text-xs font-bold text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Guaranteed Policy →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Executive Action Callout Banner */}
        <div className="rounded-3xl border border-border bg-secondary p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
              Zero Commitment • Fast Turnaround
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Ready to test our engineering speed risk-free?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Schedule a 20-minute architecture discovery session directly with our senior technology team.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal("Custom Solution")}
            className="rounded-2xl bg-accent hover:bg-accent/90 text-secondary font-bold px-8 py-4 text-xs uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-95 flex-none"
          >
            Start Risk-Free Trial →
          </button>
        </div>
      </Container>
    </section>
  );
}
