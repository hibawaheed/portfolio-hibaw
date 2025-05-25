import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"

    // Variant styles
    const variantStyles = {
      default: "bg-teal-600 text-white hover:bg-teal-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-700 bg-transparent hover:bg-gray-800",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "bg-transparent hover:bg-gray-800",
      link: "text-teal-400 underline-offset-4 hover:underline bg-transparent",
    }

    // Size styles
    const sizeStyles = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 text-xs rounded-md",
      lg: "h-11 px-8 text-base rounded-md",
      icon: "h-10 w-10",
    }

    return (
      <button className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }
