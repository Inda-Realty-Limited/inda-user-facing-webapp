import { Text, XStack, YStack } from "@/components/base";
import { Breadcrumb } from "@/components/inc";
import { Layout } from "@/layouts";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const videoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.4, ease: "easeOut" },
  },
};

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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Text
                fow={600}
                fof="l"
                className="text-white text-[28px] md:text-[36px] lg:text-[44px]"
              >
                Our goal is simple
              </Text>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Text
                fow={500}
                fof="p"
                className="text-white text-[16px] md:text-[18px] lg:text-[20px]"
              >
                We simplify the process, connect you to high-yield properties,
                and provide the tools to build wealth—no stress, no guesswork,
                just smart investing. Get reliable insights, expert guidance,
                and data-driven analysis to make informed decisions with
                confidence in every investment.
              </Text>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Text
                fow={400}
                fof="p"
                className="text-white text-[14px] md:text-[16px] lg:text-[18px]"
              >
                Navigating real estate investment can be complex, but we make it
                effortless. Our platform connects you with high-yield
                opportunities, offering expert guidance, in-depth market
                insights, and data-driven analysis. With our tools, you can make
                informed decisions, reduce risks, and invest confidently.
              </Text>
            </motion.div>
          </YStack>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="w-[48%] max-sm:hidden"
          >
            <img
              src="/images/home-hero.png"
              alt="About"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </XStack>
      </section>
      <section>
        <motion.div initial="hidden" animate="visible" variants={videoVariants}>
          <img
            src="/images/Video.png"
            alt="About"
            className="object-cover w-full h-full max-sm:h-[242px]"
          />
        </motion.div>
      </section>
    </Layout>
  );
}
