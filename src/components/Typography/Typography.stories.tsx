import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "dark",
  github: { link: "https://github.com/" },
  linkedIn: { link: "https://www.linkedin.com/" },
  email: { link: "" },
};
