import { cn } from "@/lib/cn";

type BadgeProps = {
  label: string;
  className?: string;
};

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {label}
    </span>
  );
}
