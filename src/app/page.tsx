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
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TrustedTechnologies } from "@/components/sections/trusted-technologies";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";
import { FreeAuditBanner } from "@/components/sections/free-audit-banner";
import { RiskFreeGuarantee } from "@/components/sections/risk-free-guarantee";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { content } from "@/lib/content";

const SECTION_TRACKING = [
  { id: "top", label: "Home" },
  { id: "about", label: "Who We Are" },
  { id: "what-we-do", label: "Technologies" },
  { id: "services", label: "Services" },
  { id: "guarantee", label: "Guarantee" },
  { id: "team", label: "Team" },
  { id: "pricing", label: "Pricing" },
  { id: "free-audit", label: "Free Audit" },
  { id: "insights", label: "Insights" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar brand={content.company.name} items={content.navigation} phone={content.company.phone} email={content.company.email} />
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
        <TrustedTechnologies />
        <Services services={content.services} />
        <WhyChooseUs
          badge={content.whyChooseUs.badge}
          title={content.whyChooseUs.title}
          description={content.whyChooseUs.description}
          reasons={content.whyChooseUs.reasons}
        />
        <RiskFreeGuarantee />
        <Team />
        <Pricing plans={content.pricing} />
        <FreeAuditBanner />
        <Insights insights={content.insights} />
        <FAQ />
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
