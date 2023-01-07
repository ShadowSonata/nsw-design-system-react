import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GlobalAlert } from "..";

export default {
  title: "Content/GlobalAlert",
  component: GlobalAlert,
} as ComponentMeta<typeof GlobalAlert>;

const Template: ComponentStory<typeof GlobalAlert> = (args) => (
  <GlobalAlert {...args} />
);

export const Info = Template.bind({});
Info.args = {
  title: "Title",
  content: "This is a message",
  ctaText: "Click me",
};

export const Critical = Template.bind({});
Critical.args = {
  title: "Title",
  content: "This is a message",
  ctaText: "Click me",
  as: "critical",
};

export const Light = Template.bind({});
Light.args = {
  title: "Title",
  content: "This is a message",
  ctaText: "Click me",
  as: "light",
};
