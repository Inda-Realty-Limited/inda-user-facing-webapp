import { Input, Text, XStack, YStack } from "@/components/base";
import { Modal } from "@/components/inc/Modal";
import PriceRangeFilter from "@/views/explore-properties/components/PriceRangeFilter";
import { ReactNode, useEffect, useState } from "react";
import { Icon } from "./Icon";

interface TableColumn {
  header: React.ReactNode;
  accessor: string;
  render?: (value: any, row: any) => ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

export const Table = ({ columns, data }: TableProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeLeftBox, setActiveLeftBox] = useState<string | null>(null);
  const [activeRightBox, setActiveRightBox] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const options = [
    { value: "30", label: "Last 30 days" },
    { value: "60", label: "Last 60 days" },
    { value: "90", label: "Last 90 days" },
  ];

  const filterOptions = {
    Location: [
      { value: "downtown", label: "Downtown" },
      { value: "suburbs", label: "Suburbs" },
      { value: "rural", label: "Rural" },
    ],
    "Rental Yield": [
      { value: "low", label: "0-5%" },
      { value: "medium", label: "5-10%" },
      { value: "high", label: "10%+" },
    ],
    "Investment Score": [
      { value: "low", label: "0-3" },
      { value: "medium", label: "4-7" },
      { value: "high", label: "8-10" },
    ],
    "Number of bedrooms": [
      { value: "1", label: "1 Bedroom" },
      { value: "2", label: "2 Bedrooms" },
      { value: "3", label: "3+ Bedrooms" },
    ],
    ROI: [
      { value: "low", label: "0-5%" },
      { value: "medium", label: "5-10%" },
      { value: "high", label: "10%+" },
    ],
    "Property Type": [
      { value: "apartment", label: "Apartment" },
      { value: "house", label: "House" },
      { value: "condo", label: "Condo" },
    ],
  };

