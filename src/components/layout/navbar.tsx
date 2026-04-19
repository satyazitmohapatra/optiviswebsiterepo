"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  items: NavItem[];
};

export function Navbar({ brand, items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center outline-none transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/7cbd1be0-16ad-4824-876a-e15daab8e35e-removebg-preview.png"
            alt={brand}
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
          />
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">
                {item.label}
              </a>
            ))}
            <Button href="#contact" className="py-2">
              Book a Consultation
            </Button>
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden ml-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {isOpen ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </Container>
      <div id="mobile-menu" className={cn("border-t border-border/70 bg-background/95 backdrop-blur-md px-4 py-6 md:hidden transition-all duration-300 ease-in-out origin-top", !isOpen ? "hidden opacity-0 scale-y-95" : "block opacity-100 scale-y-100")}>
        <nav className="flex flex-col gap-3" aria-label="Mobile Primary">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-2 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2" onClick={() => setIsOpen(false)}>
            Book a Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}
