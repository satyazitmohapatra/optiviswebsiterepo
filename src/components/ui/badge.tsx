import { cn } from "@/lib/cn";

type BadgeProps = {
  label: string;
  className?: string;
};

export function Badge({ label, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary select-none",
        className
      )}
    >
      <span className="h-[2px] w-4 rounded-full bg-accent flex-none" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
