import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "accent";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
}

interface ClickButtonProps extends BaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:scale-[1.03] shadow-soft",
  accent:
    "bg-accent text-accent-foreground hover:scale-[1.03] shadow-soft",
  outline:
    "border border-ink/20 text-ink hover:border-primary hover:text-primary",
  ghost: "text-ink/80 hover:text-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 ease-premium";

/**
 * The single button primitive used everywhere: hero CTAs, WhatsApp/Call/
 * Directions actions, form submit, nav CTA. Renders as a <Link> when
 * `href` is provided, otherwise as a native <button>.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", className, children, icon } = props;
  const classes = cn(base, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
