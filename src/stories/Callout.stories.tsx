import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Callout as CalloutComponent } from "..";

export default {
  title: "Content/Callout",
  component: CalloutComponent,
} as ComponentMeta<typeof CalloutComponent>;

const Template: ComponentStory<typeof CalloutComponent> = (args) => (
  <CalloutComponent {...args} />
);

export const Callout = Template.bind({});
Callout.args = {
  title: "Title",
  children: <p>This is a callout</p>,
};
