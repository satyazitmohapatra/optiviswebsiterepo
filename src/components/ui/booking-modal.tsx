"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/lib/booking/booking-context";
import { useBooking } from "@/lib/booking/use-booking";
import { ServiceOption, BudgetOption, TimelineOption, TimeSlotOption } from "@/lib/booking/types";
import { Button } from "./button";

const SERVICE_OPTIONS: ServiceOption[] = [
  "Web Development",
  "Digital Marketing",
  "Content & Creative",
  "Enterprise Custom Solution",
  "Custom Package Builder",
  "Digital Transformation",
  "Enterprise Cloud Engineering",
  "AI Analytics & Automation",
  "Multilingual G2C Portals",
  "Web App Development",
  "IT Strategy & Consulting",
];

const BUDGET_OPTIONS: BudgetOption[] = [
  "Under ₹50K",
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L+",
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $35,000",
  "$35,000 - $75,000",
  "$75,000+",
];

const TIMELINE_OPTIONS: TimelineOption[] = [
  "ASAP",
  "1 Month",
  "2–3 Months",
  "Flexible",
];

const TIME_SLOT_OPTIONS: TimeSlotOption[] = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const fieldClassName =
  "w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background disabled:opacity-60";

const selectClassName =
  "w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background disabled:opacity-60 appearance-none";

