import SectionTitle from "../components/SectionTitle";
import ProductsImg from "../assets/img/ProductsImg.jpg";

function Products() {
  return (
    <section className="lg:max-w-245.75">
      <SectionTitle className="mb-l lg:mb-10">Todo lo que tu mascota necesita</SectionTitle>
      <p className="body-strong text-neutral-tertiary">
        Phasellus ultrices augue eget quam interdum porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer rutrum ultrices mi, vel dapibus odio congue
        eget. Aenean venenatis metus eu velit finibus vestibulum. Ut in dolor libero. Nulla et ex blandit, consequat erat vitae, pretium urna.
      </p>
      <img src={ProductsImg} alt="Products" className="w-screen object-cover object-center lg:ml-auto lg:w-218" />
      <SectionTitle className="ml-auto">¡y mucho más!</SectionTitle>
    </section>
  );
}
export default Products;
