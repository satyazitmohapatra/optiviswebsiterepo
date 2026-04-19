"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type ScrollSection = {
  id: string;
  label: string;
};

type ScrollNavigationProps = {
  sections: ScrollSection[];
};

export function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when the section reaches the middle 20% of viewport
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden flex-col gap-4 md:flex drop-shadow-md"
      aria-label="Section Navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <div key={id} className="group relative flex items-center">
            <a
              href={`#${id}`}
              className="flex items-center outline-none py-2 cursor-pointer"
              aria-label={`Scroll to ${label}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(id);
                }
              }}
            >
              <span
                className={cn(
                  "block h-[3px] rounded-full transition-all duration-300 ease-in-out bg-white shadow-sm",
                  isActive
                    ? "w-12 shadow-white/50"
                    : "w-6 hover:w-8"
                )}
              />
            </a>
            {/* Tooltip */}
            <span className="absolute left-full ml-5 opacity-0 translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 text-xs font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap pointer-events-none drop-shadow-md">
              {label}
            </span>
          </div>
        );
      })}
    </nav>
  );
}
