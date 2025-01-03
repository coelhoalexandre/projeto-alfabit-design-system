import classNames from "classnames";
import AvatarImage from "./AvatarImage";
import AvatarIcon from "./AvatarIcon";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  descricao?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

export default function Avatar({
  size = "xs",
  image,
  descricao = "",
  className,
  ...props
}: AvatarProps) {
  const avatarSizeClass = avatarSizeMap[size];

  const avatarComponent = image ? (
    <AvatarImage src={image} altDescription={descricao} />
  ) : (
    <AvatarIcon />
  );

  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeClass,
        className
      )}
      {...props}
    >
      {avatarComponent}
    </div>
  );
}
