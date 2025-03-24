interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Divider = ({
  orientation = "horizontal",
  className = "",
}: DividerProps) => {
  const baseStyles =
    orientation === "horizontal" ? "w-full h-px" : "h-full w-px";
  return <div className={`${baseStyles} bg-gray-300 ${className}`} />;
};
