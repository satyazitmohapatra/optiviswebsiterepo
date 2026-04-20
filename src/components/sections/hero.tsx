import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustText: string;
};

export function Hero({ headline, subheadline, primaryCta, secondaryCta, trustText }: HeroProps) {
  return (
    <section 
      id="top" 
      className="relative flex min-h-[100dvh] w-full items-start md:items-center bg-cover bg-no-repeat bg-[65%_center] md:bg-center bg-[url('/images/hero-teal-ants.jpg')] overflow-hidden pt-20 md:pt-0"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <Container className="relative flex w-full justify-start px-4 md:px-8">
        <Reveal className="w-full max-w-[650px] text-left">
          <p className="mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">Enterprise Cloud Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl text-balance leading-[1.05]">
            {headline}
          </h1>
          <p className="mt-6 text-sm font-medium text-slate-200 leading-relaxed md:hidden px-4">
            Embrace the talent revolution to remain relevant in the future.
          </p>
          <p className="mt-8 hidden text-base font-medium leading-relaxed text-slate-100 tracking-wide sm:text-lg md:block max-w-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-start gap-4 sm:flex-row">
            <Button href={primaryCta.href} className="w-full rounded-full px-8 py-4 text-sm font-bold shadow-xl transition-all hover:scale-105 sm:w-auto">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" className="w-full rounded-full px-8 py-4 text-sm font-bold backdrop-blur-md bg-white/10 text-white border-white/20 hover:bg-white/20 sm:w-auto">
              {secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
