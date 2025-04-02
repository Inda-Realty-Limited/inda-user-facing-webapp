import { ReactSVG } from "react-svg";
import * as icons from "../../../public/icons";

export type IconNameType = keyof typeof icons;

interface Props {
  name: IconNameType;
  size?: number;
  padding?: number;
  bg?: string;
  className?: string;
}

export const Icon = ({
  name,
  size = 22,
  padding = 10,
  bg,
  className,
}: Props) => {
  return (
    <div
      style={{ background: bg, width: size + padding, height: size + padding }}
      className={`flex justify-center cursor-pointer items-center ${className}`}
    >
      <ReactSVG
        src={`/icons/${name}.svg`}
        className="icon"
        style={{ width: size, height: size }}
      />
    </div>
  );
};