export function BookingModal() {
  const {
    isOpen,
    selectedService,
    selectedBudget,
    selectedTimeline,
    customServices,
    closeBookingModal,
  } = useBookingModal();

  const {
    formData,
    errors,
    serverError,
    bookingResult,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  } = useBooking();

  // Sync state from context when modal opens
  useEffect(() => {
    if (isOpen) {
      if (selectedService) handleChange("selectedService", selectedService);
      if (selectedBudget) handleChange("budgetRange", selectedBudget);
      if (selectedTimeline) handleChange("timeline", selectedTimeline);
      if (customServices && customServices.length > 0) {
        handleChange("customServices", customServices.join(", ") as any);
        handleChange(
          "notes",
          `Selected Package Services: ${customServices.join(", ")} | Timeline: ${selectedTimeline || "ASAP"}`
        );
      }
    }
  }, [isOpen, selectedService, selectedBudget, selectedTimeline, customServices, handleChange]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeBookingModal]);

  // Auto-close modal after successful submission
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        closeBookingModal();
        resetForm();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, closeBookingModal, resetForm]);

  const minDateStr = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-xl"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-background/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl text-foreground select-text"
        >
          {/* Close X Button */}
          <button
            type="button"
            onClick={closeBookingModal}
            aria-label="Close modal"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-border text-muted hover:text-foreground hover:bg-white/10 transition-all duration-200"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* Success State */
              <motion.div
                key="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-10 text-center space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Booking Confirmed • {bookingResult?.bookingId || "OPT-CONFIRMED"}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Thank you! Your consultation request has been received.
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Our senior technical team is reviewing your project details. A calendar invite and summary brief will be sent to your email.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button
                    onClick={() => {
                      closeBookingModal();
                      resetForm();
                    }}
                    variant="accent"
                    className="px-8 py-3 text-xs uppercase tracking-wider"
                  >
                    Done & Close
                  </Button>
                </div>
              </motion.div>
            ) : (
              /* Booking Form */
              <motion.div key="modal-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <div className="space-y-1.5 pr-8">
                  <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent border border-accent/30">
                    Service Booking Consultation
                  </span>
                  <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    Book Your Solution Strategy Session
                  </h2>
                  <p className="text-xs sm:text-sm text-muted">
                    Pre-selected Service: <strong className="text-primary font-bold">{formData.selectedService}</strong>
                  </p>

                  {customServices && customServices.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-bold text-muted uppercase mr-1">Selected Package:</span>
                      {customServices.map((cs) => (
                        <span key={cs} className="text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 rounded-md px-2 py-0.5">
                          {cs}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      Full Name <span className="text-accent">*</span>
                      <input
                        className={`${fieldClassName} ${errors.fullName ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                        name="fullName"
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.fullName}</p>}
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      Business Email <span className="text-accent">*</span>
                      <input
                        className={`${fieldClassName} ${errors.businessEmail ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                        name="businessEmail"
                        type="email"
                        placeholder="sarah@enterprise.com"
                        value={formData.businessEmail}
                        onChange={(e) => handleChange("businessEmail", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.businessEmail && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.businessEmail}</p>}
                    </label>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      Phone Number <span className="text-accent">*</span>
                      <input
                        className={`${fieldClassName} ${errors.phoneNumber ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                        name="phoneNumber"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange("phoneNumber", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.phoneNumber}</p>}
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      Company Name <span className="text-accent">*</span>
                      <input
                        className={`${fieldClassName} ${errors.company ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                        name="company"
                        type="text"
                        placeholder="Optivis Enterprises"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.company && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.company}</p>}
                    </label>
                  </div>

                  {/* Row 3: Pre-filled Selected Service & Budget */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted relative">
                      Selected Service <span className="text-accent">*</span>
                      <div className="relative">
                        <select
                          className={`${selectClassName} ${errors.selectedService ? "border-red-500/70" : ""}`}
                          name="selectedService"
                          value={formData.selectedService}
                          onChange={(e) => handleChange("selectedService", e.target.value as ServiceOption)}
                          disabled={isSubmitting}
                        >
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc} className="bg-background text-foreground">
                              {svc}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      {errors.selectedService && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.selectedService}</p>}
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted relative">
                      Estimated Budget <span className="text-accent">*</span>
                      <div className="relative">
                        <select
                          className={`${selectClassName} ${errors.budgetRange ? "border-red-500/70" : ""}`}
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) => handleChange("budgetRange", e.target.value as BudgetOption)}
                          disabled={isSubmitting}
                        >
                          {BUDGET_OPTIONS.map((bgt) => (
                            <option key={bgt} value={bgt} className="bg-background text-foreground">
                              {bgt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      {errors.budgetRange && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.budgetRange}</p>}
                    </label>
                  </div>

                  {/* Row 4: Preferred Date & Preferred Time */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      Preferred Date <span className="text-accent">*</span>
                      <input
                        className={`${fieldClassName} ${errors.meetingDate ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                        name="meetingDate"
                        type="date"
                        min={minDateStr}
                        value={formData.meetingDate}
                        onChange={(e) => handleChange("meetingDate", e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.meetingDate && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.meetingDate}</p>}
                    </label>

                    <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted relative">
                      Preferred Time <span className="text-accent">*</span>
                      <div className="relative">
                        <select
                          className={`${selectClassName} ${errors.meetingTime ? "border-red-500/70" : ""}`}
                          name="meetingTime"
                          value={formData.meetingTime}
                          onChange={(e) => handleChange("meetingTime", e.target.value as TimeSlotOption)}
                          disabled={isSubmitting}
                        >
                          {TIME_SLOT_OPTIONS.map((t) => (
                            <option key={t} value={t} className="bg-background text-foreground">
                              {t}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      {errors.meetingTime && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.meetingTime}</p>}
                    </label>
                  </div>

                  {/* Row 5: Project Description */}
                  <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                    Project Description <span className="text-accent">*</span>
                    <textarea
                      className={`${fieldClassName} ${errors.projectDescription ? "border-red-500/70 focus:ring-red-500/30" : ""}`}
                      name="projectDescription"
                      rows={3}
                      placeholder="Briefly describe your project scope, targets, or specific technical requirements..."
                      value={formData.projectDescription}
                      onChange={(e) => handleChange("projectDescription", e.target.value)}
                      disabled={isSubmitting}
                    />
                    {errors.projectDescription && <p className="text-red-500 text-[11px] font-semibold tracking-normal mt-1">{errors.projectDescription}</p>}
                  </label>

                  {/* Row 6: Additional Notes */}
                  <label className="block space-y-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                    Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
                    <input
                      className={fieldClassName}
                      name="notes"
                      type="text"
                      placeholder="e.g. Please include NDA prior to consultation"
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      disabled={isSubmitting}
                    />
                  </label>

                  {/* Submit Bar & Server Errors */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/80">
                    <div className="text-xs">
                      {serverError ? (
                        <span className="text-red-500 font-semibold">{serverError}</span>
                      ) : (
                        <span className="text-muted">Required fields marked with <span className="text-accent">*</span></span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={closeBookingModal}
                        className="w-1/2 sm:w-auto px-5 py-3 text-xs font-semibold text-muted hover:text-foreground transition-colors"
                      >
                        Cancel
                      </button>
                      <Button
                        type="submit"
                        className="w-1/2 sm:w-auto min-w-44 py-3 text-xs uppercase tracking-wider"
                        variant="accent"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Confirming...
                          </span>
                        ) : (
                          "Confirm Booking"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
