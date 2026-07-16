import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

/**
 * Standard content-width wrapper. Every section on every page should be
 * wrapped in this instead of repeating max-width/padding utility classes,
 * so the site-wide horizontal rhythm changes from one place.
 */
export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={cn("mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
