import type { ElementType } from "react";
import SprayBottle from "../assets/icon/SprayBottle.svg?react";

type ServiceCardProps = {
  icon?: ElementType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
  image?: string;
};

function ServiceCard({ icon: Icon = SprayBottle, title = "Baño", description, image }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-start gap-l self-stretch rounded-border-l border border-neutral-inverse-primary bg-neutral-primary p-2xl shadow-[-2px_2px_4px_0_rgba(0,0,0,0.20)] lg:flex-row lg:gap-13">
      {image ? (
        <img className="aspect-3/4 h-[418.667px] rounded-full object-cover object-center lg:order-1" src={image} alt="Service" />
      ) : (
        <div className="flex aspect-3/4 h-[418.667px] items-center justify-center rounded-full bg-neutral-disabled lg:order-1">No hay imagen</div>
      )}

      <div className="flex flex-col items-start gap-l self-stretch">
        <div className="flex items-center gap-s">
          <Icon className="size-6 text-(--salvia-green)" />
          <h4 className="h6 text-neutral-secondary">{title}</h4>
        </div>
        <p className="body-strong text-neutral-tertiary">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus nec orci auctor volutpat et a turpis. Curabitur quis velit nec enim volutpat bibendum a nec turpis. Cras in mollis mauris, consectetur porttitor felis."}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
