import { Text, XStack } from "@/components/base";
import { Icon, Navbar } from "@/components/inc";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const socialIcons: Array<
  "tiktok" | "youtube" | "twitter" | "instagram" | "linkedin"
> = ["tiktok", "youtube", "twitter", "instagram", "linkedin"];

export const Layout = ({ children }: LayoutProps) => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar showLogo={true} />

      <main className="w-full px-[20px] md:px-[40px] lg:px-[80px] py-[20px] md:py-[30px] max-sm:py-[10px] lg:py-[40px] flex flex-col flex-grow mt-16">
        {children}
      </main>

      <motion.footer
        initial={false}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(45,46,48,0.021), rgba(82,73,97,0.016), rgba(121,108,138,0.005))",
          backgroundSize: "400% 400%",
          borderColor: "rgba(50, 46, 82, 0.25)",
        }}
        className="w-full max-sm:border-0 h-auto md:h-[88px] px-[20px] md:px-[80px] lg:px-[140px] my-[20px] md:my-[28px] flex flex-col md:flex-row items-center justify-between border-t border-b border-[#322E52] text-center text-white shadow lg:backdrop-blur-[100px] lg:shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
      >
        <XStack
          gap="gap-[10px]"
          className="justify-center flex-wrap md:flex-nowrap mb-[10px] md:mb-0"
        >
          <Text
            fow={400}
            fof="s"
            className="text-[#FFFFFFBF] text-[16px] max-sm:text-[14px]"
          >
            © {getCurrentYear()} INDA, Inc. All rights reserved
          </Text>
          <Text
            fow={400}
            fof="s"
            className="text-[#FFFFFFBF] text-[16px] max-sm:text-[14px]"
          >
            |
          </Text>
          <Text
            fow={400}
            fof="s"
            className="text-[#FFFFFFBF] text-[16px] max-sm:text-[14px]"
          >
            Terms of Service
          </Text>
          <Text
            fow={400}
            fof="s"
            className="text-[#FFFFFFBF] text-[16px] max-sm:text-[14px]"
          >
            |
          </Text>
          <Text
            fow={400}
            fof="s"
            className="text-[#FFFFFFBF] text-[16px] max-sm:text-[14px]"
          >
            Privacy Policy
          </Text>
        </XStack>

        <XStack
          gap="gap-[10px] md:gap-[20px]"
          className="justify-center flex-wrap"
        >
          {socialIcons.map((icon) => (
            <motion.div
              key={icon}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: socialIcons.indexOf(icon) * 0.2,
              }}
            >
              <Icon name={icon} />
            </motion.div>
          ))}
        </XStack>
      </motion.footer>
    </div>
  );
};
