import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type CaseStudy = {
  name: string;
  industry: string;
  problem: string;
  solution: string;
  results: string[];
};

type CaseStudiesProps = {
  caseStudies: CaseStudy[];
};

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="border-y border-border bg-surface/50 py-20 sm:py-24 overflow-hidden">
      <Container className="space-y-12">
        <SectionHeading
          badge="Case Studies"
          title="Proof through measurable outcomes"
          description="A snapshot of how Optivis turns business challenges into high-performing digital experiences."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Reveal key={study.name}>
              <Card className="h-full space-y-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase">{study.industry}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">{study.name}</h3>
                </div>
                <div className="space-y-4 text-sm leading-7 text-muted">
                  <p><span className="font-semibold text-foreground">Problem:</span> {study.problem}</p>
                  <p><span className="font-semibold text-foreground">Solution:</span> {study.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Results</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <li key={result} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
