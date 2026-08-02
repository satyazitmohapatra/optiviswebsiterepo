"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openBookingModal } = useBookingModal();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* Top Utility Bar (Fades out smoothly on scroll) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden bg-[#060B15] text-slate-300 md:block border-b border-white/10 overflow-hidden"
          >
            <Container className="flex h-9 items-center justify-between text-xs font-medium">
              <div className="flex items-center gap-6">
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-1.5 transition-colors hover:text-accent">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{email}</span>
                  </a>
                )}
                {phone && (
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-accent">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{phone}</span>
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Bhubaneswar · Enterprise IT Consulting
                </span>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Bar (Stays Sticky at the Top Always) */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled
            ? "border-border bg-background/95 backdrop-blur-xl shadow-md py-1"
            : "border-border/50 bg-background/80 backdrop-blur-md py-2"
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center outline-none transition-opacity hover:opacity-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt={brand}
              decoding="async"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-xs font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => openBookingModal("Custom Solution")}
                className="hidden sm:inline-flex rounded-xl bg-accent hover:bg-accent/90 text-secondary font-bold px-5 py-2.5 text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 border-none"
              >
                Schedule A Call
              </Button>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground lg:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 lg:hidden overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile Primary">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-foreground/90 hover:bg-surface hover:text-primary transition-colors flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-muted text-xs">→</span>
                </a>
              ))}

              <div className="pt-2">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    openBookingModal("Custom Solution");
                  }}
                  className="w-full rounded-xl bg-accent hover:bg-accent/90 text-secondary font-bold py-3.5 text-xs uppercase tracking-wider"
                >
                  Schedule A Call
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
