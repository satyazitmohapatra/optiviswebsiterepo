import { BookingFormData, BookingSubmissionResult } from "./types";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_WEB3FORMS_KEY = "28df687b-280f-403f-9bb0-f6527f90a212";

export function getWeb3FormsKey(): string {
  return (
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.WEB3FORMS_ACCESS_KEY ||
    DEFAULT_WEB3FORMS_KEY
  );
}

export function formatMeetingIsoTimestamp(meetingDate: string, meetingTime: string): string {
  try {
    const dateStr = meetingDate.trim();
    // Parse time string e.g. "02:00 PM"
    const [time, modifier] = meetingTime.trim().split(" ");
    const [hoursRaw, minutes] = time.split(":").map(Number);
    let hours = hoursRaw;

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");

    const dateObj = new Date(`${dateStr}T${formattedHours}:${formattedMinutes}:00`);
    if (isNaN(dateObj.getTime())) {
      return new Date(meetingDate).toISOString();
    }
    return dateObj.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export async function submitServiceBooking(data: BookingFormData): Promise<BookingSubmissionResult> {
  const accessKey = getWeb3FormsKey();
  const meetingIsoTimestamp = formatMeetingIsoTimestamp(data.meetingDate, data.meetingTime);

  const payload = {
    access_key: accessKey,
    subject: `Enterprise Service Booking: ${data.selectedService} - ${data.fullName}`,
    from_name: "Optivis Consultation Booking System",

    // Captured Booking Data
    full_name: data.fullName,
    company: data.company,
    business_email: data.businessEmail,
    phone_number: data.phoneNumber,
    selected_service: data.selectedService,
    project_description: data.projectDescription,
    budget_range: data.budgetRange,
    meeting_date: data.meetingDate,
    meeting_time: data.meetingTime,
    time_zone: data.timeZone,
    meeting_iso_timestamp: meetingIsoTimestamp,
    additional_notes: data.notes || "N/A",

    // Clean Email Summary Body
    message: `
NEW ENTERPRISE CONSULTATION BOOKING REQUEST

Client Information:
- Full Name: ${data.fullName}
- Company: ${data.company}
- Email: ${data.businessEmail}
- Phone: ${data.phoneNumber}

Booking Details:
- Selected Service: ${data.selectedService}
- Estimated Budget: ${data.budgetRange}
- Preferred Date: ${data.meetingDate}
- Preferred Time: ${data.meetingTime} (${data.timeZone})
- Meeting ISO Timestamp: ${meetingIsoTimestamp}

Project Overview:
${data.projectDescription}

Additional Notes:
${data.notes || "None"}
`.trim(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let result: { success?: boolean; message?: string } = {};
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      result = (await response.json()) as { success?: boolean; message?: string };
    } else {
      const text = await response.text();
      if (response.ok && text.includes("success")) {
        result = { success: true };
      }
    }

    if (!response.ok || !result.success) {
      // Fallback: try internal API route
      const fallbackRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          businessEmail: data.businessEmail,
          phoneNumber: data.phoneNumber,
          company: data.company,
          interestedService: data.selectedService,
          message: payload.message,
          formType: "contact",
        }),
      });
      const fallbackData = (await fallbackRes.json()) as { success?: boolean; error?: string };
      if (fallbackRes.ok && fallbackData.success) {
        result = { success: true };
      } else {
        return {
          success: false,
          message: result.message || fallbackData.error || "Failed to process service booking. Please try again.",
        };
      }
    }

    const bookingId = `OPT-${Date.now().toString(36).toUpperCase()}`;

    return {
      success: true,
      message: "Your consultation booking has been confirmed! Our team will reach out shortly.",
      bookingId,
    };
  } catch (error: unknown) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        message: "Network request timed out. Please check your internet connection and retry.",
      };
    }
    return {
      success: false,
      message: "Unable to reach booking servers. Please try again or contact us directly.",
    };
  }
}
