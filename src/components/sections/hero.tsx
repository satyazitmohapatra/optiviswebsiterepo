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
      className="flex min-h-screen w-full items-start md:items-center bg-cover bg-no-repeat bg-[center_top] md:bg-[right_center] bg-[url('/images/Gemini_Generated_Image_v0lbz9v0lbz9v0lb.png')] md:bg-[url('/images/WhatsApp%20Image%202026-04-18%20at%2012.08.29%20AM.jpeg')] overflow-hidden pt-28 md:pt-0"
    >
      <Container className="flex w-full justify-center md:justify-start">
        <Reveal className="w-full max-w-[500px] p-6 text-center md:p-16 md:text-left">
          <p className="mb-4 hidden text-xs font-bold uppercase tracking-widest text-blue-300 md:block">Enterprise Cloud Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
            {headline}
          </h1>
          <p className="mt-6 text-sm font-medium text-slate-200 leading-relaxed md:hidden">
            Embrace the talent revolution to remain relevant in the future.
          </p>
          <p className="mt-6 hidden text-sm font-semibold leading-relaxed text-slate-100 tracking-wide sm:text-lg md:block">
            {subheadline}
          </p>
          <div className="mt-8 hidden flex-col items-center justify-center gap-4 sm:flex-row md:flex md:justify-start">
            <Button href={primaryCta.href} className="w-full rounded-full px-6 py-4 text-sm font-bold shadow-none transition-all hover:shadow-lg sm:w-auto">
              {primaryCta.label}
            </Button>
          </div>
          <div className="mt-12 hidden items-center justify-center gap-3 border-t border-white/20 pt-6 md:flex md:justify-start">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-primary bg-slate-200"></div>
              <div className="h-8 w-8 rounded-full border-2 border-primary bg-slate-300"></div>
              <div className="h-8 w-8 rounded-full border-2 border-primary bg-slate-400"></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white text-[10px] font-bold text-slate-800">+</div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-200">{trustText}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
