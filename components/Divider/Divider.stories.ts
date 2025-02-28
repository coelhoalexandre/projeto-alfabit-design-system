import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from ".";

const meta: Meta<DividerProps> = {
  title: "Design System/Atoms/Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<DividerProps> = {
  args: {},
};

export const Default: StoryObj<DividerProps> = {
  args: {},
};

export const DivisorWithProps: StoryObj<DividerProps> = {
  args: {
    children: "Olá mundo",
  },
};
