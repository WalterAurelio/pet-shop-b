import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTitle";
import ProductsImg from "../assets/img/webp/ProductsImg.webp";

function Products({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".products-title", {
        opacity: 0,
        x: -8,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".products-title",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".products-staggered", {
        opacity: 0,
        x: -8,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".products-staggered",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="products-section" ref={sectionRef} className={`mx-auto px-l lg:max-w-273.5 lg:pr-28 ${className}`}>
      <SectionTitle className="products-title mb-l lg:mb-10">Todo lo que tu mascota necesita</SectionTitle>
      <p className="products-staggered body-strong text-neutral-tertiary lg:max-w-218">
        Encontrá todo lo que tu mascota necesita para acompañarla en cada etapa. Elegimos productos de calidad, accesorios y alimentos pensados para su bienestar y comodidad. Además, contamos
        con distintas opciones para que puedas encontrar lo que buscás en un solo lugar.
      </p>
      <img src={ProductsImg} alt="Products" className="products-staggered w-screen object-cover object-center lg:ml-auto lg:w-218" />
      <SectionTitle className="products-staggered ml-auto">¡y mucho más!</SectionTitle>
    </section>
  );
}
export default Products;
