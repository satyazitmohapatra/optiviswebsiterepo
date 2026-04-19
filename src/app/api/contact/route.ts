import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

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

  if (
    !payload.name?.trim() ||
    !payload.message?.trim() ||
    !payload.email?.trim() ||
    !isValidEmailFormat(payload.email)
  ) {
    return NextResponse.json({ success: false, error: "Invalid request payload" }, { status: 400 });
  }

  // TODO: Integrate with an email/CRM provider to persist and route submissions.
  return NextResponse.json({ success: true });
}