  const renderFilterBox = (title: string, isLeft: boolean) => {
    const isActive = isLeft
      ? activeLeftBox === title
      : activeRightBox === title;
    const setActive = isLeft ? setActiveLeftBox : setActiveRightBox;

    return (
      <YStack gap="gap-[16px]" className="w-full">
        <div className="w-full">
          <Text fow={500} fos={16} className="text-white">
            {title}
          </Text>
          <div
            className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]"
            onClick={() => setActive(isActive ? null : title)}
          >
            <Text fow={400} fos={16} className="text-white">
              {isActive
                ? "Click to close selection"
                : `Click to select ${title.toLowerCase()}`}
            </Text>
          </div>
        </div>
        {isActive && (
          <div className="w-full h-[327px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      String(row[column.accessor])
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  );

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  const toggleRow = (rowIndex: number) => {
    setExpandedRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((index) => index !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedImage]);

  // Mock function to determine badge status (adjust based on your data logic)
  const getBadgeStatus = (row: any) => {
    if (row.price && String(row.price).includes("N")) return "priceReduced";
    if (row.offerStatus === "submitted") return "offerSubmitted";
    return null;
  };

  return (
    <div className="w-full border border-[#ABABAB33] rounded-[8px] overflow-hidden relative">
      <XStack
        gap="gap-[16px]"
        className="mx-6 h-[96px] items-center max-sm:flex-col max-sm:items-start max-sm:gap-[8px] max-sm:mx-4 max-sm:h-auto max-sm:py-4"
      >
        <select
          value="30"
          onChange={(e) => console.log(e.target.value)}
          className="bg-background text-white px-4 py-2 rounded max-sm:w-full"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <XStack
          align="center"
          className="border border-[#ABABAB33] cursor-pointer h-[40px] text-white w-[120px] justify-center rounded max-sm:w-full"
        >
          <Text fow={400} fos={16} onClick={() => setIsFilterModalOpen(true)}>
            Filters
          </Text>
          <Icon name="filter" className="mt-2" />
        </XStack>

        <Input
          icon
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search"
          className="focus:outline-none border-[#ABABAB33] border text-white h-[40px] rounded w-[465px] max-sm:w-full"
        />
      </XStack>

      {filteredData.length > 0 ? (
        <>
          {/* Desktop Table View */}
          <table className="w-full text-left text-white border-collapse max-sm:hidden">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="p-4 border-b border-t h-[96px] border-[#ABABAB33]"
                  >
                    <Text fow={500} fos={20} className="text-white">
                      {column.header}
                    </Text>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-[#2A2A2A]">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="p-4">
                      {column.render ? (
                        <div
                          onClick={() => {
                            const value = row[column.accessor];
                            if (
                              typeof value === "string" &&
                              value.match(/\.(jpeg|jpg|gif|png)$/)
                            ) {
                              handleImageClick(value);
                            }
                          }}
                        >
                          {column.render(row[column.accessor], row)}
                        </div>
                      ) : (
                        <Text fow={500} fos={16} className="text-white">
                          {row[column.accessor]}
                        </Text>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="sm:hidden p-4 flex flex-col gap-3 bg-[#1E1E1E]">
            {filteredData.map((row, rowIndex) => {
              const badgeStatus = getBadgeStatus(row);
              return (
                <div
                  key={rowIndex}
                  className="bg-[#2A2A2A] rounded-[8px] p-3 border border-[#3D3D3D] shadow-md"
                >
                  <XStack gap="gap-3" align="center" className="items-start">
                    {/* Image Column */}
                    <div
                      onClick={() => {
                        const value = row["image"];
                        if (
                          typeof value === "string" &&
                          value.match(/\.(jpeg|jpg|gif|png)$/)
                        ) {
                          handleImageClick(value);
                        }
                      }}
                      className="w-20 h-16 overflow-hidden"
                    >
                      {columns[0].render ? (
                        columns[0].render(row["image"], row)
                      ) : (
                        <Text fow={400} fos={16} className="text-white">
                          {row["image"]}
                        </Text>
                      )}
                    </div>

                    {/* Main Info */}
                    <YStack gap="gap-1" className="flex-1">
                      <Text fow={600} fos={16} className="text-white">
                        {row["address"]}
                      </Text>
                      <Text fow={400} fos={14} className="text-gray-400">
                        {row["type"]}
                      </Text>
                      {badgeStatus && (
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            badgeStatus === "priceReduced"
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {badgeStatus === "priceReduced"
                            ? "Price Reduced"
                            : "Offer Submitted"}
                        </span>
                      )}
                    </YStack>

                    {/* More Details Toggle */}
                    <button
                      onClick={() => toggleRow(rowIndex)}
                      className="text-blue-400 font-medium text-sm hover:text-blue-300"
                    >
                      {expandedRows.includes(rowIndex)
                        ? "Less Details"
                        : "More Details"}
                    </button>
                  </XStack>

                  {/* Expanded Details */}
                  {expandedRows.includes(rowIndex) && (
                    <YStack gap="gap-2" className="mt-3 px-3 py-2 bg-[#1E1E1E]">
                      {[
                        { label: "Listing price", accessor: "price" },
                        {
                          label: "Expected Rental Income",
                          accessor: "rentalIncome",
                        },
                        {
                          label: "1yr Total Return",
                          accessor: "oneYearReturn",
                        },
                        {
                          label: "5yr Total Return",
                          accessor: "fiveYearReturn",
                        },
                        {
                          label: "Investment Score",
                          accessor: "investmentScore",
                        },
                      ].map((item, index) => (
                        <XStack key={index} gap="gap-2" align="center">
                          <Text
                            fow={400}
                            fos={14}
                            className="text-gray-400 w-40"
                          >
                            {item.label}
                          </Text>
                          <Text
                            fow={500}
                            fos={14}
                            className="text-white flex-1"
                          >
                            {columns.find(
                              (col) => col.accessor === item.accessor
                            )?.render
                              ? columns
                                  .find((col) => col.accessor === item.accessor)
                                  ?.render?.(row[item.accessor], row) ?? null
                              : row[item.accessor]}
                          </Text>
                        </XStack>
                      ))}
                    </YStack>
                  )}

                  {/* Make an Offer Button */}
                  <div className="mt-3 w-full">
                    {columns
                      .find((col) => col.accessor === "actions")
                      ?.render?.(null, row)}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[200px]">
          <Text fow={500} fos={18} className="text-[#FFFFFFBF]">
            No data found for your search.
          </Text>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
          onClick={closeImagePopup}
        >
          <div
            className="relative max-w-[80%] max-h-[80%] transition-all duration-300 ease-in-out transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-[8px]"
            />
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-[#3D3D3D] text-white rounded-full flex items-center justify-center"
              onClick={closeImagePopup}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => {
          setIsFilterModalOpen(false);
          setActiveLeftBox(null);
          setActiveRightBox(null);
        }}
        title="Filters"
      >
        <div className="w-[960px] h-[615px] py-7 px-[56px] rounded-[12px] bg-[#292929]">
          <XStack align="center" justify="between" className="mb-4">
            <Text fow={700} fos={32} className="text-white">
              Filters
            </Text>
            <Text
              fow={500}
              fos={20}
              className="cursor-pointer text-primary"
              onClick={() => setIsFilterModalOpen(false)}
            >
              Apply Filters
            </Text>
          </XStack>
          <XStack justify="between" className="mb-4">
            <YStack gap="gap-[16px]" className="w-[48%]">
              {!activeLeftBox && <PriceRangeFilter />}
              {!activeLeftBox ? (
                <>
                  {renderFilterBox("Location", true)}
                  {renderFilterBox("Rental Yield", true)}
                  {renderFilterBox("Investment Score", true)}
                </>
              ) : (
                renderFilterBox(activeLeftBox, true)
              )}
            </YStack>
            <YStack gap="gap-[16px]" className="w-[48%]">
              {!activeRightBox && <div className="w-full h-[64px] mt-[80px]" />}
              {!activeRightBox ? (
                <>
                  {renderFilterBox("Number of bedrooms", false)}
                  {renderFilterBox("ROI", false)}
                  {renderFilterBox("Property Type", false)}
                </>
              ) : (
                renderFilterBox(activeRightBox, false)
              )}
            </YStack>
          </XStack>
        </div>
      </Modal>
    </div>
  );
};
