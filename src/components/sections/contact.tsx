"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ContactProps = {
  email: string;
  phone: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
};

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "28df687b-280f-403f-9bb0-f6527f90a212";

export function Contact({ email, phone, socials }: ContactProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please add your name and project details.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please provide your email so we can reach you.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          subject: "New enquiry from Optivis website",
          from_name: "Optivis Website Contact Form",
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-gradient-to-b from-surface/50 to-background py-20 sm:py-24 overflow-hidden">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-5">
          <SectionHeading
            badge="Contact"
            title="Let’s build your next growth-ready website"
            description="Tell us your goals and we’ll share a practical roadmap with timeline and next steps."
          />
          <div className="space-y-1 text-sm text-muted">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
          {socials && (
            <div className="flex gap-4 pt-4">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-border hover:bg-primary hover:text-background hover:border-primary transition-all text-muted hover:scale-110 duration-200" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-border hover:bg-primary hover:text-background hover:border-primary transition-all text-muted hover:scale-110 duration-200" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
            </div>
          )}
        </div>
        <form className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8" onSubmit={handleSubmit} aria-busy={status === "submitting"}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-muted">
              Name
              <input
                className={fieldClassName}
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                required
              />
            </label>
            <label className="space-y-2 text-sm text-muted">
              Email
              <input
                className={fieldClassName}
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm text-muted">
            Company
            <input
              className={fieldClassName}
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
            />
          </label>
          <label className="mt-4 block space-y-2 text-sm text-muted">
            Project details
            <textarea
              className={fieldClassName}
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              required
            />
          </label>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm" aria-live="polite">
              {error ? <span className="text-red-600">{error}</span> : null}
              {status === "success" ? (
                <span className="text-green-600">
                  messege sent successfully
                  <br />
                  we&apos;ll reach you out soon
                </span>
              ) : null}
            </p>
            <Button type="submit" className="min-w-40" variant="primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
