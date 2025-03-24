import { Text } from "./Text";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  label,
  className = "",
}: SelectProps) => {
  return (
    <div className="flex flex-col">
      {label && <Text className="mb-1">{label}</Text>}
      <select
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 ${className}`}
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
