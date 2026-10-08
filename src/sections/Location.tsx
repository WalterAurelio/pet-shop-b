import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTitle";
import MapPin from "../assets/icon/MapPin.svg?react";
import Clock from "../assets/icon/Clock.svg?react";
import Phone from "../assets/icon/Phone.svg?react";

function Location({ className }: { className?: string }) {
  const locationRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".location-staggered", {
        opacity: 0,
        x: -8,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".location-staggered",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    },
    { scope: locationRef }
  );

  return (
    <section id="location-section" ref={locationRef} className={`mx-auto px-l lg:max-w-273.5 ${className}`}>
      <SectionTitle className="location-staggered mb-10">Encontranos en Hurlingham</SectionTitle>

      <div className="flex flex-col items-center gap-l lg:flex-row lg:gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3614664385905!2d-58.647234700000006!3d-34.5950201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbecac1806357%3A0xe6a5f3182da76109!2sPetShop%20Bustamante!5e0!3m2!1ses!2sar!4v1791380538460!5m2!1ses!2sar"
          className="location-staggered aspect-157/88 size-full rounded-border-l border border-neutral-inverse-primary shadow-[-2px_2px_4px_0_rgba(0,0,0,0.20)] lg:max-w-190"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div id="location-info" className="location-staggered flex flex-wrap gap-m lg:flex-col">
          <div className="flex items-center gap-s">
            <MapPin className="size-6 text-(--salvia-green)" />
            <p className="text-base font-semibold text-neutral-secondary">Bolivar 2587 — Hurlingham</p>
          </div>
          <div className="flex items-center gap-s">
            <Clock className="size-6 text-(--salvia-green)" />
            <p className="text-base font-semibold text-neutral-secondary">Lunes a Viernes — 10hs a 19hs</p>
          </div>
          <div className="flex items-center gap-s">
            <Phone className="size-6 text-(--salvia-green)" />
            <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-neutral-secondary hover:underline">
              Whatsapp 11 2345-6789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Location;
