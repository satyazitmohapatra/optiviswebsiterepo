import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type CtaBannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
};

export function CtaBanner({ headline, description, buttonLabel }: CtaBannerProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_right,_rgba(255,255,255,0.15),_transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-[800px] max-w-[100vw] h-auto aspect-square bg-secondary/80 mix-blend-multiply opacity-20 blur-3xl" />
      
      <Container className="relative z-10 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              {headline}
            </h2>
            <p className="text-lg leading-relaxed text-white/80 mb-10">
              {description}
            </p>
            <Button
              href="#contact"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 border-0 text-base px-8 py-3 rounded-full font-bold shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
