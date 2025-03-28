import { ReactNode } from "react";
import { Text } from "./Text";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  textClassName?: string;
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  textClassName = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 cursor-pointer py-2 rounded-md font-medium focus:outline-none";
  const variantStyles = {
    primary: `bg-primary text-white ${className}`,
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <Text fow={500} fos={18} className={textClassName}>
        {children}
      </Text>
    </button>
  );
};
