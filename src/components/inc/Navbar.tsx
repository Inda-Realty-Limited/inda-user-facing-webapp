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
    { label: "Investment Calculator", href: "/investment-calculator" },
    { label: "Explore Properties", href: "/explore-properties" },
    { label: "Agents & Brokers", href: "/agents-brokers" },
  ];

  return (
    <nav
      className="w-full h-[86px] px-[80px] flex items-center justify-between border-b border-[#322E52] text-center text-white shadow"
      style={{
        borderBottomWidth: "0.25px",
        background:
          "linear-gradient(109.87deg, rgba(45, 46, 48, 0.021) 5.73%, rgba(82, 73, 97, 0.016) 50.57%, rgba(121, 108, 138, 0.005) 100.09%)",
        backdropFilter: "blur(100px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <XStack className="justify-between px-[40px] w-full items-center">
        {showLogo && (
          <div className="mr-4">
            <Image src="/images/logo.png" alt="logo" width={50} height={17} />
          </div>
        )}
        <XStack className="gap-[18px]">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Text
                key={item.href}
                fof="s"
                fos={16}
                fow={isActive ? 700 : 400}
                className={`cursor-pointer px-[12px]  transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#FFFFFFB2] hover:text-gray-300"
                }`}
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </Text>
            );
          })}
        </XStack>
      </XStack>
    </nav>
  );
};
