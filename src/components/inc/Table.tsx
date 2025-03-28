import { Input, Text, XStack } from "@/components/base";
import { Select } from "@/components/base/Select";
import { ReactNode, useState } from "react";
import { Icon } from "./Icon";

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
        <Select
          options={options}
          value="30"
          onChange={(e) => console.log(e.target.value)}
          className="bg-background text-white px-4 py-2 rounded"
        />

        <XStack
          align="center"
          className="border border-[#ABABAB33] cursor-pointer h-[40px] text-white w-[120px] justify-center rounded"
        >
          <Text fow={400} fos={16}>
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
    </div>
  );
};
