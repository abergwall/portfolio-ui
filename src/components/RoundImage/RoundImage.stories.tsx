import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RoundImage } from "./RoundImage";

export default {
  title: "Components/RoundImage",
  component: RoundImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RoundImage>;

const Template: ComponentStory<typeof RoundImage> = (args) => (
  <RoundImage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
