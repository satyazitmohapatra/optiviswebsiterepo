import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type PricingPlan = {
  name: string;
  price: string;
  image: string;
};

type PricingProps = {
  plans: PricingPlan[];
};

export function Pricing({ plans }: PricingProps) {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background border-y border-border overflow-hidden">
      <Container className="space-y-16">
        <SectionHeading
          badge="Pricing"
          title="Transparent Enterprise Plans"
          description="High-quality solutions engineered precisely for your operational scope."
          align="center"
        />
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div className="group relative block overflow-hidden rounded-2xl bg-surface border border-border h-[260px] sm:h-[300px] w-full hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="absolute inset-0 block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Partial Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-90 z-10 pointer-events-none" />

                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col justify-end pointer-events-none">
                  <div className="translate-y-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm mb-1 line-clamp-1">
                      {plan.name}
                    </h3>
                    
                    <p className="mt-2 text-primary font-semibold text-lg drop-shadow-sm opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                      {plan.price}
                    </p>
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
