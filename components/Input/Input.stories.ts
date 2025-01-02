import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from ".";

const meta: Meta<InputProps> = {
  title: "Molecules/Input",
  component: Input,
  argTypes: {
    value: {
      type: "string",
    },
    className: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    multiline: {
      type: "boolean",
    },
  },
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: "Input",
  },
};

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: "TextArea",
    multiline: true,
  },
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "TextArea",
    multiline: true,
    disabled: true,
  },
};

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
  },
};

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    disabled: true,
  },
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "TextArea",
    multiline: true,
  },
};

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "TextArea",
    multiline: true,
    disabled: true,
  },
};
