import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageWrapper } from "./PageWrapper";

export default {
  title: "Components/PageWrapper",
  component: PageWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PageWrapper>;

const Template: ComponentStory<typeof PageWrapper> = (args) => (
  <PageWrapper {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
