import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  type?: "main" | "section";
  style?: React.CSSProperties;
}

export const Container = ({
  children,
  className = "",
  type = "section",
  style,
}: ContainerProps) => {
  const baseStyles = "mx-auto  px-4 py-6 sm:px-6 lg:px-8";
  const typeStyles = type === "main" ? "w-full " : "";

  return (
    <div style={style} className={`${baseStyles} ${typeStyles} ${className}`}>
      {children}
    </div>
  );
};
