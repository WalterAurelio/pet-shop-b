import ClientCard from "../components/ClientCard";
import SectionTitle from "../components/SectionTitle";

function Clients() {
  return (
    <div>
      <SectionTitle className="mb-10">Nuestros Clientes</SectionTitle>
      <div className="flex gap-l">
        {[...Array(4)].map((_, index) => (
          <ClientCard key={index} className={index % 2 == 1 ? "mt-10" : ""} />
        ))}
      </div>
    </div>
  );
}
export default Clients;
