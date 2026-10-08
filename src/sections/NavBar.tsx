import PetShopLogo from "../assets/icon/PetShopLogo.svg?react";
import List from "../assets/icon/List.svg?react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.from(["#nav-menu", "#nav-logo", "#nav-contact-link"], {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    });
  });

  const handleLinkClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    gsap.to(window, {
      duration: 0.56,
      scrollTo: id
    });
  };

  return (
    <nav className="relative z-10 flex h-13.75 items-center justify-between border-b border-neutral-inverse-primary bg-neutral-primary px-l">
      <ul id="nav-menu" className="flex items-center gap-xl body-strong text-(--salvia-green) max-lg:hidden">
        <li>
          <a className="hover:underline" href="#services-section" onClick={contextSafe(handleLinkClick("#services-section"))}>
            Servicios
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#products-section" onClick={contextSafe(handleLinkClick("#products-section"))}>
            Productos
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#clients-section" onClick={contextSafe(handleLinkClick("#clients-section"))}>
            Clientes
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#location-section" onClick={contextSafe(handleLinkClick("#location-section"))}>
            Ubicación
          </a>
        </li>
      </ul>

      <a id="nav-logo" className="lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-[-50%]" href="#home">
        <PetShopLogo className="h-8 rotate-45 text-(--salvia-green)" />
      </a>

      <a
        id="nav-contact-link"
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-(--deep-green) px-xl py-m body-strong text-neutral-inverse-primary hover:bg-(--salvia-green) max-lg:hidden"
      >
        Contactar
      </a>

      <button className="cursor-pointer lg:hidden" onClick={() => setIsOpen(true)}>
        <List className="size-8 text-(--deep-green)" />
      </button>

      <HamburgerMenu className={`absolute top-0 transition-all duration-500 lg:hidden ${isOpen ? "right-0" : "-right-full"}`} handleClick={() => setIsOpen(false)} />
    </nav>
  );
}
export default NavBar;
