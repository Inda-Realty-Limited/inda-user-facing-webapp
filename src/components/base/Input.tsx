import { Icon } from "../inc";
import { Text } from "./Text";

interface InputProps {
  type?: string;
  icon?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  className = "",
  icon = false,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <Text className="mb-1">{label}</Text>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-4 top-2 flex items-center text-[#FFFFFFBF]">
            <Icon name="search" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={` ${icon ? "pl-12" : "px-4"} ${className}`}
        />
      </div>
    </div>
  );
};
