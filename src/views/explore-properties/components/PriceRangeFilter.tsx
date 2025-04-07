import { Text, XStack, YStack } from "@/components/base";
import { useState } from "react";

const PriceRangeFilter = () => {
  const [minPrice] = useState(5000);
  const [maxPrice] = useState(50000);
  const [currentPrice, setCurrentPrice] = useState(5000);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrice(Number(e.target.value));
  };

  return (
    <div className="w-full">
      <YStack gap="gap-[12px]" align="start" className="mb-4">
        <Text fos={16} fow={500} className="text-white mb-2">
          Price Range
        </Text>
        <XStack justify="between" className="w-full">
          <Text fos={12} fow={400} className="text-white mb-2">
            Price (₦)
          </Text>
          <Text
            fos={12}
            fof="m"
            fow={400}
            underlined
            className="text-primary mb-2"
          >
            Apply
          </Text>
        </XStack>
      </YStack>
      <div className="relative flex-col items-center gap-4">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentPrice}
          onChange={handleSliderChange}
          className="w-full"
        />

        <XStack align="center" justify="between" className="w-full mt-2">
          <span className="text-white w-[80px] h-[25px] flex items-center border-[0.5px] border-[#3A3A3A40] justify-center bg-[#FFFFFFCC] rounded-full">
            <Text fow={500} fos={12} className="text-[#3A3A3ACC]">
              ₦{minPrice.toLocaleString()}
            </Text>
          </span>
          <span className="text-white w-[80px] h-[25px] flex items-center border-[0.5px] border-[#3A3A3A40] justify-center bg-[#FFFFFFCC] rounded-full">
            <Text fow={500} fos={12} className="text-[#3A3A3ACC]">
              ₦{maxPrice.toLocaleString()}
            </Text>
          </span>
        </XStack>

        <div
          className="absolute -top-6"
          style={{
            left: `${
              ((currentPrice - minPrice) / (maxPrice - minPrice)) * 100
            }%`,
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-white w-[80px] h-[25px] flex items-center border-[0.5px] border-[#3A3A3A40] justify-center bg-[#FFFFFFCC] rounded-full">
            <Text fow={500} fos={12} className="text-[#3A3A3ACC]">
              ₦{currentPrice.toLocaleString()}
            </Text>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
