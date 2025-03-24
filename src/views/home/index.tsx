import { Button, Input, Text, XStack, YStack } from "@/components/base";
import { Container, Icon, Navbar } from "@/components/inc";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container
      type="main"
      className="relative h-[974px] flex flex-col items-center justify-center"
      // style={{
      //   background: `
      //     linear-gradient(0deg, #222222, #222222),
      //     linear-gradient(180deg, rgba(127, 102, 255, 0.01) 40%, rgba(42, 122, 241, 0.1) 100%)
      //   `,
      // }}
    >
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/images/hero-lines.png"
          alt="hero"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Container className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-8">
          <Image src="/images/logo.png" alt="logo" width={100} height={35} />
        </div>
        <YStack className="flex flex-col items-center justify-center mt-16 w-[50%]">
          <Text className="text-white text-center" fow={700} fos={60}>
            The Future of Real Estate Investing Starts Here
          </Text>
          <Text className="text-white text-center" fow={500} fos={20}>
            Maximize returns with data-driven property investment insights.
          </Text>
          <Button
            textClassName="text-white"
            className="bg-primary w-[135px] h-[52px] rounded-[10px]"
          >
            Get Started
          </Button>
        </YStack>
        <Navbar className="mt-16" />
        <Icon className="mt-6" name="double_arrow_down" />
      </Container>
      <Container className="absolute bg-primary h-[142px] bottom-0 left-0 w-full flex items-center justify-center">
        <YStack className="justify-center">
          <Text className="text-[#FFFFFFD9]" fow={500} fos={18}>
            Join the waitlist
          </Text>
          <XStack className="items-center -mt-4 justify-center">
            <Input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-[370px] h-[52px] text-[#FFFFFFBF] bg-[#FFFFFF1A] rounded-[10px] border border-[#FFFFFF29] focus:outline-none px-4"
            />
            <Button
              textClassName="text-primary"
              className="bg-white w-[106px] h-[52px] rounded-[10px] hover:bg-[#FFFFFFE6] ml-2"
            >
              Sign Up
            </Button>
          </XStack>
        </YStack>
      </Container>
    </Container>
  );
}
