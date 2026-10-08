import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTitle";
import WhatsAppLogo from "../assets/icon/WhatsAppLogo.svg?react";
import PawPrint_1 from "../assets/icon/PawPrint_1.svg?react";
import PawPrint_2 from "../assets/icon/PawPrint_2.svg?react";
import Blob8 from "../assets/Blob8.svg?react";

function CallToAction({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".call-to-action-staggered", {
        opacity: 0,
        scale: 1.12,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".call-to-action-staggered",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="call-to-action-section" ref={sectionRef} className={`relative mx-auto flex flex-col items-center gap-10 max-lg:px-l lg:w-fit ${className}`}>
      <Blob8 className="absolute -z-10 h-103 w-145.5 max-lg:top-12 lg:h-240.5 lg:w-339.5" />
      <div className="relative size-75">
        <PawPrint_1 className="call-to-action-staggered absolute bottom-0 left-0 size-48 -rotate-22" />
        <PawPrint_2 className="call-to-action-staggered absolute top-0 right-0 size-48 rotate-22" />
      </div>
      <SectionTitle className="call-to-action-staggered text-center leading-6.25 lg:leading-10">¿Qué esperás para reservar tu turno?</SectionTitle>
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="call-to-action-staggered flex w-full items-center justify-center gap-s rounded-full bg-(--deep-green) px-13 py-2xl text-base font-normal text-neutral-inverse-primary hover:bg-(--salvia-green) lg:max-w-93.5"
      >
        <WhatsAppLogo className="size-8" />
        Consultar por WhatsApp
      </a>
    </section>
  );
}
export default CallToAction;
