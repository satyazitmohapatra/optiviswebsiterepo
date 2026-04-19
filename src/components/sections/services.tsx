import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  title: string;
  description: string;
  image: string;
};

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background border-y border-border overflow-hidden">
      <Container className="space-y-16">
        <SectionHeading
          badge="Services"
          title="Enterprise Solutions"
          description="High-impact web architectures tailored to scale, delivering resilience and clear business growth."
          align="center"
        />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="group relative block overflow-hidden rounded-2xl bg-surface border border-border aspect-[4/5] w-full hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Partial Bottom Gradient Overlay */}
                {/* Defaults to bottom 30% visible, expands to 60% on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-90 z-10 pointer-events-none" />

                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end pointer-events-none">
                  <div className="translate-y-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="mt-3 text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 line-clamp-2">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
