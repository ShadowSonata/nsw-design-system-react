import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Section } from "..";

export default {
  title: "Content/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const White = Template.bind({});
White.args = {
  children: <p>Content of section</p>,
};

export const Dark = Template.bind({});
Dark.args = {
  style: "brand-dark",
  children: <p>Content of section</p>,
};

export const InlineBox = Template.bind({});
InlineBox.args = {
  style: "grey-01",
  box: true,
  children: <p>Content of section</p>,
};
