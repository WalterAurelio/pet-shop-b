import WhatsappLogo from "../assets/icon/WhatsappLogo.svg?react";
import InstagramLogo from "../assets/icon/InstagramLogo.svg?react";

function Footer() {
  return (
    <footer className="bg-(--deep-green) px-l pt-l caption-strong text-neutral-inverse-primary lg:body-strong">
      <div className="mb-22.75 flex justify-between lg:mb-44.5">
        <div className="flex flex-col">
          <p>Bolivar 2587 — Hurlingham</p>
          <p>Lunes a Viernes — 10hs a 19hs</p>
        </div>

        <div className="flex h-fit gap-s lg:gap-l">
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:underline">
            <WhatsappLogo className="size-4.5" />
            WhatsApp
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:underline">
            <InstagramLogo className="size-4.5" />
            Instagram
          </a>
        </div>
      </div>

      {/* <p className="font-serif text-[69.911px] leading-12.25 font-normal text-(--sand) mix-blend-soft-light">Pet Shop B.</p> */}
      <div className="-ml-l flex w-screen items-center justify-center border-t border-(--salvia-green) py-l">
        <p>©2026 — Pet Shop Bustamante</p>
      </div>
    </footer>
  );
}
export default Footer;
