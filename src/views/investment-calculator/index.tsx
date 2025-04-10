import { Button, Input, Text, XStack, YStack } from "@/components/base";
import { Layout } from "@/layouts";
import { useState } from "react";

export default function InvestmentCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number | string>("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isMapViewOpen, setIsMapViewOpen] = useState<boolean>(false);

  const filterOptions = {
    Location: [
      { value: "downtown", label: "Downtown" },
      { value: "suburbs", label: "Suburbs" },
      { value: "rural", label: "Rural" },
    ],
    "Investment Goals": [
      { value: "rental-income", label: "Rental Income" },
      { value: "capital-gains", label: "Capital Gains" },
      { value: "long-term-hold", label: "Long-Term Hold" },
    ],
    "Property Type": [
      { value: "apartment", label: "Apartment" },
      { value: "house", label: "House" },
      { value: "condo", label: "Condo" },
    ],
    "Number of Bedrooms": [
      { value: "1", label: "1 Bedroom" },
      { value: "2", label: "2 Bedrooms" },
      { value: "3", label: "3+ Bedrooms" },
    ],
    "Financing Method": [
      { value: "mortgage", label: "Mortgage" },
      { value: "developer-plan", label: "Developer Plan" },
      { value: "rent-to-own", label: "Rent-to-Own" },
      { value: "full-payment", label: "Full Payment" },
    ],
  };

  const renderFilterBox = (title: string) => {
    const isActive = activeFilter === title;

    if (title === "Location") {
      return (
        <YStack gap="gap-[16px]" className="w-full">
          <div className="w-full">
            <Text fow={500} fos={16} className="text-white">
              {title}
            </Text>
            <div
              className="w-full cursor-pointer mt-[10px] flex items-center pl-[16px] h-[77px] bg-[#282828] text-white border-[#FFFFFF1A] rounded-[8px] max-sm:h-[54px] "
              onClick={() => setActiveFilter(isActive ? null : title)}
            >
              <Text
                fow={400}
                className="text-[#FFFFFFCC] text-[16px] max-sm:text-[14px]"
              >
                {isActive
                  ? "Click to close map view"
                  : "Click to open map view"}
              </Text>
            </div>
          </div>
          {isActive && (
            <div className="w-full h-[327px] bg-[#282828] text-white border-[#FFFFFF1A] rounded-[8px] mt-[16px]">
              <iframe
                src="https://www.google.com/maps/embed"
                className="w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </YStack>
      );
    }

    return (
      <YStack gap="gap-[16px]" className="w-full">
        <div className="w-full">
          <Text fow={500} fos={16} className="text-white">
            {title}
          </Text>
          <div
            className="w-full cursor-pointer mt-[10px] flex items-center pl-[16px] h-[77px] bg-[#282828] text-white border-[#FFFFFF1A] rounded-[8px] max-sm:h-[54px] "
            onClick={() => setActiveFilter(isActive ? null : title)}
          >
            <Text
              fow={400}
              className="text-[#FFFFFFCC] text-[16px] max-sm:text-[14px]"
            >
              {isActive
                ? "Click to close selection"
                : `Click to select ${title.toLowerCase()}`}
            </Text>
          </div>
        </div>
        {isActive && (
          <div className="w-full h-[327px] bg-[#282828] text-white border-[#FFFFFF1A] rounded-[8px]">
            <YStack gap="gap-[8px]" align="start">
              {filterOptions[title as keyof typeof filterOptions].map(
                (option) => (
                  <XStack
                    className="border-b p-4 w-full border-[#FFFFFF1A]"
                    key={option.value}
                    gap="gap-[8px]"
                    align="center"
                  >
                    <input
                      type="checkbox"
                      id={`${title}-${option.value}`}
                      className="w-4 h-4 appearance-none bg-transparent border border-primary rounded-[4px] cursor-pointer checked:bg-primary checked:border-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    />
                    <label
                      htmlFor={`${title}-${option.value}`}
                      className="text-white fow-400 fos-16"
                    >
                      {option.label}
                    </label>
                  </XStack>
                )
              )}
            </YStack>
          </div>
        )}
      </YStack>
    );
  };
  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="absolute -top-24 w-full left-0 justify-center flex">
          <img
            src="/images/bg-pattern.png"
            alt="Explore Properties"
            className="object-contain"
          />
        </div>

        <section className="my-[60px] mb-30 relative z-50">
          <YStack gap="gap-[16px]">
            <Text
              fow={700}
              className="text-white text-center text-[48px] max-sm:text-[32px]"
            >
              How much is my <br /> Property Worth?
            </Text>
            <Text
              fow={500}
              className="text-white text-center text-[20px] max-sm:text-[16px]"
            >
              Gain insights into potential returns, rental yields, and property
              appreciation—helping you invest <br /> with confidence.
            </Text>
            <Button
              textClassName="text-white"
              className="bg-primary w-[178px] h-[54px] rounded-[12px]"
            >
              Use Calculator
            </Button>
          </YStack>
        </section>

        <div className="px-[24px] w-full flex items-start justify-between max-sm:flex-col gap-[40px] max-sm:gap-[20px] mt-[60px] mb-[80px]">
          <div className="items-start flex-col flex gap-[32px] w-[40%] max-sm:w-full">
            <Text
              fow={700}
              className="text-white text-[40px] max-sm:text-[28px]"
            >
              Make Smarter Investment Decisions
            </Text>
            <Text
              fow={400}
              fof="s"
              className="text-[#FFFFFFBF] text-[20px] max-sm:text-[16px]"
            >
              Optimize your financial future with our investment calculator.
              Designed for accuracy and ease, it helps you analyze potential
              returns, assess risks, and make informed decisions. Whether
              you&apos;re planning for retirement, growing your wealth, or
              exploring new opportunities, our tool provides insights tailored
              to your goals. Take control of your investments today and make
              smarter, data-driven choices with confidence.
            </Text>
          </div>
          <div className="w-[60%] max-sm:w-full flex flex-col items-center justify-center gap-[40px]">
            <div
              className="relative w-[600px] max-sm:w-full overflow-y-scroll rounded-[12px] px-[50px] py-[76px] max-sm:px-[20px]"
              style={{
                background:
                  "linear-gradient(109.87deg, rgba(72, 73, 77, 0.088) 5.73%, rgba(108, 96, 128, 0.0704) 50.57%, rgba(142, 131, 166, 0.022) 100.09%)",
                border: "0.5px solid",
                borderImageSource:
                  "linear-gradient(95.95deg, rgba(255, 255, 255, 0.2) 9.91%, rgba(94, 94, 94, 0.16) 33.02%, rgba(94, 94, 94, 0.152727) 58.02%, rgba(255, 255, 255, 0.1) 95.28%)",
              }}
            >
              <img
                src="/images/calc.png"
                alt="Calculator"
                className="absolute top-0 right-0"
              />
              <Text
                fow={700}
                className="text-white text-center pt-[30px] text-[36px] max-sm:text-[28px]"
              >
                Investment Calculator
              </Text>
              <div className="mt-[40px] w-full flex flex-col gap-[32px]">
                <Input
                  label="Input your purchase price"
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  placeholder="$1,500,000"
                  className="w-[500px] max-sm:w-full h-[77px] bg-[#282828] text-white rounded-[8px] outline-none focus:outline-none max-sm:h-[54px]"
                />
                {renderFilterBox("Location")}
                {renderFilterBox("Investment Goals")}
                {renderFilterBox("Property Type")}
                {renderFilterBox("Number of Bedrooms")}
                {renderFilterBox("Financing Method")}
                <div className="w-full">
                  <Text fow={500} fos={16} className="text-white">
                    Monthly Loan Repayment
                  </Text>
                  <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[16px] h-[77px] bg-primary text-white border-[#FFFFFF1A] rounded-[8px] max-sm:h-[54px] ">
                    <Text
                      fow={700}
                      className="text-[#FFFFFFCC] text-[20px] max-sm:text-[16px]"
                    >
                      $500
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMapViewOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsMapViewOpen(false)}
          >
            <div
              className="relative w-[80%] h-[80%] bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.google.com/maps/embed"
                className="w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <button
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
                onClick={() => setIsMapViewOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
