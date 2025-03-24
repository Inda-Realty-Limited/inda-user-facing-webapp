import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link = ({ href, children, className = "" }: LinkProps) => {
  return (
    <a href={href} className={`text-white hover:underline ${className}`}>
      {children}
    </a>
  );
};
