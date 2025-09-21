import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = {
  variant: {
    default:
      "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80",
    destructive:
      "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    outline:
      "border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
    ghost: "hover:bg-gray-100 active:bg-gray-200",
    link: "text-foreground underline-offset-4 hover:underline",
  },
  size: {
    default: "h-9 px-8 py-2",
    sm: "h-8 px-3",
    lg: "h-10 px-8 text-base",
    icon: "h-9 w-9",
  },
};

function getVariantClasses(variant: ButtonProps["variant"] = "default") {
  return buttonVariants.variant[variant];
}

function getSizeClasses(size: ButtonProps["size"] = "default") {
  return buttonVariants.size[size];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full cursor-pointer text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-satoshi uppercase tracking-wide",
          getVariantClasses(variant),
          getSizeClasses(size),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
