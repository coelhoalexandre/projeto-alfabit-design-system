import React from "react";
import { TitleLevels } from "@/types/TitleLevels";
import Box from "../Box";
import Typography from "../Typography";

export type TextBlockProps = {
  title: string;
  titleLevel: TitleLevels;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function TextBlock({
  title,
  titleLevel = "h3",
  type = "dark",
  children,
  className,
  ...rest
}: TextBlockProps) {
  const textClass = type === "primary" ? "text-white" : "text-gray-primary";
  return (
    <Box className={`flex flex-col gap-2 p-5  `} type={type} rounded {...rest}>
      <div className={className}>
        <Typography
          className={`font-bold ${textClass}`}
          size="xl"
          element={titleLevel}
        >
          {title}
        </Typography>
        <Typography className={textClass}>{children}</Typography>
      </div>
    </Box>
  );
}
