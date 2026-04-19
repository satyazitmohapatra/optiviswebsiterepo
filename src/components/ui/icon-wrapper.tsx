import { cn } from "@/lib/cn";

export type IconName = "code" | "spark" | "chart";

type IconWrapperProps = {
  icon: string;
  className?: string;
};

const iconPaths: Record<IconName, React.ReactNode> = {
  code: <path d="M4.75 8.75 1.5 12l3.25 3.25M19.25 8.75 22.5 12l-3.25 3.25M14.5 4.5 9.5 19.5" />,
  spark: <path d="M12 2.5 14.52 8l5.48.53-4.12 3.75 1.19 5.47L12 14.85 6.93 17.75l1.19-5.47L4 8.53 9.48 8 12 2.5Z" />,
  chart: <path d="M4 20V8m8 12V4m8 16v-9M2 20h20" />,
};

export function IconWrapper({ icon, className }: IconWrapperProps) {
  const safeIcon = (icon in iconPaths ? icon : "code") as IconName;

  return (
    <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary", className)} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[safeIcon]}
      </svg>
    </span>
  );
}
