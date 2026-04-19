import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={cn("rounded-2xl border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft", className)}>{children}</article>;
}
