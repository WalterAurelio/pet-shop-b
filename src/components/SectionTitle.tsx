import type { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren) {
  return <h3 className="font-serif text-h5 text-(--deep-green) lg:text-h3">{children}</h3>;
}
export default SectionTitle;
