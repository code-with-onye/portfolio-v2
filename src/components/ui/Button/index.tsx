import clsx from "clsx";
import Link from "next/link";

type buttonProps = {
  href: string;
  children: React.ReactNode;
  variant: "fill" | "outline";
  size: "sm" | "lg";
};

const Button = ({ href, children, variant, size }: buttonProps) => {
  return (
    <button
      className={clsx([
        variant === "fill" &&
          "bg-secondary text-primary border-2 border-secondary",
        variant === "outline" && "  border-2  border-secondary",
        size === "sm" && " px-4 py-2",
        size === "lg" && "lg:px-16 lg:py-4 px-6 py-3",
        "rounded uppercase text-x s tracking-wider font-semibold",
      ])}
    >
      {children}
      <Link href={href}></Link>
    </button>
  );
};

export default Button;
