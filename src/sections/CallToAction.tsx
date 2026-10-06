import SectionTitle from "../components/SectionTitle";
import WhatsAppLogo from "../assets/icon/WhatsAppLogo.svg?react";
import PawPrint_1 from "../assets/icon/PawPrint_1.svg?react";
import PawPrint_2 from "../assets/icon/PawPrint_2.svg?react";

function CallToAction() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="relative size-75">
        <PawPrint_1 className="absolute bottom-0 left-0 size-48 -rotate-22" />
        <PawPrint_2 className="absolute top-0 right-0 size-48 rotate-22" />
      </div>
      <SectionTitle className="text-center leading-6.25 lg:leading-10">¿Qué esperás para reservar tu turno?</SectionTitle>
      <button className="flex max-w-93.5 items-center justify-center gap-s rounded-full bg-(--deep-green) px-13 py-2xl text-base font-medium text-neutral-inverse-primary">
        <WhatsAppLogo className="size-8" />
        Consultar por WhatsApp
      </button>
    </section>
  );
}
export default CallToAction;
