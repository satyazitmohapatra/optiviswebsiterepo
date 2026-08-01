import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-background p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft",
        className,
      )}
    >
      {children}
    </article>
  );
}
