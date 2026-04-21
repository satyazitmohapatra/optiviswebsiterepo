import { Container } from "@/components/ui/container";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  companyName: string;
  email: string;
  phone: string;
  address?: string;
  links: FooterColumn[];
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
};

export function Footer({ companyName, email, phone, address, links, socials }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-sm">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl font-bold text-foreground">{companyName}</p>
            <p className="max-w-sm text-muted leading-relaxed">
              Empowering the next generation of digital enterprise through continuous innovation, deep industry expertise, and robust technology solutions.
            </p>
            <div className="space-y-2 text-muted font-medium">
              <p>{email}</p>
              <p>{phone}</p>
              {address && <p>{address}</p>}
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {links.map((column) => (
              <div key={column.title}>
                <h3 className="text-foreground font-bold uppercase tracking-wider mb-6 text-xs">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-muted hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-muted">
          <p>© {currentYear} {companyName}. All rights reserved.</p>
          {socials && (
            <div className="flex gap-6 items-center">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 duration-200" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 duration-200" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
            </div>
          )}
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
