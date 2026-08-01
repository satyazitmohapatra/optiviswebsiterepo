"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { useBookingModal } from "@/lib/booking/booking-context";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  items: NavItem[];
  phone?: string;
  email?: string;
};

export function Navbar({ brand, items, phone, email }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openBookingModal } = useBookingModal();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Top Utility Bar */}
      <div className="hidden bg-secondary/95 text-white/80 backdrop-blur-md md:block border-b border-white/10">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-2 transition hover:text-accent">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18v12H3zM3 6l9 7 9-7" /></svg>
                {email}
              </a>
            )}
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition hover:text-accent">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-3-6z" /></svg>
                {phone}
              </a>
            )}
          </div>
          <p className="font-medium tracking-wider uppercase text-[10px] text-white/60">Bhubaneswar · London · Enterprise IT Consulting</p>
        </Container>
      </div>

      {/* Main Glass Navbar */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled
            ? "border-white/15 bg-background/80 backdrop-blur-2xl shadow-xl shadow-black/10"
            : "border-transparent bg-background/40 backdrop-blur-md"
        )}
      >
        <Container className="flex h-[4.5rem] items-center justify-between py-2">
          <a href="#top" className="flex items-center outline-none transition-opacity hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt={brand}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
              <Button onClick={() => openBookingModal("Custom Solution")} className="py-2.5 px-5">
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
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          "border-b border-border/70 bg-background/95 backdrop-blur-xl px-6 py-6 md:hidden transition-all duration-300 ease-in-out origin-top shadow-2xl",
          !isOpen ? "hidden opacity-0 scale-y-95" : "block opacity-100 scale-y-100"
        )}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-base font-semibold text-foreground/80 transition hover:bg-surface hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={() => {
              setIsOpen(false);
              openBookingModal("Custom Solution");
            }}
            className="mt-2 w-full"
          >
            Book a Consultation
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}

