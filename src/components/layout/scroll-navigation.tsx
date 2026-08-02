"use client";

export type ScrollSection = {
  id: string;
  label: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ScrollNavigation(_props?: { sections?: ScrollSection[] }) {
  // Floating sidebar scroll dot widget disabled per user request
  return null;
}
