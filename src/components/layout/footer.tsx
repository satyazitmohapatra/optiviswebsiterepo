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
  links: FooterColumn[];
};

export function Footer({ companyName, email, phone, links }: FooterProps) {
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
