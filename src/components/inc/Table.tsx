import { Input, Text, XStack, YStack } from "@/components/base";
import { Modal } from "@/components/inc/Modal";
import PriceRangeFilter from "@/views/explore-properties/components/PriceRangeFilter";
import { ReactNode, useState } from "react";
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
  const [activeBox, setActiveBox] = useState<string | null>(null);

  const handleBoxClick = (boxName: string) => {
    setActiveBox(boxName);
  };

  const handleClose = () => {
    setActiveBox(null);
  };
  const options = [
    { value: "30", label: "Last 30 days" },
    { value: "60", label: "Last 60 days" },
    { value: "90", label: "Last 90 days" },
  ];

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

  return (
    <div className="w-full border border-[#ABABAB33] rounded-[8px] overflow-hidden">
      <XStack gap="gap-[16px]" className="mx-6 h-[96px] items-center">
        <select
          value="30"
          onChange={(e) => console.log(e.target.value)}
          className="bg-background text-white px-4 py-2 rounded"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <XStack
          align="center"
          className="border border-[#ABABAB33] cursor-pointer h-[40px] text-white w-[120px] justify-center rounded"
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
          className="focus:outline-none border-[#ABABAB33] border text-white h-[40px] rounded w-[465px]"
        />
      </XStack>

      {filteredData.length > 0 ? (
        <table className="w-full text-left text-white border-collapse">
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
                      column.render(row[column.accessor], row)
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
      ) : (
        <div className="flex justify-center items-center h-[200px]">
          <Text fow={500} fos={18} className="text-[#FFFFFFBF]">
            No data found for your search.
          </Text>
        </div>
      )}

      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filters"
      >
        <div className="w-[960px] h-[615px] py-7 px-[56px] rounded-[12px] bg-[#292929]">
          <XStack align="center" justify="between" className="mb-4">
            <Text fow={700} fos={32} className=" text-white">
              Filters
            </Text>
            <Text fow={500} fos={20} className="cursor-pointer text-primary">
              Apply Filters
            </Text>
          </XStack>
          <XStack justify="between" className="mb-4">
            <YStack gap="gap-[16px]" className="w-[48%]">
              <PriceRangeFilter />
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  Location
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select location
                  </Text>
                </div>
              </div>
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  Rental Yield
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select rental yield
                  </Text>
                </div>
              </div>
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  Investment Score
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select investment score
                  </Text>
                </div>
              </div>
            </YStack>
            <YStack gap="gap-[16px]" className="w-[48%]">
              <div className="w-full h-[64px] mt-[80px]"></div>
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  Number of bedrooms
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select number of bedrooms
                  </Text>
                </div>
              </div>
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  ROI
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select ROI
                  </Text>
                </div>
              </div>
              <div className="w-full">
                <Text fow={500} fos={16} className="text-white ">
                  Property Type
                </Text>
                <div className="w-full cursor-pointer mt-[10px] flex items-center pl-[32px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px]">
                  <Text fow={400} fos={16} className="text-white">
                    Click to select property type
                  </Text>
                </div>
              </div>
            </YStack>
          </XStack>
        </div>
      </Modal>
    </div>
  );
};
