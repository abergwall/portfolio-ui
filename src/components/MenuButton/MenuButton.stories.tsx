import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuButton } from "./MenuButton";

export default {
  title: "Components/MenuButton",
  component: MenuButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
