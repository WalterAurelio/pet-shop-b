import heroImage from "../assets/img/Rectangle.png";
import WhatsappLogo from "../assets/icon/WhatsappLogo.svg?react";
import Blob13 from "../assets/Blob13.svg?react";

function Hero() {
  return (
    <section className="relative flex h-143.5 flex-col gap-l bg-(--sand) pt-12 pl-l lg:pt-33 lg:pl-33">
      <Blob13 className="absolute -top-5 right-0 h-231.5 w-339.5 text-neutral-inverse-primary" />
      <h2 className="z-10 font-serif text-h1 leading-15.25 text-(--deep-green)">Pet Shop B.</h2>
      <p className="z-10 h6 text-neutral-primary lg:h5">
        El cuidado que tu mascota
        <br /> se merece
      </p>
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 mt-l flex w-fit cursor-pointer items-center justify-center gap-s bg-(--deep-green) px-2xl py-xl body-strong text-neutral-inverse-primary hover:bg-(--salvia-green)"
      >
        <WhatsappLogo className="size-6" />
        Consultar por WhatsApp
      </a>
      <img src={heroImage} alt="Hero" className="absolute top-52 -right-8 size-135 object-cover object-center lg:-top-33 lg:-right-61 lg:size-256" />
    </section>
  );
}
export default Hero;
