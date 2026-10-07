import type { Meta, StoryObj } from "@storybook/react-vite";
import HamburgerMenu from "../components/HamburgerMenu";

const meta = {
  title: "Components/HamburgerMenu",
  component: HamburgerMenu
} satisfies Meta<typeof HamburgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
