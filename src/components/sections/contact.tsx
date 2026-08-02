"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/lib/booking/booking-context";

type ContactProps = {
  email?: string;
  phone?: string;
  address?: string;
  socials?: Record<string, string>;
};

type ContactFormData = {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  company: string;
  interestedService: string;
  message: string;
};

const SERVICE_DROPDOWN_OPTIONS = [
  "Web Development",
  "Digital Marketing",
  "Content & Creative",
  "Enterprise Custom Solution",
  "AI & Analytics",
  "Cloud Infrastructure",
  "General Inquiry",
];

const inputClassName =
  "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-xs text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted/60";

export function Contact({
  email = "optivis.ocs.support@gmail.com",
  phone = "+91 79782 89942",
  address,
}: ContactProps) {
  const { openBookingModal } = useBookingModal();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    company: "",
    interestedService: "Web Development",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        businessEmail: "",
        phoneNumber: "",
        company: "",
        interestedService: "Web Development",
        message: "",
      });
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-surface/60 text-foreground border-y border-border/80 relative overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Enterprise Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <span className="h-[2px] w-4 rounded-full bg-accent flex-none" />
                <span>Direct Discovery &amp; Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                Let&apos;s Build Something Great Together
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                Whether you&apos;re planning a new enterprise digital product, modernizing legacy systems, or scaling cloud architecture, our senior technology leads are ready to collaborate.
              </p>
            </div>

            {/* Guaranteed Response Time Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse flex-none" />
              <span>⚡ Average Response Time: Under 2 Hours</span>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="h-11 w-11 flex-none rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted block">Business Email</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors">{email}</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-background transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="h-11 w-11 flex-none rounded-xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted block">Phone Number</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-accent transition-colors">{phone}</span>
                </div>
              </a>

              {/* Office Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background">
                <div className="h-11 w-11 flex-none rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted block">Global Offices</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground">{address || "Bhubaneswar, Odisha, India"}</span>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background">
                <div className="h-11 w-11 flex-none rounded-xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted block">Business Hours</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground">Mon – Fri: 9:00 AM – 6:00 PM IST / GMT</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Clean Enterprise Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* Success Confirmation State */
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                      <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        Thank you! Your message has been sent.
                      </h3>
                      <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed font-normal">
                        We have received your inquiry. A senior member of our technology team will respond to your email within 2 hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button
                        onClick={() => setIsSuccess(false)}
                        variant="secondary"
                        className="px-8 py-3 text-xs uppercase tracking-wider"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  /* Contact Form */
                  <form key="contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight">Send Us a Direct Message</h3>
                      <p className="text-xs text-muted mt-1">Fill out the quick form below and our team will get right back to you.</p>
                    </div>

                    {/* Row 1: Full Name & Business Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                        Full Name <span className="text-accent">*</span>
                        <input
                          className={`${inputClassName} ${errors.fullName ? "border-red-500/70" : ""}`}
                          type="text"
                          placeholder="e.g. Alex Vance"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          disabled={isSubmitting}
                        />
                        {errors.fullName && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.fullName}</p>}
                      </label>

                      <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                        Business Email <span className="text-accent">*</span>
                        <input
                          className={`${inputClassName} ${errors.businessEmail ? "border-red-500/70" : ""}`}
                          type="email"
                          placeholder="alex@enterprise.com"
                          value={formData.businessEmail}
                          onChange={(e) => handleChange("businessEmail", e.target.value)}
                          disabled={isSubmitting}
                        />
                        {errors.businessEmail && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.businessEmail}</p>}
                      </label>
                    </div>

                    {/* Row 2: Phone Number (Optional) & Company Name */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                        Phone Number <span className="text-muted font-normal">(Optional)</span>
                        <input
                          className={inputClassName}
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phoneNumber}
                          onChange={(e) => handleChange("phoneNumber", e.target.value)}
                          disabled={isSubmitting}
                        />
                      </label>

                      <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                        Company Name <span className="text-muted font-normal">(Optional)</span>
                        <input
                          className={inputClassName}
                          type="text"
                          placeholder="Optivis Global"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          disabled={isSubmitting}
                        />
                      </label>
                    </div>

                    {/* Row 3: Interested Service Dropdown */}
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground relative">
                      Interested Service
                      <div className="relative">
                        <select
                          className={`${inputClassName} appearance-none`}
                          value={formData.interestedService}
                          onChange={(e) => handleChange("interestedService", e.target.value)}
                          disabled={isSubmitting}
                        >
                          {SERVICE_DROPDOWN_OPTIONS.map((svc) => (
                            <option key={svc} value={svc} className="bg-background text-foreground">
                              {svc}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </label>

                    {/* Row 4: Message */}
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                      Message <span className="text-accent">*</span>
                      <textarea
                        className={`${inputClassName} ${errors.message ? "border-red-500/70" : ""}`}
                        rows={4}
                        placeholder="Tell us about your project requirements, goals, or questions..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.message && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.message}</p>}
                    </label>

                    {/* CTAs Bar */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                      {/* Primary CTA: Send Message */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto rounded-2xl bg-[#E8A33D] hover:bg-[#d99432] text-slate-950 font-bold px-8 py-4 text-xs uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-95 flex-none"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message →"
                        )}
                      </button>

                      {/* Secondary CTA: Schedule a Strategy Call */}
                      <button
                        type="button"
                        onClick={() => openBookingModal("Custom Solution")}
                        className="w-full sm:w-auto rounded-2xl border border-border bg-surface hover:bg-border/40 text-foreground font-bold px-7 py-4 text-xs uppercase tracking-wider transition-colors"
                      >
                        Schedule a Strategy Call →
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
