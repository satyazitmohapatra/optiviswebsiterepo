import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  fullName?: string;
  email?: string;
  businessEmail?: string;
  company?: string;
  phone?: string;
  phoneNumber?: string;
  interestedService?: string;
  websiteUrl?: string;
  formType?: "contact" | "free-audit";
  message?: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  process.env.WEB3FORMS_ACCESS_KEY ||
  "28df687b-280f-403f-9bb0-f6527f90a212";

function isValidEmailFormat(value: string) {
  const email = value.trim();
  if (email.length < 5 || email.length > 254 || email.includes(" ")) {
    return false;
  }

  const [local, domain, ...rest] = email.split("@");
  if (!local || !domain || rest.length > 0) {
    return false;
  }

  if (local.length > 64 || domain.startsWith(".") || domain.endsWith(".")) {
    return false;
  }

  const domainParts = domain.split(".");
  return domainParts.length >= 2 && domainParts.every((part) => part.length > 0);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  const email = payload.email || payload.businessEmail || "";
  const name = payload.name || payload.fullName || "Website Visitor";
  const message = payload.message || (payload.websiteUrl ? `Free audit requested for: ${payload.websiteUrl}` : "");

  if (!email.trim() || !isValidEmailFormat(email)) {
    return NextResponse.json({ success: false, error: "Valid email address is required" }, { status: 400 });
  }

  const isAudit = payload.formType === "free-audit" || Boolean(payload.websiteUrl);

  try {
    const userAgent = request.headers.get("user-agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://optivisconsultancyservices.tech";
    const referer = request.headers.get("referer") || `${origin}/`;

    const web3Response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": userAgent,
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        access_key: DEFAULT_WEB3FORMS_KEY,
        subject: isAudit
          ? `Free Audit Request for ${payload.websiteUrl || name}`
          : `New Contact Form Inquiry from ${name}`,
        from_name: "Optivis Website Contact Form",
        full_name: name,
        email: email,
        company: payload.company || "N/A",
        phone: payload.phone || payload.phoneNumber || "N/A",
        website_url: payload.websiteUrl || "N/A",
        interested_service: payload.interestedService || (isAudit ? "Free Technical Audit" : "General Inquiry"),
        message: message,
      }),
    });

    const contentType = web3Response.headers.get("content-type") || "";
    let result: { success?: boolean; message?: string } = {};

    if (contentType.includes("application/json")) {
      result = (await web3Response.json()) as { success?: boolean; message?: string };
    } else {
      const text = await web3Response.text();
      if (web3Response.ok && text.includes("success")) {
        result = { success: true };
      } else {
        result = { success: false, message: "Email gateway challenge received. Please try submitting again." };
      }
    }

    if (!web3Response.ok || !result.success) {
      return NextResponse.json(
        { success: false, error: result.message || "Failed to submit form to email service" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to process form request";
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
