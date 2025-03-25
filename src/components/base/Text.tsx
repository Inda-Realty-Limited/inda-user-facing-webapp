import { CSSProperties, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  fos?: number;
  fow?: CSSProperties["fontWeight"];
  fst?: CSSProperties["fontStyle"];
  fof?: "p" | "m" | "s" | "l"; // 'p' for PPNeueMontreal, 'm' for Montserrat, 's' for Satoshi, 'l' for Lufga
  onClick?: () => void;
  underlined?: boolean;
}

export const Text = ({
  children,
  className = "",
  fos,
  fow,
  fst,
  fof = "p",
  underlined,
  onClick,
}: TextProps) => {
  const baseStyles = "";
  const fontFamily =
    fof === "m"
      ? "Montserrat, sans-serif"
      : fof === "s"
      ? "Satoshi, sans-serif"
      : fof === "l"
      ? "Lufga, sans-serif"
      : "PPNeueMontreal, sans-serif";
  const style = {
    fontSize: fos || 16,
    fontWeight: fow || "normal",
    fontStyle: fst || "normal",
    fontFamily,
    textDecoration: underlined ? "underline" : "none",
  };

  return (
    <span
      className={`${baseStyles} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
