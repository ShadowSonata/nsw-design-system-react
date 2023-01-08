import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormGroupSelect } from "../..";

export default {
  title: "Forms and Transactions/Dropdown (select)",
  component: FormGroupSelect,
} as ComponentMeta<typeof FormGroupSelect>;

const Template: ComponentStory<typeof FormGroupSelect> = (args) => (
  <FormGroupSelect {...args} />
);

export const AsFormItem = Template.bind({});
AsFormItem.args = {
  label: "Select a thing",
  helper: "Select from the list",
  selected: "1",
  options: [
    {
      value: "",
      text: "Please select",
    },
    {
      value: "1",
      text: "Option 1",
      checked: true,
    },
    {
      value: "2",
      text: "Option 2",
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
  helper: "Select from the list",
  selected: "",
  options: [
    {
      value: "",
      text: "Please select",
    },
    {
      value: "1",
      text: "Option 1",
    },
    {
      value: "2",
      text: "Option 2",
    },
    {
      value: "3",
      text: "Option 3",
    },
  ],
};
