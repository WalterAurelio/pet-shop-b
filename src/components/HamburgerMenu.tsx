import PetShopLogo from "../assets/icon/PetShopLogo.svg?react";
import X from "../assets/icon/X.svg?react";

function HamburgerMenu({ className, handleClick }: { className?: string; handleClick?: () => void }) {
  return (
    <div className={`flex h-screen w-screen flex-col bg-neutral-primary p-l ${className}`}>
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
          <a href="#">Lorem</a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#">Lorem</a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#">Lorem</a>
          <div className="h-px w-full bg-neutral-tertiary"></div>
          <a href="#">Lorem</a>
        </div>

        <button className="flex cursor-pointer items-center justify-center self-stretch rounded-full bg-(--deep-green) p-xl h6 text-neutral-inverse-primary">Contactar</button>
      </div>
    </div>
  );
}
export default HamburgerMenu;
