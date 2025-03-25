import { Text, XStack, YStack } from "@/components/base";
import { Icon } from "@/components/inc";
import { Layout } from "@/layouts";
import { useState } from "react";

export default function About() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Layout>
      <XStack gap="gap-[10px]">
        <Text
          underlined
          fow={400}
          fof="l"
          fos={18}
          className="text-white text-decoration-underline"
        >
          Home
        </Text>
        <Icon name="arrow_right" />
        <Text fow={400} fof="l" fos={18} className="text-white">
          About
        </Text>
      </XStack>
      <section className="my-[88px]">
        <XStack className="justify-between">
          <YStack gap="gap-[20px]" className="items-start w-[40%]">
            <Text fow={600} fof="l" fos={44} className="text-white">
              Our goal is simple
            </Text>
            <Text fow={500} fof="p" fos={20} className="text-white">
              We simplify the process, connect you to high-yield properties, and
              provide the tools to build wealth—no stress, no guesswork, just
              smart investing. Get reliable insights, expert guidance, and
              data-driven analysis to make informed decisions with confidence in
              every investment.
            </Text>
            <Text fow={400} fof="p" fos={16} className="text-white">
              Navigating real estate investment can be complex, but we make it
              effortless. Our platform connects you with high-yield
              opportunities, offering expert guidance, in-depth market insights,
              and data-driven analysis. With our tools, you can make informed
              decisions, reduce risks, and invest confidently.
            </Text>
          </YStack>
          <div className="w-[40%]">
            <img
              src="/images/home-hero.png"
              alt="About"
              className="object-cover w-full h-full"
            />
          </div>
        </XStack>
      </section>
      <section>
        <img
          src="/images/Video.png"
          alt="About"
          className="object-cover w-full h-full"
        />
      </section>
    </Layout>
  );
}
