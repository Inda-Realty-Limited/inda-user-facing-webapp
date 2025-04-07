import { Text, XStack, YStack } from "@/components/base";
import { Breadcrumb } from "@/components/inc";
import { Layout } from "@/layouts";

export default function About() {
  return (
    <Layout>
      <Breadcrumb items={[{ label: "About" }]} />
      <section className="my-[88px] max-sm:my-[40px]">
        <XStack className="justify-between">
          <YStack
            gap="gap-[20px]"
            className="items-start w-[40%] max-sm:w-full"
          >
            <Text
              fow={600}
              fof="l"
              className="text-white text-[28px] md:text-[36px] lg:text-[44px]"
            >
              Our goal is simple
            </Text>
            <Text
              fow={500}
              fof="p"
              className="text-white text-[16px] md:text-[18px] lg:text-[20px]"
            >
              We simplify the process, connect you to high-yield properties, and
              provide the tools to build wealth—no stress, no guesswork, just
              smart investing. Get reliable insights, expert guidance, and
              data-driven analysis to make informed decisions with confidence in
              every investment.
            </Text>
            <Text
              fow={400}
              fof="p"
              className="text-white text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Navigating real estate investment can be complex, but we make it
              effortless. Our platform connects you with high-yield
              opportunities, offering expert guidance, in-depth market insights,
              and data-driven analysis. With our tools, you can make informed
              decisions, reduce risks, and invest confidently.
            </Text>
          </YStack>
          <div className="w-[48%] max-sm:hidden">
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
          className="object-cover w-full h-full max-sm:h-[242px]"
        />
      </section>
    </Layout>
  );
}
