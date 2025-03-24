import { CSSProperties, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  fos?: number;
  fow?: CSSProperties["fontWeight"];
  fst?: CSSProperties["fontStyle"];
  fof?: "p" | "m"; // 'p' for PPNeueMontreal, 'm' for Montserrat
  onClick?: () => void;
}

export const Text = ({
  children,
  className = "",
  fos,
  fow,
  fst,
  fof = "p",
}: TextProps) => {
  const baseStyles = "";
  const fontFamily =
    fof === "m" ? "Montserrat, sans-serif" : "PPNeueMontreal, sans-serif";
  const style = {
    fontSize: fos || 16,
    fontWeight: fow || "normal",
    fontStyle: fst || "normal",
    fontFamily,
    onClick: () => {},
  };

  return (
    <span className={`${baseStyles} ${className}`} style={style}>
      {children}
    </span>
  );
};
