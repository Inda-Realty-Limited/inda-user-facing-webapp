import { Text } from "./Text";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
  labelStyle?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  label,
  className = "",
  labelStyle = "",
}: SelectProps) => {
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
      <select
        value={value}
        onChange={onChange}
        className={`border border-[#ABABAB33] rounded-md focus:outline-none px-3 py-2   ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
