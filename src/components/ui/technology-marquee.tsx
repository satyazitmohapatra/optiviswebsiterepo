"use client";

import { TechnologyItem } from "@/data/technologies";
import { TechnologyCard } from "./technology-card";

type TechnologyMarqueeProps = {
  items: TechnologyItem[];
  direction?: "left" | "right";
  className?: string;
};

export function TechnologyMarquee({
  items,
  direction = "left",
  className = "",
}: TechnologyMarqueeProps) {
  // Triple the items to ensure seamless infinite looping on wider displays
  const marqueeItems = [...items, ...items, ...items];

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`group-marquee relative overflow-hidden py-3 ${className}`}>
      {/* Left Gradient Edge Mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-28 bg-gradient-to-r from-[#050C1A] to-transparent" />
      
      {/* Right Gradient Edge Mask */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-28 bg-gradient-to-l from-[#050C1A] to-transparent" />

      {/* Marquee Track */}
      <div className={`flex gap-6 ${animationClass}`}>
        {marqueeItems.map((tech, index) => (
          <TechnologyCard
            key={`${tech.id}-${index}`}
            tech={tech}
            delayIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
