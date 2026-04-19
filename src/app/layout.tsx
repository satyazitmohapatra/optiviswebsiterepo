import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optivis Consultancy Services | Premium Web Solutions",
  description:
    "Optivis Consultancy Services builds premium business websites and web applications for startups and local businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased suppress-hydration-warning">
      <body className="min-h-full bg-background text-foreground transition-colors duration-500">
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
