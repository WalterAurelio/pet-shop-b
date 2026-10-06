import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section className="flex flex-col gap-10 lg:max-w-273.5">
      <SectionTitle>Nuestros servicios</SectionTitle>
      <div className="flex flex-col gap-xl lg:grid lg:grid-cols-2 lg:gap-x-s lg:gap-y-xl">
        {[...Array(4)].map((_, index) => (
          <ServiceCard key={index} />
        ))}
      </div>
    </section>
  );
}
export default Services;
