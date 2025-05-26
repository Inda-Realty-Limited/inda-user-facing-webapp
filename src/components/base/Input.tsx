import { Icon } from "../inc";
import { Text } from "./Text";

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  icon?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  labelStyle?: string;
}

export const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  className = "",
  icon = false,
  labelStyle = "",
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Text
          fow={500}
          className={`text-[#fff] mb-[12px] text-[16px] ${labelStyle}`}
        >
          {label}
        </Text>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-4 top-2 flex items-center text-[#FFFFFFBF]">
            <Icon name="search" />
          </div>
        )}
        <input
          id={id}
          name={name}
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
