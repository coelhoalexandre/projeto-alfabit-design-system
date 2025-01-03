import { Meta, StoryObj } from "@storybook/react";

import Avatar, { type AvatarProps } from ".";

const meta: Meta<AvatarProps> = {
  title: "Molecules/Avatar",
  component: Avatar,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    image: "https://placehold.co/400x400.png",
  },
};
