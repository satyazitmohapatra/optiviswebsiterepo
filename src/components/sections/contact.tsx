"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ContactProps = {
  email: string;
  phone: string;
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

export function Contact({ email, phone }: ContactProps) {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
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
              {status === "success" ? <span className="text-green-600">Thanks! We’ll reach out shortly.</span> : null}
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
