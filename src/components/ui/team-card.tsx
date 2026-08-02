"use client";

import { TeamMember } from "@/data/team";

type TeamCardProps = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

export function TeamCard({ member, onSelect }: TeamCardProps) {
  return (
    <div
      onClick={() => onSelect(member)}
      tabIndex={0}
      role="button"
      aria-label={`View profile — ${member.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(member);
        }
      }}
      className="group text-center cursor-pointer select-none"
    >
      {/* Portrait — clean rounded square, no border */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-surface mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.portrait}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Name */}
      <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-xs sm:text-sm text-muted mt-0.5">
        {member.role}
      </p>
    </div>
  );
}
