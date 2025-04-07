import { Text, XStack } from "@/components/base";
import { Icon } from "@/components/inc";
import { useRouter } from "next/router";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const router = useRouter();
  return (
    <XStack gap="gap-[10px]" className="items-center">
      <Text
        underlined
        fow={400}
        fof="l"
        className="text-white cursor-pointer text-[16px] max-sm:text-[14px]"
        onClick={() => router.push("/")}
      >
        Home
      </Text>
      {items.map((item, index) => (
        <XStack key={index} className="items-center gap-[10px]">
          <Icon name="arrow_right" />
          {item.href ? (
            <Text
              underlined
              fow={400}
              fof="l"
              className="text-white cursor-pointer text-[16px] max-sm:text-[14px]"
              onClick={() => item.href && router.push(item.href)}
            >
              {item.label}
            </Text>
          ) : (
            <Text
              fow={400}
              fof="l"
              className="text-white text-[16px] max-sm:text-[14px]"
            >
              {item.label}
            </Text>
          )}
        </XStack>
      ))}
    </XStack>
  );
};
