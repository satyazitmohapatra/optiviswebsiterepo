import { BookingFormData, BookingValidationErrors } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\+\d\s\(\)\-]{7,20}$/;

export function validateBookingForm(data: BookingFormData): BookingValidationErrors {
  const errors: BookingValidationErrors = {};

  // Full Name
  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  // Company
  if (!data.company.trim()) {
    errors.company = "Company / organization name is required.";
  }

  // Business Email
  if (!data.businessEmail.trim()) {
    errors.businessEmail = "Business email is required.";
  } else if (!EMAIL_REGEX.test(data.businessEmail.trim())) {
    errors.businessEmail = "Please provide a valid business email address.";
  }

  // Phone Number
  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!PHONE_REGEX.test(data.phoneNumber.trim())) {
    errors.phoneNumber = "Please enter a valid phone number.";
  }

  // Selected Service
  if (!data.selectedService) {
    errors.selectedService = "Please select a service option.";
  }

  // Project Description
  if (!data.projectDescription.trim()) {
    errors.projectDescription = "Project description is required.";
  } else if (data.projectDescription.trim().length < 10) {
    errors.projectDescription = "Please describe your project details (at least 10 characters).";
  }

  // Budget Range
  if (!data.budgetRange) {
    errors.budgetRange = "Please select an estimated budget range.";
  }

  // Preferred Meeting Date
  if (!data.meetingDate) {
    errors.meetingDate = "Preferred meeting date is required.";
  } else {
    const selectedDate = new Date(data.meetingDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.meetingDate = "Please provide a valid date.";
    } else if (selectedDate < today) {
      errors.meetingDate = "Meeting date cannot be in the past.";
    }
  }

  // Preferred Meeting Time
  if (!data.meetingTime) {
    errors.meetingTime = "Preferred meeting time slot is required.";
  }

  // Timezone
  if (!data.timeZone) {
    errors.timeZone = "Please select your time zone.";
  }

  return errors;
}

export function isValidBookingData(data: BookingFormData): boolean {
  const errors = validateBookingForm(data);
  return Object.keys(errors).length === 0;
}
