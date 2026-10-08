import gsap from "gsap";
import PetShopLogo from "../assets/icon/PetShopLogo.svg?react";
import X from "../assets/icon/X.svg?react";
import { useGSAP } from "@gsap/react";

function HamburgerMenu({ className, handleClick }: { className?: string; handleClick?: () => void }) {
  const { contextSafe } = useGSAP();

  const handleLinkClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // setIsOpen(false);
    gsap.to(window, {
      duration: 0.56,
      scrollTo: id
    });
  };

  return (
    <div className={`flex h-screen w-full flex-col bg-neutral-primary p-l ${className}`}>
      <PetShopLogo className="absolute top-2.75 h-8 w-auto rotate-45 text-(--salvia-green)" />
      <button className="absolute top-2.75 right-4 cursor-pointer" onClick={handleClick}>
        <X className="size-8 text-(--salvia-green)" />
      </button>

      <div className="my-auto flex flex-col items-center gap-13 px-l">
        <div className="flex items-center justify-center gap-m text-(--deep-green)">
          <PetShopLogo className="h-8 w-auto rotate-45" />
          <p className="font-serif text-h4 text-(--deep-green)">Pet Shop B.</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-xl h6 text-(--salvia-green)">
          <a href="#services-section" onClick={contextSafe(handleLinkClick("#services-section"))}>
            Servicios
          </a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#products-section" onClick={contextSafe(handleLinkClick("#products-section"))}>
            Productos
          </a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#clients-section" onClick={contextSafe(handleLinkClick("#clients-section"))}>
            Clientes
          </a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#location-section" onClick={contextSafe(handleLinkClick("#location-section"))}>
            Ubicación
          </a>
        </div>

        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center justify-center self-stretch rounded-full bg-(--deep-green) p-xl h6 text-neutral-inverse-primary"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
export default HamburgerMenu;
