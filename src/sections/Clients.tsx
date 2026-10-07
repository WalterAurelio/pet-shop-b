import ClientCard from "../components/ClientCard";
import SectionTitle from "../components/SectionTitle";
import { clients } from "../utils/clients";

function Clients() {
  return (
    <div className="pl-l lg:mx-auto lg:max-w-273.75">
      <SectionTitle className="mb-10">Nuestros Clientes</SectionTitle>
      <div className="flex gap-l">
        {clients.map((client, index) => (
          <ClientCard key={index} name={client.name} image={client.image} className={index % 2 == 1 ? "mt-10" : ""} />
        ))}
      </div>
    </div>
  );
}
export default Clients;
