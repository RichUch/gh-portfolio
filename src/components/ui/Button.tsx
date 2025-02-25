import type React from "react"
import type { ReactNode, ButtonHTMLAttributes } from "react"

// Define the allowed variant types
type ButtonVariant = "primary" | "secondary" | "outline"

// Define the props for our Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

// Define the styles for each variant
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
  secondary: "bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
  outline: "bg-transparent border border-gray-300 hover:bg-gray-100 focus:ring-gray-500",
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button

