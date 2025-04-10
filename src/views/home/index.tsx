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
      className="relative h-[974px] flex flex-col items-center justify-center"
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
        <div className="absolute top-[1.25rem] md:top-[3.125rem] mb-[1.25rem]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={28}
            className="md:w-[6.25rem] md:h-[2.1875rem]"
          />
        </div>
        <YStack
          gap="gap-[1rem] md:gap-[1.75rem]"
          className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]"
        >
          <Text
            className="text-white text-center text-[3.75rem] max-sm:text-[2.5rem]"
            fow={700}
          >
            The Future of Real Estate Investing Starts Here
          </Text>
          <Text
            className="text-[#FFFFFFCC] text-center text-[1.25rem] max-sm:text-[1rem]"
            fow={500}
          >
            Maximize returns with data-driven property investment insights.
          </Text>
          <Button
            textClassName="text-white text-[1.125rem] max-sm:text-[0.75rem]"
            className="bg-primary w-[11.25rem] h-[3rem] rounded-[0.5rem] md:w-[13.6875rem] md:h-[3.25rem] md:rounded-[0.625rem]"
            onClick={handleGetStarted}
          >
            View Property Listings
          </Button>
        </YStack>
        <Navbar />
        <Icon
          className="mt-[2.5rem] md:mt-[4.25rem]"
          name="double_arrow_down"
        />
      </Container>
      <Container className="absolute bg-primary h-[7.5rem] md:h-[8.875rem]  bottom-0 left-0 w-full flex items-center justify-center">
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
      </Container>
    </Container>
  );
}
