import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";
  size?: "small" | "medium" | "large";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconSize?: number;
  iconStrokeWidth?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  iconSize = 24,
  iconStrokeWidth = 1.25,
  fullWidth = false,
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2  cursor-pointer rounded-lg transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#1a3b36] focus:ring-[#234E49]",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border-2 border-[#234E49] text-[#234E49] hover:bg-primary hover:text-white focus:ring-[#234E49]",
    ghost: "text-[#234E49] hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  };

  const sizes = {
    small: "text-sm px-3 py-2 h-9",
    medium: "text-lg px-4 py-3 h-12",
    large: "text-xl px-6 py-4 h-14",
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`;

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  const renderIcon = () => {
    if (loading) return <LoadingSpinner />;
    if (!icon) return null;

    const IconComponent = icon;
    return (
      <IconComponent
        size={iconSize}
        strokeWidth={iconStrokeWidth}
        className="flex-shrink-0"
      />
    );
  };

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {iconPosition === "left" && renderIcon()}
      {loading ? "Loading..." : children}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;
