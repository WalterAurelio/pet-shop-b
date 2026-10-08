import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ClientCard from "../components/ClientCard";
import SectionTitle from "../components/SectionTitle";
import { clients } from "../utils/clients";

function Clients({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const viewport = sectionRef.current?.querySelector<HTMLElement>(".clients-viewport");
      const track = sectionRef.current?.querySelector<HTMLElement>(".clients-track");

      if (!viewport || !track) {
        return;
      }

      gsap.to(track, {
        x: () => -(track.scrollWidth - viewport.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => `+=${track.scrollWidth - viewport.clientWidth}`,
          invalidateOnRefresh: true
        }
      });

      gsap.from([".clients-title", ".clients-viewport"], {
        opacity: 0,
        stagger: 0.2,
        x: -8,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".clients-title",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="clients-section" ref={sectionRef} className={`pl-l lg:mx-auto lg:max-w-273.75 ${className}`}>
      <SectionTitle className="clients-title mb-10">Nuestros Clientes</SectionTitle>
      <div className="clients-viewport">
        <div className="clients-track flex w-max gap-l">
          {clients.map((client, index) => (
            <ClientCard key={index} name={client.name} image={client.image} className={`w-50 shrink-0 lg:w-75 ${index % 2 == 1 ? "mt-10" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Clients;
