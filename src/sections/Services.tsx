import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/services";

function Services({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-title", {
        opacity: 0,
        x: -8,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-title",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 8,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-cards",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="services-section" ref={sectionRef} className={`mx-auto flex flex-col gap-10 max-lg:px-l lg:max-w-273.5 lg:px-l ${className}`}>
      <SectionTitle className="service-title z-10">Nuestros servicios</SectionTitle>
      <div className="service-cards z-10 flex flex-col gap-xl lg:grid lg:grid-cols-2 lg:gap-x-s lg:gap-y-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} icon={service.icon} className="service-card" />
        ))}
      </div>
    </section>
  );
}
export default Services;
