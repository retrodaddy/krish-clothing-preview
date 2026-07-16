interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use "light" on dark section backgrounds (e.g. the ink-colored sections). */
  theme?: "dark" | "light";
}

/**
 * Consistent section heading used across Home/About sections
 * (eyebrow label + serif title + optional supporting copy).
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "dark",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = theme === "light" ? "text-cream" : "text-ink";
  const descColor = theme === "light" ? "text-cream/70" : "text-ink/60";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 text-xs uppercase tracking-wide2 text-accent">{eyebrow}</span>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 max-w-xl ${descColor} ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
