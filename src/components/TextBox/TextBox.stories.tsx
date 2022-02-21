import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextBox } from "./TextBox";

export default {
  title: "Components/TextBox",
  component: TextBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => (
  <TextBox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
