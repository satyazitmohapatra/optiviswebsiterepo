import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type Insight = {
  title: string;
  category: string;
  snippet: string;
  date: string;
  image: string;
};

type InsightsProps = {
  insights: Insight[];
};

export function Insights({ insights }: InsightsProps) {
  return (
    <section id="insights" className="py-24 sm:py-32 bg-surface overflow-hidden">
      <Container className="space-y-16">
        <SectionHeading
          badge="Insights"
          title="Perspectives on the future of business"
          description="Explore our latest thinking on how technology is redefining the enterprise landscape."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Reveal key={insight.title}>
              <article className="group flex flex-col h-full bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={insight.title}
                    src={insight.image}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4 text-xs font-medium text-muted">
                    <span className="text-primary uppercase tracking-wider">{insight.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{insight.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {insight.snippet}
                  </p>
                  <div className="mt-6 flex items-center text-primary text-sm font-semibold hover:underline">
                    Read Article
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
