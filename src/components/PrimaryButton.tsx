import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { LucideProps } from "lucide-react";

type PrimaryButtonProps = {
  link: string;
  label: string;
  icon?: React.ComponentType<LucideProps>;
};

export function PrimaryButton({ link, label, icon: IconComponent }: PrimaryButtonProps) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="text-md font-semibold dark:bg-black bg-white text-black dark:text-white flex items-center gap-2"
    >
      {IconComponent && <IconComponent/>}
      <a href={link}>{label}</a>
    </HoverBorderGradient>
  );
}