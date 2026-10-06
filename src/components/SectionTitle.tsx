import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren & {
  className?: string;
};

function SectionTitle({ children, className }: SectionTitleProps) {
  return <h3 className={`w-fit font-serif text-h5 text-(--deep-green) lg:text-h3 ${className || ""}`}>{children}</h3>;
}
export default SectionTitle;
