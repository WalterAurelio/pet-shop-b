import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/services";

function Services({ className }: { className?: string }) {
  return (
    <section className={`mx-auto flex flex-col gap-10 max-lg:px-l lg:max-w-273.5 lg:px-l ${className}`}>
      <SectionTitle className="z-10">Nuestros servicios</SectionTitle>
      <div className="z-10 flex flex-col gap-xl lg:grid lg:grid-cols-2 lg:gap-x-s lg:gap-y-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} icon={service.icon} />
        ))}
      </div>
    </section>
  );
}
export default Services;
