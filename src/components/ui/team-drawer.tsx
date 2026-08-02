"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TeamMember } from "@/data/team";
import { useBookingModal } from "@/lib/booking/booking-context";

type TeamDrawerProps = {
  member: TeamMember | null;
  onClose: () => void;
};

export function TeamDrawer({ member, onClose }: TeamDrawerProps) {
  const { openBookingModal } = useBookingModal();

  // ESC Key Listener & Body Scroll Lock
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [member, onClose]);

  const handleScheduleMeeting = () => {
    if (!member) return;
    onClose();
    openBookingModal({
      service: "Custom Solution",
      customServices: [`Strategy Consultation with ${member.name} (${member.role})`],
    });
  };

  return (
    <AnimatePresence>
      {member && (
        <div
          className="fixed inset-0 z-50 flex justify-end overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-drawer-title"
        >
          {/* Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Slide-In Drawer Box */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg max-h-screen overflow-y-auto bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border-l border-slate-200 select-text flex flex-col justify-between"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile drawer"
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Profile Content */}
            <div className="space-y-6 pt-2">
              {/* Header Info */}
              <div className="flex items-start gap-5">
                <div className="h-24 w-24 sm:h-28 sm:w-28 flex-none overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.portrait}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-8">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-none" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary truncate">
                      {member.role}
                    </span>
                  </div>
                  <h2 id="team-drawer-title" className="text-2xl font-extrabold text-slate-900 tracking-tight truncate">
                    {member.name}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{member.expertise}</p>
                </div>
              </div>

              {/* Concise One-Paragraph Brief */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Skills &amp; Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-slate-900 text-white px-2.5 py-1 text-[11px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Action Pill Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Connect</h4>
                <div className="flex flex-wrap gap-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                      <span>LinkedIn</span>
                      <span className="text-[10px] opacity-70">↗</span>
                    </a>
                  )}

                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                      <span>GitHub</span>
                      <span className="text-[10px] opacity-70">↗</span>
                    </a>
                  )}

                  {member.socials.portfolio && (
                    <a
                      href={member.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-primary hover:text-white hover:border-primary shadow-sm transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                      <span>Portfolio</span>
                      <span className="text-[10px] opacity-70">↗</span>
                    </a>
                  )}

                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-accent hover:text-slate-950 hover:border-accent shadow-sm transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Consultation CTA */}
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                type="button"
                onClick={handleScheduleMeeting}
                className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 text-xs uppercase tracking-wider shadow-lg shadow-primary/25 transition-all duration-200"
              >
                Schedule a Strategy Meeting with {member.name.split(" ")[0]}
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
