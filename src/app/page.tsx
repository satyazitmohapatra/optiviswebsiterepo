import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollNavigation } from "@/components/layout/scroll-navigation";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { About } from "@/components/sections/about";
import { Pricing } from "@/components/sections/pricing";
import { Insights } from "@/components/sections/insights";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Services } from "@/components/sections/services";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { content } from "@/lib/content";

const SECTION_TRACKING = [
  { id: "top", label: "Home" },
  { id: "about", label: "Who We Are" },
  { id: "what-we-do", label: "What We Do" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar brand={content.company.name} items={content.navigation} />
      <ScrollNavigation sections={SECTION_TRACKING} />
      <main>
        <Hero
          headline={content.hero.headline}
          subheadline={content.hero.subheadline}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
          trustText={content.hero.trustText}
        />
        <TrustStrip stats={content.trustStrip} />
        <About headline={content.about.headline} description={content.about.description} />
        <WhatWeDo projects={content.whatWeDo} />
        <Services services={content.services} />
        <Pricing plans={content.pricing} />
        <Insights insights={content.insights} />
        <CtaBanner
          headline={content.ctaBanner.headline}
          description={content.ctaBanner.description}
          buttonLabel={content.ctaBanner.buttonLabel}
        />
        <Contact 
          email={content.company.email} 
          phone={content.company.phone} 
          address={content.company.address}
          socials={content.company.socials} 
        />
      </main>
      <Footer
        companyName={content.company.fullName || content.company.name}
        email={content.company.email}
        phone={content.company.phone}
        address={content.company.address}
        links={content.footerLinks}
        socials={content.company.socials}
      />
      {content.company.whatsapp && (
        <WhatsAppButton phoneNumber={content.company.whatsapp} />
      )}
    </>
  );
}
