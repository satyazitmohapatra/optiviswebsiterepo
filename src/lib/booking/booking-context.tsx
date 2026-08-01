"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { ServiceOption, BudgetOption, TimelineOption } from "./types";

type OpenBookingOptions = {
  service?: ServiceOption;
  budget?: BudgetOption;
  timeline?: TimelineOption;
  customServices?: string[];
};

type BookingContextType = {
  isOpen: boolean;
  selectedService: ServiceOption;
  selectedBudget?: BudgetOption;
  selectedTimeline?: TimelineOption;
  customServices?: string[];
  openBookingModal: (options?: OpenBookingOptions | ServiceOption) => void;
  closeBookingModal: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceOption>("Web Development");
  const [selectedBudget, setSelectedBudget] = useState<BudgetOption | undefined>("₹50K–₹1L");
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption | undefined>("1 Month");
  const [customServices, setCustomServices] = useState<string[]>([]);

  const openBookingModal = useCallback((options?: OpenBookingOptions | ServiceOption) => {
    if (typeof options === "string") {
      setSelectedService(options);
      setCustomServices([]);
    } else if (options && typeof options === "object") {
      if (options.service) setSelectedService(options.service);
      if (options.budget) setSelectedBudget(options.budget);
      if (options.timeline) setSelectedTimeline(options.timeline);
      if (options.customServices) setCustomServices(options.customServices);
    }
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedService,
        selectedBudget,
        selectedTimeline,
        customServices,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingProvider");
  }
  return context;
}
