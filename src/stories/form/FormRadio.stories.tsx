import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormGroupRadio } from "../..";

export default {
  title: "Forms and Transactions/Radio",
  component: FormGroupRadio,
} as ComponentMeta<typeof FormGroupRadio>;

const Template: ComponentStory<typeof FormGroupRadio> = (args) => (
  <FormGroupRadio {...args} />
);

export const Group = Template.bind({});
Group.args = {
  label: "Select a thing",
  helper: "And only one thing",
  htmlId: "uniqueID",
  asGroup: true,
  options: [
    {
      value: "1",
      text: "Option 1",
    },
    {
      value: "2",
      text: "Option 2",
      checked: true,
    },
    {
      value: "3",
      text: "Option 3",
    },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  statusText: "Please select an option",
  status: "invalid",
  label: "Select a thing",
  helper: "And only one thing",
  htmlId: "uniqueID",
  asGroup: true,
  options: [
    {
      value: "1",
      text: "Option 1",
    },
    {
      value: "2",
      text: "Option 2",
      checked: true,
    },
    {
      value: "3",
      text: "Option 3",
    },
  ],
};
