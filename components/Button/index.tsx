import { Variants } from "@/types/Variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  children: React.ReactNode;
}

const getVariant = (variant: Variants, isDisabled?: boolean) => {
  switch (variant) {
    case "primary":
      return isDisabled ? "bg-disabled text-disabled" : "bg-primary text-white";
    case "secondary":
      return isDisabled
        ? "bg-disabled text-disabled"
        : "bg-quaternary text-primary";
    case "tertiary":
    default:
      return isDisabled ? "text-disabled" : "text-primary";
  }
};

export default function Button({
  variant = "primary",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md py-2 px-6 ${getVariant(
        variant,
        disabled
      )} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
