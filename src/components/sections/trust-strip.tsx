import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type TrustStat = {
  label: string;
  description: string;
};

type TrustStripProps = {
  stats: TrustStat[];
};

export function TrustStrip({ stats }: TrustStripProps) {
  return (
    <section className="border-b border-border bg-surface py-12 overflow-hidden">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-2 px-4">
                <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{stat.label}</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">{stat.description}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
