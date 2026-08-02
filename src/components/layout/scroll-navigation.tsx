"use client";

export type ScrollSection = {
  id: string;
  label: string;
};

type ScrollNavigationProps = {
  sections: ScrollSection[];
};

export function ScrollNavigation(_props: ScrollNavigationProps) {
  // Floating sidebar scroll dot widget disabled per user request
  return null;
}
