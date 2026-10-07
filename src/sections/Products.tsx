import SectionTitle from "../components/SectionTitle";
import ProductsImg from "../assets/img/ProductsImg.jpg";

function Products({ className }: { className?: string }) {
  return (
    <section className={`mx-auto px-l lg:max-w-273.5 lg:pr-28 ${className}`}>
      <SectionTitle className="mb-l lg:mb-10">Todo lo que tu mascota necesita</SectionTitle>
      <p className="body-strong text-neutral-tertiary lg:max-w-218">
        Phasellus ultrices augue eget quam interdum porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer rutrum ultrices mi, vel dapibus odio congue
        eget. Aenean venenatis metus eu velit finibus vestibulum. Ut in dolor libero. Nulla et ex blandit, consequat erat vitae, pretium urna.
      </p>
      <img src={ProductsImg} alt="Products" className="w-screen object-cover object-center lg:ml-auto lg:w-218" />
      <SectionTitle className="ml-auto">¡y mucho más!</SectionTitle>
    </section>
  );
}
export default Products;
