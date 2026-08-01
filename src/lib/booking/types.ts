export type ServiceOption =
  | "Web Development"
  | "Digital Marketing"
  | "Content & Creative"
  | "Enterprise Custom Solution"
  | "Custom Package Builder"
  | "Social Media Marketing"
  | "Content Editing"
  | "Custom Solution"
  | "Digital Transformation"
  | "Enterprise Cloud Engineering"
  | "AI Analytics & Automation"
  | "Multilingual G2C Portals"
  | "Web App Development"
  | "IT Strategy & Consulting";

export type BudgetOption =
  | "Under ₹50K"
  | "₹50K–₹1L"
  | "₹1L–₹5L"
  | "₹5L+"
  | "< $5,000"
  | "$5,000 - $15,000"
  | "$15,000 - $35,000"
  | "$35,000 - $75,000"
  | "$75,000+";

export type TimelineOption =
  | "ASAP"
  | "1 Month"
  | "2–3 Months"
  | "Flexible";

export type TimeSlotOption =
  | "09:00 AM"
  | "10:00 AM"
  | "11:00 AM"
  | "01:00 PM"
  | "02:00 PM"
  | "03:00 PM"
  | "04:00 PM"
  | "05:00 PM";

export type BookingFormData = {
  fullName: string;
  company: string;
  businessEmail: string;
  phoneNumber: string;
  selectedService: ServiceOption;
  projectDescription: string;
  budgetRange: BudgetOption;
  timeline?: TimelineOption;
  customServices?: string[];
  meetingDate: string; // ISO format YYYY-MM-DD
  meetingTime: TimeSlotOption;
  timeZone: string;
  notes: string;
};

export type BookingValidationErrors = Partial<Record<keyof BookingFormData, string>>;

export type BookingSubmissionStatus = "idle" | "validating" | "submitting" | "success" | "error";

export type BookingSubmissionResult = {
  success: boolean;
  message: string;
  bookingId?: string;
};
