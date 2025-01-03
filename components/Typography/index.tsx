import { JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { TitleLevels } from "@/types/TitleLevels";

const textVariants = cva("text-gray-primary text-sm font-normal", {
  variants: {
    variant: {
      primary: "text-gray-primary",
      secondary: "text-gray-secondary",
      tertiary: "text-gray-tertiary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: "p" | TitleLevels;
} & JSX.IntrinsicElements["p"];

export default function Typography({
  children,
  element = "p",
  className,
  ...props
}: TypographyProps) {
  const Element = element;
  return (
    <Element className={`${textVariants(props)}${className}`} {...props}>
      {children}
    </Element>
  );
}
