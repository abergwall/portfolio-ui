import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SocialRow } from "./SocialRow";

export default {
  title: "Components/SocialRow",
  component: SocialRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SocialRow>;

const Template: ComponentStory<typeof SocialRow> = (args) => (
  <SocialRow {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "dark",
  github: { link: "https://github.com/" },
  linkedIn: { link: "https://www.linkedin.com/" },
  email: { link: "" },
};
