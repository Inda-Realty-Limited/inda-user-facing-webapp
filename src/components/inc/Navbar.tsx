import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Text, XStack } from "../base";

interface NavbarProps {
  showLogo?: boolean;
}

export const Navbar = ({ showLogo = false }: NavbarProps) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Investment Calculator", href: "/investment-calculator" },
    { label: "Explore Properties", href: "/explore-properties" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (showLogo) {
    return (
      <nav
        className="w-full h-[70px] md:h-[86px] px-[20px] md:px-[80px] flex items-center justify-between border-b border-[#322E52]  text-center text-white shadow"
        style={{
          background:
            "linear-gradient(109.87deg, rgba(45, 46, 48, 0.021) 5.73%, rgba(82, 73, 97, 0.016) 50.57%, rgba(121, 108, 138, 0.005) 100.09%)",
          backdropFilter: "blur(100px)",
          borderColor: "rgba(50, 46, 82, 0.25)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <XStack className="justify-between w-full items-center">
          <div className="mr-4">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={14}
              className="w-[50px] h-[17px]"
            />
          </div>
          <div className="md:hidden">
            <button
              className="text-white text-[24px] focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
          <div
            className={`gap-[12px] md:gap-[18px] md:flex ${
              menuOpen ? "flex flex-col" : "hidden"
            } absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#141414] md:bg-transparent z-50 md:z-auto`}
          >
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Text
                  key={item.href}
                  fof="s"
                  className={`text-[16px] font-${
                    isActive ? "bold" : "normal"
                  } cursor-pointer px-[8px] md:px-[12px] transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#FFFFFFB2] hover:text-gray-300"
                  }`}
                  onClick={() => {
                    router.push(item.href);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Text>
              );
            })}
          </div>
        </XStack>
      </nav>
    );
  }

  return (
    <nav className="w-full md:w-[800px] h-[50px] md:h-[59px] px-[20px] md:px-[40px] mt-[40px] md:mt-[80px] flex items-center justify-center rounded-[8px] md:rounded-[12px] border border-[#FFFFFF33] text-center text-white">
      <XStack className="gap-[16px] md:gap-[26px]">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Text
              key={item.href}
              fof="s"
              className={`text-[20px] max-sm:text-[10px] font-${
                isActive ? "semibold" : "normal"
              } cursor-pointer transition-colors ${
                isActive ? "text-white" : "text-[#FFFFFF99] hover:text-gray-400"
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
