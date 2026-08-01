"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { TeamDrawer } from "@/components/ui/team-drawer";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Triple items for seamless 100% infinite marquee loop without visual restart gap
  const marqueeItems = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollTrackRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollTrackRef.current) return;
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      scrollTrackRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="team" className="py-28 sm:py-36 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden select-none">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <Container className="space-y-12 relative z-10">
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <SectionHeading
              badge="Leadership & Experts"
              title="Meet the Minds Behind Optivis"
              description="Our consultants, engineers, designers, and technology experts work together to build secure, scalable, and intelligent digital solutions."
              align="left"
            />
          </motion.div>

          {/* Desktop Left/Right Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-primary/40 hover:text-primary active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-primary/40 hover:text-primary active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Auto-Sliding Infinite Marquee Track (Right -> Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="group-team-marquee relative overflow-hidden py-4"
        >
          {/* Left Gradient Edge Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent" />

          {/* Right Gradient Edge Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee Track Container */}
          <div
            ref={scrollTrackRef}
            onWheel={handleWheel}
            className="animate-team-marquee flex gap-6 px-2"
          >
            {marqueeItems.map((member, idx) => (
              <TeamCard
                key={`${member.id}-${idx}`}
                member={member}
                onSelect={(m) => setSelectedMember(m)}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile Drag/Swipe Cue */}
        <div className="flex sm:hidden justify-center text-xs font-semibold text-slate-400 gap-1.5 pt-2">
          <span>&larr; Drag or swipe to explore team &rarr;</span>
        </div>
      </Container>

      {/* Slide-In Profile Drawer Modal */}
      <TeamDrawer
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
