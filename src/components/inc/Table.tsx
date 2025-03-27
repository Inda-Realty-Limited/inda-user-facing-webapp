import { Button, Input, Text, XStack } from "@/components/base";
import { Select } from "@/components/base/Select";
import { ReactNode, useState } from "react";

interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

export const Table = ({ columns, data }: TableProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const options = [
    { value: "30", label: "Last 30 days" },
    { value: "60", label: "Last 60 days" },
    { value: "90", label: "Last 90 days" },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full border border-[#ABABAB33] rounded-[8px] overflow-hidden">
      <XStack gap="gap-[16px]" className=" mx-6 h-[96px] items-center">
        <Select
          options={options}
          value="30"
          onChange={(e) => console.log(e.target.value)}
          className="bg-background text-white px-4 py-2 rounded-[10px]"
        />

        <div className="flex gap-4">
          <Button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-[10px] flex items-center">
            Filters <span className="ml-2">🔍</span>
          </Button>

          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
            className="focus:outline-none border-[#ABABAB33] border text-white h-[40px] px-4 rounded-[10px] w-[465px]"
          />
        </div>
      </XStack>

      <table className="w-full text-left text-white border-collapse">
        <thead>
          <tr className="">
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
          {data.map((row, rowIndex) => (
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
    </div>
  );
};
