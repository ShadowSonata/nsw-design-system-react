import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InPageNavigation } from "..";

export default {
  title: "Navigation/Inpage Nav Links",
  component: InPageNavigation,
} as ComponentMeta<typeof InPageNavigation>;

const Template: ComponentStory<typeof InPageNavigation> = (args) => (
  <InPageNavigation {...args} />
);

export const InPageNavLinks = Template.bind({});
InPageNavLinks.args = {
  title: "On this page",
  links: [
    {
      url: "#",
      title: "First home buyer grant and assistance",
    },
    {
      url: "/",
      title: "Buying and selling property",
    },
    {
      url: "/",
      title: "Building or renovating a home",
    },
    {
      url: "/",
      title:
        "Aged care housing, home living assistance and retirement villages",
    },
  ],
};
