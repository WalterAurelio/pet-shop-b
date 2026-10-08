import heroImage from "../assets/img/webp/Rectangle.webp";
import WhatsappLogo from "../assets/icon/WhatsappLogo.svg?react";
import Blob13 from "../assets/Blob13.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.from(["#hero-image", "#hero-title", "#hero-description", "#hero-whatsapp-link"], {
      stagger: 0.2,
      opacity: 0,
      x: 20,
      duration: 1,
      ease: "power2.out"
    });
  });

  return (
    <section className="relative flex h-143.5 flex-col gap-l bg-(--sand) pt-12 pl-l lg:pt-33 lg:pl-33">
      <Blob13 className="absolute -top-5 right-0 h-231.5 w-339.5 text-neutral-inverse-primary" />
      <h2 id="hero-title" className="font-serif text-h1 leading-15.25 text-(--deep-green)">
        Pet Shop B.
      </h2>
      <p id="hero-description" className="h6 text-neutral-primary lg:h5">
        El cuidado que tu mascota
        <br /> se merece
      </p>
      <a
        id="hero-whatsapp-link"
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-l flex w-fit cursor-pointer items-center justify-center gap-s bg-(--deep-green) px-2xl py-xl body-strong text-neutral-inverse-primary hover:bg-(--salvia-green)"
      >
        <WhatsappLogo className="size-6" />
        Consultar por WhatsApp
      </a>
      <img id="hero-image" src={heroImage} alt="Hero" className="absolute top-52 -right-8 size-135 object-cover object-center lg:-top-33 lg:-right-61 lg:size-256" />
    </section>
  );
}
export default Hero;
