import { Text, YStack } from "@/components/base";
import { Breadcrumb, Table } from "@/components/inc";
import { Property, properties } from "@/constants/data";
import { Layout } from "@/layouts";

export default function ExploreProperties() {
  interface Column {
    header: string;
    accessor: keyof Property | "actions";
    render?: (value: any, row?: Property) => React.ReactNode;
  }

  const columns: Column[] = [
    {
      header: "Property Image",
      accessor: "image",
      render: (value: string) => (
        <img
          src={value}
          alt="Property"
          className="w-[125px] h-[80px] object-cover rounded-[8px]"
        />
      ),
    },
    { header: "Address", accessor: "address" },
    { header: "Property Type and Size", accessor: "type" },
    { header: "Listing Price", accessor: "price" },
    { header: "Expected Rental Income", accessor: "rentalIncome" },
    { header: "1yr Total Return", accessor: "oneYearReturn" },
    { header: "5yr Total Return", accessor: "fiveYearReturn" },
    {
      header: "Investment Score",
      accessor: "investmentScore",
      render: (value: string) => (
        <span className="text-green-500">{value}</span>
      ),
    },
    {
      header: "",
      accessor: "actions",
      render: (_, row) => (
        <button className="h-[37px] w-[120px] rounded-[8px] bg-primary text-sm text-white cursor-pointer">
          Make an Offer
        </button>
      ),
    },
  ];

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Explore Properties" }]} />

      <section className="my-[60px]">
        <YStack gap="gap-[16px]">
          <Text fow={700} fos={48} className="text-white text-center">
            Smart Investments Start Here <br /> Discover Profitable Properties
          </Text>
          <Text fow={500} fos={20} className="text-white text-center">
            Browse high-yield properties and make data-driven investment
            decisions with confidence
          </Text>
        </YStack>
      </section>

      <section className="my-[40px]">
        <Table columns={columns} data={properties} />
      </section>
    </Layout>
  );
}
