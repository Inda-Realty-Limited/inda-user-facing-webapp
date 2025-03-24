import { ReactNode } from "react";

interface YStackProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  align?: "start" | "center" | "end";
}

export const YStack = ({
  children,
  className = "",
  gap = "gap-6",
  align = "center",
}: YStackProps) => {
  return (
    <div className={`flex flex-col items-${align} ${gap} ${className}`}>
      {children}
    </div>
  );
};
