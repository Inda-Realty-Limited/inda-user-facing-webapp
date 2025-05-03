import { Button, Input, Text, YStack } from "@/components/base";
import { Breadcrumb, Icon, Modal, Table, Tooltip } from "@/components/inc";
import { Property, properties } from "@/constants/data";
import { Layout } from "@/layouts";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

// New animation variants for button hover and tap
const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

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
        <motion.img
          src={value}
          alt="Property"
          className="w-[125px] h-[80px] object-cover rounded-[8px]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
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
        <motion.span
          className="text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span>
      ),
    },
    {
      header: "",
      accessor: "actions",
      render: (_, row) => (
        <motion.button
          className="h-[37px] w-[120px] rounded-[8px] bg-primary text-sm text-white cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => {
            setSelectedProperty(row || null);
            setIsModalOpen(true);
          }}
        >
          Make an Offer
        </motion.button>
      ),
    },
  ];

  return (
    <Layout>
      <div className="relative w-full h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="absolute -top-24 w-full left-0 justify-center flex"
        >
          <img
            src="/images/bg-pattern.png"
            alt="Explore Properties"
            className="object-contain"
          />
        </motion.div>
        <Breadcrumb items={[{ label: "Explore Properties" }]} />

        <motion.section
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="my-[60px] mb-30 relative z-20"
        >
          <YStack gap="gap-[16px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex justify-center"
            >
              <Text
                fow={700}
                className="text-white text-center text-[48px] max-sm:text-[28px]"
              >
                Smart Investments Start Here <br className="max-sm:hidden" />{" "}
                Discover Profitable Properties
              </Text>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex justify-center"
            >
              <Text
                fow={500}
                className="text-white text-center text-[20px] max-sm:text-[16px]"
              >
                Browse high-yield properties and make data-driven investment
                decisions with confidence
              </Text>
            </motion.div>
          </YStack>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="my-[45px]"
        >
          <Table
            columns={columns}
            data={properties.map((property, index) => ({
              ...property,
              rowAnimation: (
                <motion.tr
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {Object.values(property).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </motion.tr>
              ),
            }))}
          />
        </motion.section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Make an Offer"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={modalVariants}
            className="w-[555px] h-[819px] p-6 rounded-[12px] bg-[#292929] max-sm:w-full max-sm:h-auto max-sm:p-4"
          >
            <div className="w-[476px] max-sm:w-full">
              <YStack
                gap="gap-[16px]"
                className="w-[412px] mx-[40px] max-sm:w-full max-sm:mx-0"
                align="start"
              >
                <motion.div variants={textVariants}>
                  <Text
                    fow={700}
                    fos={32}
                    className="text-white text-center pt-[30px] max-sm:pt-4 max-sm:text-2xl"
                  >
                    We'll be in touch
                  </Text>
                </motion.div>
                {inputFields.map((field, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Input
                      label={field.label}
                      type={field.type}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={field.placeholder}
                      className="w-[412px] h-[64px] bg-[#3D3D3D] text-white border-[#FFFFFF1A] rounded-[8px] outline-none focus:outline-none max-sm:w-full"
                    />
                  </motion.div>
                ))}
                <motion.div
                  custom={inputFields.length}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CustomDropdown
                    label="Financing Option"
                    value={financingOption}
                    options={financingOptions}
                    onChange={setFinancingOption}
                  />
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-[412px] max-sm:w-full"
                >
                  <Button
                    variant="primary"
                    textClassName="text-white"
                    className="w-full mt-4 h-[64px] bg-primary text-white rounded-[8px] max-sm:w-full"
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
                </motion.div>
              </YStack>
            </div>
          </motion.div>
        </Modal>
      </div>
    </Layout>
  );
}

interface CustomDropdownProps {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  label?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  options,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="w-[412px] h-[64px]  mb-4 relative max-sm:w-full">
      {label && <label className="mb-1 text-white">{label}</label>}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center mt-2 cursor-pointer w-full h-full bg-[#3D3D3D] text-white  rounded-[8px] px-3 outline-none"
      >
        <span>{selectedOption?.label || "Select an option"}</span>
        <FaChevronDown size={15} />
      </button>
      {isOpen && (
        <ul className="absolute top-[70px] left-0 right-0 z-10 bg-[#3D3D3D] border border-[#FFFFFF1A] rounded-[8px] max-h-[200px] overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-3 hover:bg-[#4E4E4E] cursor-pointer text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
