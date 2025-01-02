export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Link({
  children,
  href,
  disabled,
  className,
  ...props
}: LinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </a>
  );
}
