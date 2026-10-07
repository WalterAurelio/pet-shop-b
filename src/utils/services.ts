import HairDryer from "../assets/icon/HairDryer.svg?react";
import PawPrint from "../assets/icon/PawPrint.svg?react";
import Scissors from "../assets/icon/Scissors.svg?react";
import SprayBottle from "../assets/icon/SprayBottle.svg?react";
import ServicioBaño from "../assets/img/ServicioBaño.jpg";
import ServicioCorte from "../assets/img/ServicioCorte.jpg";
import ServicioSecado from "../assets/img/ServicioSecado.jpg";
import ServicioUñas from "../assets/img/ServicioUñas.jpg";

export const services = [
  {
    title: "Baño",
    description: "Baño completo para limpiar, cuidar y mantener el pelaje de tu mascota saludable, suave y con una agradable sensación de frescura.",
    icon: SprayBottle,
    image: ServicioBaño
  },
  {
    title: "Corte de pelo",
    description: "Corte de pelo adaptado a cada mascota para mantener su pelaje cuidado, cómodo y con el estilo que mejor se adapte a sus necesidades.",
    icon: Scissors,
    image: ServicioCorte
  },
  {
    title: "Secado",
    description: "Secado cuidadoso y completo para eliminar la humedad del pelaje y dejar a tu mascota cómoda, limpia y lista para seguir disfrutando.",
    icon: HairDryer,
    image: ServicioSecado
  },
  {
    title: "Corte de uñas",
    description: "Corte de uñas realizado con cuidado para mantener las patas de tu mascota saludables, cómodas y evitar molestias durante el día.",
    icon: PawPrint,
    image: ServicioUñas
  }
];
