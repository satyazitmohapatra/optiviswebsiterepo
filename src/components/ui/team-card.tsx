"use client";

import { useState, useRef } from "react";
import { TeamMember } from "@/data/team";

type TeamCardProps = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

export function TeamCard({ member, onSelect }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(member)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      tabIndex={0}
      role="button"
      aria-label={`View profile for ${member.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(member);
        }
      }}
      className="group relative w-[290px] sm:w-[320px] flex-none rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6 shadow-md shadow-slate-900/5 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Specular Ambient Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]" />

      {/* Floating Mouse-Follower Custom Cursor Badge */}
      {isHovered && (
        <div
          className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 text-white px-3.5 py-1.5 text-xs font-bold shadow-xl backdrop-blur-md border border-white/20 whitespace-nowrap animate-in fade-in zoom-in-90 duration-200">
            View Profile &rarr;
          </span>
        </div>
      )}

      {/* Portrait Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-100 mb-5 border border-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.portrait}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Designation Tag */}
      <span className="inline-block rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider mb-2">
        {member.role}
      </span>

      {/* Name */}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
        {member.name}
      </h3>

      {/* Expertise One-Liner */}
      <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
        {member.expertise}
      </p>
    </div>
  );
}
