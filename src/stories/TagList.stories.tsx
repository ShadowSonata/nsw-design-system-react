import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TagList } from "..";

export default {
  title: "Content/Tags",
  component: TagList,
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);
export const Tags = Template.bind({});
Tags.args = {
  tags: [
    {
      text: "Digital",
    },
    {
      text: "Design System",
    },
    {
      text: "Transformation",
    },
  ],
};
