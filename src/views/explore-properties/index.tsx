import { Button, Input, Text, YStack } from "@/components/base";
import { Breadcrumb, Icon, Modal, Table, Tooltip } from "@/components/inc";
import { Property, properties } from "@/constants/data";
import { Layout } from "@/layouts";
import React, { useState } from "react";

export default function ExploreProperties() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [financingOption, setFinancingOption] = useState("");
  console.log("Selected Property:", selectedProperty);

  const inputFields = [
    {
      label: "Name",
      type: "text",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
      placeholder: "Enter your name",
    },
    {
      label: "Email",
      type: "email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
      placeholder: "Enter your email",
    },
    {
      label: "Phone Number",
      type: "tel",
      value: phone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value),
      placeholder: "Enter your phone number",
    },
    {
      label: "Would you require financing?",
      type: "text",
      value: budget,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setBudget(e.target.value),
      placeholder: "What is your budget?",
    },
  ];

  const financingOptions = [
    { value: "mortgage", label: "I need a mortgage (bank financing)" },
    {
      value: "developer-plan",
      label:
        "I prefer a developer’s flexible payment plan (e.g., 12-36 months)",
    },
    {
      value: "rent-to-own",
      label:
        "I’m interested in a rent-to-own option (pay while living in the home)",
    },
    {
      value: "joint-investment",
      label:
        "I want a joint investment option (co-buying with a partner or investor)",
    },
    { value: "full-payment", label: "I’m ready for full payment" },
  ];

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
        <button
          className="h-[37px] w-[120px] rounded-[8px] bg-primary text-sm text-white cursor-pointer"
          onClick={() => {
            setSelectedProperty(row || null);
            setIsModalOpen(true);
          }}
        >
          Make an Offer
        </button>
      ),
    },
  ];

  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="absolute -top-24 w-full left-0 justify-center flex">
          <img
            src="/images/bg-pattern.png"
            alt="Explore Properties"
            className="object-contain "
          />
        </div>
        <Breadcrumb items={[{ label: "Explore Properties" }]} />

        <section className="my-[60px] mb-30 relative z-20">
          <YStack gap="gap-[16px]">
            <Text
              fow={700}
              className="text-white text-center text-[48px] max-sm:text-[28px]"
            >
              Smart Investments Start Here <br className="max-sm:hidden" />{" "}
              Discover Profitable Properties
            </Text>
            <Text
              fow={500}
              className="text-white text-center text-[20px] max-sm:text-[16px]"
            >
              Browse high-yield properties and make data-driven investment
              decisions with confidence
            </Text>
          </YStack>
        </section>

        <section className="my-[45px]">
          <Table columns={columns} data={properties} />
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Make an Offer"
        >
          <div className="w-[555px] h-[819px] p-6 rounded-[12px] bg-[#292929]">
            <div className="w-[476px]">
              <YStack
                gap="gap-[16px]"
                className="w-[412px] mx-[40px]"
                align="start"
              >
                <Text
                  fow={700}
                  fos={32}
                  className="text-white text-center pt-[30px]"
                >
                  We&apos;ll be in touch
                </Text>
                {inputFields.map((field, index) => (
                  <Input
                    key={index}
                    label={field.label}
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    className="w-[412px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px] outline-none focus:outline-none"
                  />
                ))}
                <div className="flex flex-col w-full">
                  <label className="mb-1 text-white">Financing Option</label>
                  <select
                    value={financingOption}
                    onChange={(e) => setFinancingOption(e.target.value)}
                    className="w-full h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px] px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                  >
                    {financingOptions.map((option) => (
                      <option
                        className="w-[412px]"
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  variant="primary"
                  textClassName="text-white"
                  className="w-full mt-2 h-[64px] bg-primary text-white rounded-[8px]"
                  onClick={() => {
                    console.log("Form submitted", {
                      name,
                      email,
                      phone,
                      budget,
                      financingOption,
                    });
                    setIsModalOpen(false);
                  }}
                >
                  Submit
                </Button>
              </YStack>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
