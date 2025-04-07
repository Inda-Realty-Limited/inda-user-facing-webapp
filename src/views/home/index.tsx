import { Button, Input, Text, XStack, YStack } from "@/components/base";
import { Container, Icon, Navbar } from "@/components/inc";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

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
      <div className="w-full h-full overflow-hidden">
        <img
          src="/images/hero-lines.png"
          alt="hero"
          className="object-cover w-full h-full"
        />
      </div>
      <Container className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-[20px] md:top-[50px] mb-[20px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={28}
            className="md:w-[100px] md:h-[35px]"
          />
        </div>
        <YStack
          gap="gap-[16px] md:gap-[28px]"
          className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]"
        >
          <Text
            className="text-white text-center text-[60px] max-sm:text-[40px]"
            fow={700}
          >
            The Future of Real Estate Investing Starts Here
          </Text>
          <Text
            className="text-[#FFFFFFCC] text-center text-[20px] max-sm:text-[16px]"
            fow={500}
          >
            Maximize returns with data-driven property investment insights.
          </Text>
          <Button
            textClassName="text-white text-[18px] max-sm:text-[12px]"
            className="bg-primary w-[180px] h-[48px] rounded-[8px] md:w-[219px] md:h-[52px] md:rounded-[10px]"
            onClick={handleGetStarted}
          >
            View Property Listings
          </Button>
        </YStack>
        <Navbar />
        <Icon className="mt-[40px] md:mt-[68px]" name="double_arrow_down" />
      </Container>
      <Container className="absolute bg-primary h-[120px] md:h-[142px] mt-[40px] md:mt-[63px] bottom-0 left-0 w-full flex items-center justify-center">
        <YStack className="justify-center">
          <Text className="text-[#FFFFFFD9] md:text-[18px]" fow={500} fos={16}>
            Join the waitlist
          </Text>
          <XStack className="items-center -mt-4 justify-center">
            <Input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-[300px] h-[48px] text-[#FFFFFFBF] bg-[#FFFFFF1A] rounded-[8px] border border-[#FFFFFF29] focus:outline-none px-4 md:w-[370px] md:h-[52px] md:rounded-[10px]"
            />
            <Button
              textClassName="text-primary"
              className="bg-white w-[90px] h-[48px] rounded-[8px] hover:bg-[#FFFFFFE6] ml-2 md:w-[106px] md:h-[52px] md:rounded-[10px]"
            >
              Sign Up
            </Button>
          </XStack>
        </YStack>
      </Container>
    </Container>
  );
}
