"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { TeamDrawer } from "@/components/ui/team-drawer";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";

// Small decorative dot accent — placed randomly near cards
const DOT_ACCENTS = [
  { top: "8%", left: "5%", size: 14, color: "bg-primary/25" },
  { top: "42%", right: "3%", size: 10, color: "bg-accent/30" },
  { bottom: "12%", left: "8%", size: 12, color: "bg-primary/20" },
  { top: "18%", right: "12%", size: 8, color: "bg-accent/25" },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="py-28 sm:py-36 bg-surface/60 border-y border-border/80 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[170px] pointer-events-none" />

      {/* Decorative dots */}
      {DOT_ACCENTS.map((dot, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${dot.color} pointer-events-none`}
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <SectionHeading
            badge="Our Team"
            title="Meet the Team"
            description="The people behind Optivis — building software that performs."
            align="center"
          />
        </motion.div>

        {/* 3-column grid — top row 3, bottom row 2 centered */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14 max-w-4xl mx-auto"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              // Center the last item if odd count on last row
              className={
                TEAM_MEMBERS.length % 3 !== 0 &&
                TEAM_MEMBERS.indexOf(member) === TEAM_MEMBERS.length - 1
                  ? "sm:col-start-2 col-span-1"
                  : TEAM_MEMBERS.length % 3 === 1 &&
                    TEAM_MEMBERS.indexOf(member) === TEAM_MEMBERS.length - 2
                  ? "sm:col-start-1 col-span-1"
                  : ""
              }
            >
              <TeamCard member={member} onSelect={(m) => setSelectedMember(m)} />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <TeamDrawer
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
