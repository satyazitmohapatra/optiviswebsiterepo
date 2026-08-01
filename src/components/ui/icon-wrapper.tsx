import { cn } from "@/lib/cn";

export type IconName =
  | "code"
  | "spark"
  | "chart"
  | "transform"
  | "engineering"
  | "data"
  | "government"
  | "shield"
  | "users"
  | "globe"
  | "clock"
  | "web"
  | "social"
  | "content"
  | "custom";

type IconWrapperProps = {
  icon: string;
  className?: string;
};

const iconPaths: Record<IconName, React.ReactNode> = {
  code: <path d="M4.75 8.75 1.5 12l3.25 3.25M19.25 8.75 22.5 12l-3.25 3.25M14.5 4.5 9.5 19.5" />,
  spark: <path d="M12 2.5 14.52 8l5.48.53-4.12 3.75 1.19 5.47L12 14.85 6.93 17.75l1.19-5.47L4 8.53 9.48 8 12 2.5Z" />,
  chart: <path d="M4 20V8m8 12V4m8 16v-9M2 20h20" />,
  transform: <path d="M4 7h11l-3-3m3 3-3 3M20 17H9l3 3m-3-3 3-3" />,
  engineering: <path d="M14.7 6.3a5 5 0 0 1-6.4 6.4L4 17v3h3l4.3-4.3a5 5 0 0 1 6.4-6.4l-3 3-2-2 3-3Z" />,
  data: <path d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Zm0 0v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2" />,
  government: <path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6M4 10h16" />,
  shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 7.9 7.5 9.5 4.3-1.6 7.5-4.9 7.5-9.5V6L12 3Zm-2.5 8.5 2 2 4-4.2" />,
  users: <path d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20c.5-3.2 3-5.5 6-5.5s5.5 2.3 6 5.5M13 14.6c.6-.1 1.2-.1 1.8 0 3 .3 5.4 2.6 5.9 5.4" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c-2.2 0-4-4-4-9s1.8-9 4-9 4 4 4 9-1.8 9-4 9ZM3.5 9h17M3.5 15h17" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2" />,
  web: <path d="M4 5h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm0 4h16M7 5V3m10 2V3" />,
  social: <path d="M17.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-11-6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9.3-4-6.6 3.5m0 1 6.6 3.5" />,
  content: <path d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm8 0v4h4M8 12h8m-8 4h5" />,
  custom: <path d="M12 4.5 3 8.5l9 4 9-4-9-4Zm-9 8 9 4 9-4M3 16.5l9 4 9-4" />,
};

export function IconWrapper({ icon, className }: IconWrapperProps) {
  const safeIcon = (icon in iconPaths ? icon : "code") as IconName;

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/[0.07] text-primary",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[safeIcon]}
      </svg>
    </span>
  );
}
