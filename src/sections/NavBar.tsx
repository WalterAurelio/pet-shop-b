import PetShopLogo from "../assets/icon/PetShopLogo.svg?react";
import List from "../assets/icon/List.svg?react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 flex h-13.75 items-center justify-between border-b border-neutral-inverse-primary bg-neutral-primary px-l">
      <ul className="flex items-center gap-xl body-strong text-(--salvia-green) max-lg:hidden">
        <li>
          <a className="hover:underline" href="#">
            Lorem
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Lorem
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Lorem
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Lorem
          </a>
        </li>
      </ul>

      <a className="lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-[-50%]" href="#home">
        <PetShopLogo className="h-8 rotate-45 text-(--salvia-green)" />
      </a>

      <a
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
