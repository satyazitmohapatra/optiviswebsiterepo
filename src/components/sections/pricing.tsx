"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/card-3d";
import { useBookingModal } from "@/lib/booking/booking-context";
import { ServiceOption, BudgetOption, TimelineOption } from "@/lib/booking/types";

type PricingPlan = {
  name: string;
  price: string;
  suitableFor?: string[];
  description?: string;
  icon?: string;
  features?: string[];
  cta?: string;
};

type PricingProps = {
  plans: PricingPlan[];
};

const CUSTOM_SERVICE_ITEMS = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI Integration",
  "Cloud Infrastructure",
  "ERP Development",
  "CRM Development",
  "API Development",
  "SEO",
  "Social Media Marketing",
  "Content Writing",
  "Graphic Design",
  "Video Editing",
  "Maintenance & Support",
  "Security Audit",
  "DevOps",
  "Dedicated Developer",
];

const BUDGET_TIERS: BudgetOption[] = [
  "Under ₹50K",
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L+",
];

const TIMELINE_TIERS: TimelineOption[] = [
  "ASAP",
  "1 Month",
  "2–3 Months",
  "Flexible",
];

const mapPlanToService = (planName: string): ServiceOption => {
  switch (planName.trim()) {
    case "Web Development":
      return "Web Development";
    case "Digital Marketing":
      return "Digital Marketing";
    case "Content & Creative":
      return "Content & Creative";
    case "Enterprise Custom Solution":
      return "Enterprise Custom Solution";
    default:
      return "Custom Solution";
  }
};

export function Pricing({ plans }: PricingProps) {
  const { openBookingModal } = useBookingModal();

  // State for Custom Package Builder
  const [selectedCustomServices, setSelectedCustomServices] = useState<string[]>([
    "Website Development",
    "SEO",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<BudgetOption>("₹50K–₹1L");
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>("1 Month");

  const toggleCustomService = (service: string) => {
    setSelectedCustomServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleLaunchCustomBooking = () => {
    openBookingModal({
      service: "Custom Package Builder",
      budget: selectedBudget,
      timeline: selectedTimeline,
      customServices: selectedCustomServices,
    });
  };

  return (
    <section id="pricing" className="py-28 sm:py-36 bg-surface/60 border-y border-border/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <Container className="space-y-20 relative z-10">
        <SectionHeading
          badge="Pricing & Packages"
          title="Transparent Market-Rate Solutions"
          description="Engineered precisely for your operational scope with zero hidden costs."
          align="center"
        />

        {/* 1. Pricing Cards Grid */}
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
          {plans.map((plan, i) => {
            const featured = i === 0;
            const isCustomQuote = plan.price.toLowerCase().includes("custom");
            const rawPrice = plan.price.replace(/^Starting from\s*/i, "");

            return (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Card3D
                  depth={featured ? 14 : 8}
                  className={`h-full rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                    featured
                      ? "border-2 border-primary bg-background shadow-2xl shadow-primary/10 relative"
                      : "border border-border bg-background shadow-sm hover:shadow-xl relative"
                  }`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      {/* Top Bar: Icon + Popular Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <IconWrapper icon={plan.icon ?? "custom"} />
                        {featured && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Most Popular
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{plan.name}</h3>

                      {/* Price Block */}
                      <div className="mb-6 pb-5 border-b border-border/70">
                        {!isCustomQuote && (
                          <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-1">
                            Starting from
                          </span>
                        )}
                        <p className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                          {rawPrice}
                        </p>
                      </div>

                      {/* Suitable For Chips (if present) */}
                      {plan.suitableFor && plan.suitableFor.length > 0 && (
                        <div className="mb-5 p-3 rounded-xl bg-surface/70 border border-border/70 text-xs">
                          <p className="font-bold text-foreground mb-1.5 text-[11px] uppercase tracking-wider">Suitable for:</p>
                          <ul className="space-y-1 text-muted">
                            {plan.suitableFor.map((item) => (
                              <li key={item} className="flex items-center gap-1.5 text-xs">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {plan.description && (
                        <p className="text-xs text-muted leading-relaxed mb-5">{plan.description}</p>
                      )}

                      {/* Features List */}
                      {plan.features && (
                        <ul className="space-y-2.5 mb-8">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-xs text-muted font-medium">
                              <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 mt-auto">
                      <Button
                        onClick={() => openBookingModal(mapPlanToService(plan.name))}
                        variant={featured ? "accent" : "secondary"}
                        className="w-full text-xs py-3 font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                      >
                        {plan.cta || "Schedule Consultation"}
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 2. Premium Custom Package Builder */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-none" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                  Bespoke Solutions
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Customize Your Package
              </h3>
              <p className="text-sm text-muted mt-1">
                Select your required stack, budget, and timeline to receive a custom tailored proposal.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-muted">
                {selectedCustomServices.length} Services Selected
              </span>
            </div>
          </div>

          {/* Service Selection Checkboxes */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">1. Select Desired Services</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {CUSTOM_SERVICE_ITEMS.map((item) => {
                const isSelected = selectedCustomServices.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleCustomService(item)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold text-left transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-border bg-surface/50 text-muted hover:border-border hover:text-foreground"
                    }`}
                  >
                    <div className={`h-4 w-4 rounded flex items-center justify-center border ${isSelected ? "bg-primary border-primary text-white" : "border-muted/50"}`}>
                      {isSelected && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget & Timeline Selectors */}
          <div className="grid gap-8 md:grid-cols-2 pt-2">
            {/* Estimated Budget */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">2. Estimated Budget</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BUDGET_TIERS.map((bgt) => (
                  <button
                    key={bgt}
                    type="button"
                    onClick={() => setSelectedBudget(bgt)}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      selectedBudget === bgt
                        ? "border-accent bg-accent/15 text-accent shadow-sm"
                        : "border-border bg-surface/50 text-muted hover:border-border hover:text-foreground"
                    }`}
                  >
                    {bgt}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">3. Project Timeline</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIMELINE_TIERS.map((tml) => (
                  <button
                    key={tml}
                    type="button"
                    onClick={() => setSelectedTimeline(tml)}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      selectedTimeline === tml
                        ? "border-primary bg-primary/15 text-primary shadow-sm"
                        : "border-border bg-surface/50 text-muted hover:border-border hover:text-foreground"
                    }`}
                  >
                    {tml}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary & Launch Booking CTA */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-xs text-muted text-center sm:text-left">
              <p><strong className="text-foreground">Budget:</strong> {selectedBudget} • <strong className="text-foreground">Timeline:</strong> {selectedTimeline}</p>
              <p className="line-clamp-1"><strong className="text-foreground">Services:</strong> {selectedCustomServices.join(", ") || "None selected"}</p>
            </div>

            <Button
              onClick={handleLaunchCustomBooking}
              variant="accent"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-xl shadow-accent/25"
            >
              Launch Custom Package Booking
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
