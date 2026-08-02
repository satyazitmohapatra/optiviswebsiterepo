import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Optivis Consultancy Services homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-lg space-y-6">
        <p className="text-7xl sm:text-8xl font-extrabold text-primary/20 select-none">404</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors"
        >
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}
