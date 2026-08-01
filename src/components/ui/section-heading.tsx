import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ badge, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-2xl text-center")}>
      {badge ? <Badge label={badge} className={align === "center" ? "mx-auto" : undefined} /> : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
