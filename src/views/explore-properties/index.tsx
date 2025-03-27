import { Button, Text, XStack, YStack } from "@/components/base";
import { Breadcrumb } from "@/components/inc";
import { Layout } from "@/layouts";

export default function ExploreProperties() {
  const properties = [
    {
      image: "/images/property1.png",
      address: "Obalnde Street, Awolowo road",
      type: "2 bedroom apartment, 120sqm",
      price: "$120,000",
      rentalIncome: "$50,000",
      oneYearReturn: "$260,000",
      fiveYearReturn: "$1,260,000",
      investmentScore: "High Yield",
    },
    // Add more properties as needed
  ];

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Explore Properties" }]} />

      <section className="my-[40px]">
        <Text fow={700} fos={44} className="text-white text-center">
          Smart Investments Start Here
        </Text>
        <Text fow={500} fos={20} className="text-white text-center mt-4">
          Discover Profitable Properties
        </Text>
        <Text fow={400} fos={16} className="text-white text-center mt-2">
          Browse high-yield properties and make data-driven investment decisions
          with confidence
        </Text>
      </section>

      <section className="my-[40px]">
        <XStack className="justify-between items-center">
          <Text fow={500} fos={18} className="text-white">
            Last 30 days
          </Text>
          <XStack gap="gap-[10px]">
            <Button className="bg-primary text-white px-4 py-2 rounded-[10px]">
              Filters
            </Button>
            <Button className="bg-primary text-white px-4 py-2 rounded-[10px]">
              Search
            </Button>
          </XStack>
        </XStack>
      </section>

      <section className="my-[40px]">
        <YStack gap="gap-[20px]">
          {properties.map((property, index) => (
            <XStack
              key={index}
              className="bg-[#1E1E1E] p-4 rounded-[10px] items-center justify-between"
            >
              <img
                src={property.image}
                alt="Property"
                className="w-[120px] h-[120px] object-cover rounded-[10px]"
              />
              <YStack className="flex-1 ml-4">
                <Text fow={600} fos={18} className="text-white">
                  {property.address}
                </Text>
                <Text fow={400} fos={16} className="text-white mt-2">
                  {property.type}
                </Text>
                <Text fow={400} fos={16} className="text-white mt-2">
                  Listing Price: {property.price}
                </Text>
                <Text fow={400} fos={16} className="text-white mt-2">
                  Expected Rental Income: {property.rentalIncome}
                </Text>
              </YStack>
              <YStack className="items-end">
                <Text fow={400} fos={16} className="text-white">
                  1yr Total Return: {property.oneYearReturn}
                </Text>
                <Text fow={400} fos={16} className="text-white mt-2">
                  5yr Total Return: {property.fiveYearReturn}
                </Text>
                <Text fow={600} fos={16} className="text-green-500 mt-2">
                  {property.investmentScore}
                </Text>
                <Button className="bg-primary text-white px-4 py-2 rounded-[10px] mt-4">
                  Make an Offer
                </Button>
              </YStack>
            </XStack>
          ))}
        </YStack>
      </section>
    </Layout>
  );
}
