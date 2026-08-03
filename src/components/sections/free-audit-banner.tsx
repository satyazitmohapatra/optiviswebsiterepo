"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useBookingModal } from "@/lib/booking/booking-context";

const AUDIT_FEATURES = [
  {
    title: "Core Web Vitals & Speed",
    description: "Deep latency, page load speed, and server response analysis",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Security & Vulnerabilities",
    description: "SSL certificate, header safety, CORS & API endpoint audit",
    icon: (
      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Mobile UX & Conversion",
    description: "Viewport responsiveness, touch targets & SERP gap inspection",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "5-Page Custom PDF Report",
    description: "Actionable priority fixes delivered to your email in 48 hours",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export function FreeAuditBanner() {
  const { openBookingModal } = useBookingModal();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim() || !email.trim()) {
      setError("Please enter your website URL and business email.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      let isSuccessSubmission = false;
      let errorMessage = "";

      // Primary Attempt: Direct client-side fetch to Web3Forms
      try {
        const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "28df687b-280f-403f-9bb0-f6527f90a212";
        const fullName = name.trim() || "Website Visitor";
        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `Free Audit Request for ${websiteUrl || fullName}`,
            from_name: "Optivis Website Contact Form",
            full_name: fullName,
            email: email,
            website_url: websiteUrl,
            interested_service: "Free 48-Hour Technical & Architecture Audit",
            message: `Free audit requested for: ${websiteUrl}`,
          }),
        });

        const contentType = directRes.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const directData = (await directRes.json()) as { success?: boolean; message?: string };
          if (directRes.ok && directData.success) {
            isSuccessSubmission = true;
          } else {
            errorMessage = directData.message || "";
          }
        }
      } catch {
        // Direct fetch failed (e.g. adblocker), fall back to API route
      }

      // Secondary Fallback Attempt: Call internal Next.js API route
      if (!isSuccessSubmission) {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: name || "Website Visitor",
            email: email,
            websiteUrl: websiteUrl,
            formType: "free-audit",
            interestedService: "Free 48-Hour Technical & Architecture Audit",
          }),
        });

        const result = (await res.json()) as { success?: boolean; error?: string };
        if (res.ok && result.success) {
          isSuccessSubmission = true;
        } else {
          errorMessage = result.error || errorMessage || "Failed to submit free audit request.";
        }
      }

      setIsSubmitting(false);

      if (isSuccessSubmission) {
        setIsSuccess(true);
      } else {
        setError(errorMessage || "Failed to submit free audit request.");
      }
    } catch {
      setIsSubmitting(false);
      setError("Network error. Please try again.");
    }
  };

  const handleLaunchModalAudit = () => {
    openBookingModal({
      service: "Custom Solution",
      customServices: ["Free 48-Hour Technical & Architecture Audit"],
    });
  };

  const inputClassName =
    "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-xs text-foreground placeholder:text-muted/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300";

  return (
    <section id="free-audit" className="py-28 sm:py-36 bg-surface/60 border-y border-border/80 text-foreground relative overflow-hidden select-none">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <span className="h-[2px] w-4 rounded-full bg-accent flex-none" />
                <span>Zero Commitment • 100% Free</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                Request a Free 48-Hour Technical &amp; Code Audit
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl font-normal">
                Planning to build a new product or scale an existing platform? Let our senior technical architects inspect your speed bottlenecks, security headers, and Core Web Vitals — delivering a 5-page PDF roadmap to your inbox.
              </p>
            </div>

            {/* Feature Grid with Clean Non-Overflow Titles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {AUDIT_FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl border border-border bg-background shadow-sm space-y-2 hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="h-9 w-9 rounded-xl bg-surface flex items-center justify-center border border-border flex-none">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-foreground tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">Claim Your Free Audit</h3>
                <p className="text-xs text-muted mt-1">Enter your website or app URL below to start the review.</p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="audit-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center space-y-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Free Audit Requested!</h4>
                    <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
                      Our senior architects are analyzing <strong className="text-foreground">{websiteUrl}</strong>. Your 5-page PDF report will arrive at <strong className="text-primary">{email}</strong> within 48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-xs text-muted underline hover:text-foreground pt-2 transition-colors"
                    >
                      Submit Another URL
                    </button>
                  </motion.div>
                ) : (
                  <form key="audit-form" onSubmit={handleSubmit} className="space-y-4">
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                      Website / App URL <span className="text-accent">*</span>
                      <input
                        type="url"
                        required
                        placeholder="https://yourcompany.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className={inputClassName}
                      />
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                      Business Email <span className="text-accent">*</span>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClassName}
                      />
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                      Your Name <span className="text-muted font-normal">(Optional)</span>
                      <input
                        type="text"
                        placeholder="Alex Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClassName}
                      />
                    </label>

                    {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-2xl bg-accent hover:bg-accent/90 text-secondary font-bold py-4 text-xs uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-[0.98]"
                      >
                        {isSubmitting ? "Processing..." : "Generate Free 48-Hour Technical Audit →"}
                      </button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={handleLaunchModalAudit}
                          className="text-xs font-semibold text-muted hover:text-foreground transition-colors underline underline-offset-4"
                        >
                          Or Schedule a Live 1-on-1 Audit Strategy Call →
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>

              <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted font-medium">
                <span>⚡ 100% Free • No Credit Card</span>
                <span>🔒 Strict Confidentiality</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
