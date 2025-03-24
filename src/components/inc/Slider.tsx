import { Text } from "../base";

interface SliderProps {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
  label?: string;
}

export const Slider = ({ min, max, value, onChange, label }: SliderProps) => {
  return (
    <div className="flex flex-col">
      {label && <Text className="mb-1">{label}</Text>}
      <input
        type="range"
        min={min}
        max={max}
        value={value[0]}
        onChange={(e) => onChange([Number(e.target.value), value[1]])}
        className="w-full"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={(e) => onChange([value[0], Number(e.target.value)])}
        className="w-full"
      />
      <Text>
        Range: {value[0]} - {value[1]}
      </Text>
    </div>
  );
};
