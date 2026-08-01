"use client";

import { TechnologyItem } from "@/data/technologies";

type TechnologyCardProps = {
  tech: TechnologyItem;
  delayIndex?: number;
};

export function TechnologyCard({ tech, delayIndex = 0 }: TechnologyCardProps) {
  const animationDelay = `${(delayIndex % 5) * 0.4}s`;

  return (
    <div
      className="group relative flex w-[220px] h-[90px] flex-none items-center gap-3.5 rounded-[24px] border border-white/12 bg-white/[0.04] p-4 backdrop-blur-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer select-none overflow-hidden"
      style={{
        animation: "float-micro 6s ease-in-out infinite",
        animationDelay,
      }}
    >
      {/* Specular Inner Glass Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Blue Ambient Glow in Card Corner */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Brand SVG Icon */}
      <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10">
        <svg
          className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(76,141,255,0.6)]"
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: tech.svgIcon }}
        />
      </div>

      {/* Text Info */}
      <div className="relative z-10 min-w-0 flex-1">
        <h4 className="text-sm font-extrabold tracking-tight text-white group-hover:text-primary transition-colors duration-200 truncate">
          {tech.name}
        </h4>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate mt-0.5 group-hover:text-slate-200 transition-colors">
          {tech.category}
        </p>
      </div>
    </div>
  );
}
