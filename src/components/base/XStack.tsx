import { ReactNode } from "react";

interface XStackProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const XStack = ({
  children,
  className = "",
  gap = "gap-4",
  align = "center",
  justify = "start",
}: XStackProps) => {
  return (
    <div
      className={`flex flex-row items-${align} justify-${justify} ${gap} ${className}`}
    >
      {children}
    </div>
  );
};
