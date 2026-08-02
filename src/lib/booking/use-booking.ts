"use client";

import { useState, useRef, useCallback } from "react";
import {
  BookingFormData,
  BookingValidationErrors,
  BookingSubmissionStatus,
  BookingSubmissionResult,
} from "./types";
import { validateBookingForm } from "./validation";
import { submitServiceBooking } from "./api";

const initialFormData: BookingFormData = {
  fullName: "",
  company: "",
  businessEmail: "",
  phoneNumber: "",
  selectedService: "Digital Transformation",
  projectDescription: "",
  budgetRange: "$15,000 - $35,000",
  meetingDate: "",
  meetingTime: "10:00 AM",
  timeZone: "UTC/GMT+05:30 (IST)",
  notes: "",
};

export function useBooking() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [status, setStatus] = useState<BookingSubmissionStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [bookingResult, setBookingResult] = useState<BookingSubmissionResult | null>(null);

  const isSubmittingRef = useRef(false);

  const handleChange = useCallback((field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear inline field error as soon as user types
    setErrors((prev) => {
      if (prev[field]) {
        const next = { ...prev };
        delete next[field];
        return next;
      }
      return prev;
    });
    setServerError(null);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setStatus("idle");
    setServerError(null);
    setBookingResult(null);
    isSubmittingRef.current = false;
  }, []);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();

      // Prevent duplicate concurrent submissions
      if (isSubmittingRef.current || status === "submitting") {
        return;
      }

      setServerError(null);
      setStatus("validating");

      const validationErrors = validateBookingForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setStatus("error");
        return;
      }

      // Lock submission
      isSubmittingRef.current = true;
      setStatus("submitting");

      try {
        const result = await submitServiceBooking(formData);

        if (result.success) {
          setStatus("success");
          setBookingResult(result);
          // Keep success view active, reset form data internally
          setFormData(initialFormData);
          setErrors({});
        } else {
          setStatus("error");
          setServerError(result.message);
        }
      } catch {
        setStatus("error");
        setServerError("An unexpected error occurred. Please try again.");
      } finally {
        isSubmittingRef.current = false;
      }
    },
    [formData, status]
  );

  return {
    formData,
    errors,
    status,
    serverError,
    bookingResult,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    handleChange,
    handleSubmit,
    resetForm,
  };
}
