import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, href, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent/90 active:scale-95 shadow-lg hover:shadow-xl",
      secondary:
        "bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
      ghost:
        "text-primary hover:bg-primary/10 active:scale-95",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 rounded-xl",
      md: "text-base px-6 py-3 rounded-2xl",
      lg: "text-lg px-8 py-4 rounded-2xl",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
