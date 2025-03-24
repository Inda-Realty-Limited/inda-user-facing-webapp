import { ReactNode } from "react";

interface XStackProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  align?: "start" | "center" | "end" | "stretch";
}

export const XStack = ({
  children,
  className = "",
  gap = "gap-4",
  align = "center",
}: XStackProps) => {
  return (
    <div className={`flex flex-row items-${align} ${gap} ${className}`}>
      {children}
    </div>
  );
};
