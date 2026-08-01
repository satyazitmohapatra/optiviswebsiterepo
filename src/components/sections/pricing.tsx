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
                      : "border border-border bg-background shadow-sm hover:shadow-xl"
                  }`}
                >
                  <div className="relative flex h-full flex-col">
                    {featured && (
                      <span className="absolute -top-11 left-0 rounded-full bg-accent px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-secondary shadow-md">
                        Most Popular
                      </span>
                    )}

                    <IconWrapper icon={plan.icon ?? "custom"} className="mb-6" />
                    <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <span className="text-xs text-muted block font-medium">Starting from</span>
                      <p className="text-2xl font-extrabold text-primary">{plan.price}</p>
                    </div>

                    {plan.suitableFor && plan.suitableFor.length > 0 && (
                      <div className="mb-5 p-3 rounded-lg bg-surface border border-border/70 text-xs">
                        <p className="font-bold text-foreground mb-1">Suitable for:</p>
                        <ul className="space-y-1 text-muted">
                          {plan.suitableFor.map((item) => (
                            <li key={item} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {plan.description && (
                      <p className="text-xs text-muted leading-relaxed mb-5">{plan.description}</p>
                    )}

                    {plan.features && (
                      <ul className="space-y-2.5 border-t border-border/80 pt-5 mb-8 flex-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs text-muted">
                            <svg viewBox="0 0 24 24" className="mt-0.5 h-3.5 w-3.5 flex-none text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Button
                      onClick={() => openBookingModal(mapPlanToService(plan.name))}
                      variant={featured ? "accent" : "secondary"}
                      className="w-full text-xs py-3 font-bold uppercase tracking-wider"
                    >
                      {plan.cta || "Schedule Consultation"}
                    </Button>
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
          className="rounded-3xl border border-white/15 bg-background/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary border border-primary/20 mb-2">
                Bespoke Solutions
              </span>
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
