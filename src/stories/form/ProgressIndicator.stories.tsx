import React from "react";
import { ProgressIndicator as ProgressIndicatorComponent } from "../..";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Forms and Transactions/Progress Indicator",
  component: ProgressIndicatorComponent,
} as ComponentMeta<typeof ProgressIndicatorComponent>;

const Template: ComponentStory<typeof ProgressIndicatorComponent> = (args) => (
  <ProgressIndicatorComponent {...args} />
);

export const ProgressIndicator = Template.bind({});
ProgressIndicator.args = {
  step: 3,
  of: 5,
};
