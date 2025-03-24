import { Text } from "./Text";

interface InputProps {
  type?: string;
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
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <Text className="mb-1">{label}</Text>}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder=""
          className={`${className}`}
        />
        {placeholder && !value && (
          <Text
            fos={18}
            fow={500}
            className="absolute inset-y-0 left-4 flex items-center text-[#FFFFFFBF] pointer-events-none"
          >
            {placeholder}
          </Text>
        )}
      </div>
    </div>
  );
};
