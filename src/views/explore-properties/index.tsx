import { Text, YStack } from "@/components/base";
import { Breadcrumb, Icon, Table, Tooltip } from "@/components/inc";
import { Property, properties } from "@/constants/data";
import { Layout } from "@/layouts";

export default function ExploreProperties() {
  interface Column {
    header: React.ReactNode;
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
      header: (
        <div className="flex items-center gap-[1px]">
          <span>Investment Score</span>
          <Tooltip
            content={
              <YStack
                gap="gap-[1px]"
                align="start"
                className="overflow-hidden h-full w-full text-white"
              >
                {[
                  {
                    title: "High Yield Low Risk",
                    description: "Strong rental returns with minimal downside",
                  },
                  {
                    title: "Cash Flow King",
                    description:
                      "Exceptional rental yield, ideal for passive income",
                  },
                  {
                    title: "Below Market Deal",
                    description:
                      "Priced under market value, instant equity upside",
                  },
                  {
                    title: "Fast Appreciation",
                    description:
                      "High-growth area with strong capital gains expected",
                  },
                  {
                    title: "Hot Demand",
                    description:
                      "Limited availability, multiple investors interested",
                  },
                ].map((item, index) => (
                  <YStack
                    key={index}
                    gap=""
                    align="start"
                    className="border-b p-[10px] w-full px-5 border-[#FFFFFF1A]"
                  >
                    <Text fos={14} fow={400}>
                      {item.title}
                    </Text>
                    <Text fos={12} fow={100}>
                      {item.description}
                    </Text>
                  </YStack>
                ))}
              </YStack>
            }
          >
            <Icon name="info" />
          </Tooltip>
        </div>
      ),
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
