import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type AboutProps = {
  headline: string;
  description: string;
};

export function About({ headline, description }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-surface border-y border-border overflow-hidden">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Who We Are</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-8">
              {headline}
            </h2>
            <p className="text-lg leading-relaxed text-muted max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="group relative block overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 lg:aspect-[21/9] md:aspect-[16/9] aspect-[1/1] w-full">
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-night-traffic.jpg"
                alt="City traffic at night"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              
              {/* Partial Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/70 to-transparent opacity-50 translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-90 z-10 pointer-events-none" />
              
              {/* Text Area */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 z-20 flex flex-col justify-end pointer-events-none">
                <div className="translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-sm mb-3 tracking-tight">
                    Powering the City That Never Sleeps
                  </h3>
                  <p className="text-white/80 max-w-2xl text-sm sm:text-base leading-relaxed drop-shadow-sm">
                    Our digital infrastructure enables highly resilient, mission-critical operations 24/7. We architect systems that handle constant global demand gracefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
