import type { Meta, StoryObj } from "@storybook/react-vite";
import ClientCard from "../components/ClientCard";
import pimg from "../assets/img/Image_5xwnso5xwnso5xwn.jpg";

const meta = {
  title: "Components/ClientCard",
  component: ClientCard,
  argTypes: {
    image: {
      control: false
    },
    name: {
      control: "text"
    }
  }
} satisfies Meta<typeof ClientCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoImage: Story = {
  args: {
    name: "Simón"
  }
};

export const WithImage: Story = {
  args: {
    image: pimg,
    name: "Simón"
  }
};
