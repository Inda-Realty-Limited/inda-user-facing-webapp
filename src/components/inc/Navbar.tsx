import Image from "next/image";
import { useRouter } from "next/router";
import { Text, XStack } from "../base";

interface NavbarProps {
  className?: string;
  showLogo?: boolean;
}

export const Navbar = ({ className = "", showLogo = false }: NavbarProps) => {
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Discover", href: "/discover" },
    { label: "Investment Calculator", href: "/investment-calculator" },
    { label: "Explore Properties", href: "/explore-properties" },
    { label: "Agents & Brokers", href: "/agents-brokers" },
    { label: "Sell Your Property", href: "/sell-property" },
  ];

  return (
    <nav
      className={`w-[83%] border border-[#FFFFFF33] rounded-[40px] mx-auto py-4 ${className}`}
    >
      <XStack className="justify-between px-[40px] w-full items-center">
        {showLogo && (
          <div className="mr-4">
            <Image src="/images/logo.png" alt="logo" width={50} height={17} />
          </div>
        )}
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Text
              key={item.href}
              fof="m"
              fos={20}
              fow={isActive ? 600 : 400}
              className={`cursor-pointer transition-colors ${
                isActive ? "text-white" : "text-[#FFFFFFB2] hover:text-gray-300"
              }`}
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </Text>
          );
        })}
      </XStack>
    </nav>
  );
};
