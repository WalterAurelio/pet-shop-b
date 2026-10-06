import type { Meta, StoryObj } from "@storybook/react-vite";
import ServiceCard from "../components/ServiceCard";
import pimg from "../assets/img/Image_vgs1srvgs1srvgs1.jpg";
import SprayBottle from "../assets/icon/SprayBottle.svg?react";
import HairDryer from "../assets/icon/HairDryer.svg?react";
import PawPrint from "../assets/icon/PawPrint.svg?react";
import Scissors from "../assets/icon/Scissors.svg?react";

const meta = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  argTypes: {
    icon: {
      control: "select",
      options: ["SprayBottle", "HairDryer", "PawPrint", "Scissors"],
      mapping: {
        SprayBottle: SprayBottle,
        HairDryer: HairDryer,
        PawPrint: PawPrint,
        Scissors: Scissors
      }
    },
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    image: {
      control: false
    }
  }
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoImage: Story = {};

export const WithImage: Story = {
  args: {
    image: pimg,
    title: "Corte de pelo",
    description:
      "Nuestro servicio de corte de pelo para mascotas incluye un baño completo, corte de pelo y peinado según la raza y preferencias del dueño. Utilizamos productos de alta calidad y técnicas profesionales para garantizar que tu mascota luzca y se sienta increíble."
  }
};
