import { Button, Input, Text, XStack, YStack } from "@/components/base";
import { Container, Icon, Navbar } from "@/components/inc";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const waitlistVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.6 } },
};

export default function Index() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = () => {
    router.push("/explore-properties");
  };

  return (
    <Container
      type="main"
      className="relative h-screen flex flex-col items-center justify-center"
      style={{
        background: `
          linear-gradient(0deg, #141414, #141414),
          linear-gradient(180deg, rgba(127, 102, 255, 0.01) 40%, rgba(42, 122, 241, 0.1) 100%)
        `,
      }}
    >
      {/* Navbar at the top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="w-full h-full overflow-hidden">
        <img src="/images/hero-lines.png" alt="hero" className=" w-full" />
      </div>
      <Container className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <YStack
          gap="gap-[1rem] md:gap-[1.75rem]"
          className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="flex justify-center">
              <Text
                className="text-white text-center text-[3.75rem] max-sm:text-[2.5rem]"
                fow={700}
              >
                The Future of Real Estate Investing Starts Here
              </Text>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center"
          >
            <Text
              className="text-[#FFFFFFCC] text-center text-[1.25rem] max-sm:text-[1rem]"
              fow={500}
            >
              Maximize returns with data-driven property investment insights.
            </Text>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button
              textClassName="text-white text-[1.125rem] max-sm:text-[0.75rem]"
              className="bg-primary w-[11.25rem] h-[3rem] rounded-[0.5rem] md:w-[13.6875rem] md:h-[3.25rem] md:rounded-[0.625rem]"
              onClick={handleGetStarted}
            >
              View Property Listings
            </Button>
          </motion.div>
        </YStack>
        <motion.div initial="hidden" animate="visible" variants={iconVariants}>
          <Icon
            className="mt-[2.5rem] md:mt-[4.25rem]"
            name="double_arrow_down"
          />
        </motion.div>
      </Container>
      <div
        className="absolute left-0 w-full"
        style={{
          bottom: "8.875rem",
          height: "14.5rem",
          background:
            "linear-gradient(180deg, rgba(108,99,255,0.00) 0%, rgba(108,99,255,0.06) 60%, rgba(108,99,255,0.12) 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      <Container className="absolute bg-primary h-[7.5rem] md:h-[8.875rem] max-sm:h-[8.875rem] bottom-0 left-0 w-full flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={waitlistVariants}
        >
          <YStack className="justify-center">
            <Text
              className="text-[#FFFFFFD9] text-[1rem] max-sm:text-[0.875rem] md:text-[1.125rem]"
              fow={500}
            >
              Join the waitlist
            </Text>
            <XStack className="items-center -mt-4 justify-center">
              <Input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-[18.75rem] max-sm:w-[15.625rem] h-[3rem] text-[#FFFFFFBF] bg-[#FFFFFF1A] rounded-[0.5rem] border border-[#FFFFFF29] focus:outline-none px-4 md:w-[23.125rem] md:h-[3.25rem] md:rounded-[0.625rem]"
              />
              <Button
                textClassName="text-primary text-[1.125rem] max-sm:text-[0.75rem]"
                className="bg-white w-[5.625rem] max-sm:w-[5rem] h-[3rem] rounded-[0.5rem] hover:bg-[#FFFFFFE6] ml-2 md:w-[6.625rem] md:h-[3.25rem] md:rounded-[0.625rem]"
              >
                Sign Up
              </Button>
            </XStack>
          </YStack>
        </motion.div>
      </Container>
    </Container>
  );
}
