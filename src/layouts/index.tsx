import { Text, XStack } from "@/components/base";
import { Icon, Navbar } from "@/components/inc";
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
    <div className="relative flex flex-col py-6 min-h-screen">
      <Navbar className="mt-4" showLogo={true} />
      <main className="w-full px-[80px] py-[40px] flex flex-col   flex-grow mt-16">
        {children}
      </main>
      <footer
        className="w-full h-[88px] px-[140px] my-[28px] flex items-center justify-between border-t border-b border-[#322E52] text-center text-white shadow"
        style={{
          borderTopWidth: 0.25,
          borderBottomWidth: "0.25px",
          background:
            "linear-gradient(109.87deg, rgba(45, 46, 48, 0.021) 5.73%, rgba(82, 73, 97, 0.016) 50.57%, rgba(121, 108, 138, 0.005) 100.09%)",
          backdropFilter: "blur(100px)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <XStack gap="gap-[10px]" className="justify-center">
          <Text fow={400} fof="s" fos={16} className="text-[#FFFFFFBF]">
            © {getCurrentYear()} INDA, Inc. All rights reserved
          </Text>
          <Text fow={400} fof="s" fos={16} className="text-[#FFFFFFBF]">
            |
          </Text>
          <Text fow={400} fof="s" fos={16} className="text-[#FFFFFFBF]">
            Terms of Service
          </Text>
          <Text fow={400} fof="s" fos={16} className="text-[#FFFFFFBF]">
            |
          </Text>
          <Text fow={400} fof="s" fos={16} className="text-[#FFFFFFBF]">
            Privacy Policy
          </Text>
        </XStack>
        <XStack gap="gap-[20px]" className="justify-center">
          {socialIcons.map((icon) => (
            <Icon key={icon} name={icon} />
          ))}
        </XStack>
      </footer>
    </div>
  );
};
