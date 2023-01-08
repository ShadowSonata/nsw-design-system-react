import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormGroupCheckbox } from "../..";

export default {
  title: "Forms and Transactions/Checkboxes",
  component: FormGroupCheckbox,
} as ComponentMeta<typeof FormGroupCheckbox>;

const Template: ComponentStory<typeof FormGroupCheckbox> = (args) => (
  <FormGroupCheckbox {...args} />
);

export const Group = Template.bind({});
Group.args = {
  label: "Select a thing",
  helper: "Or more than one thing",
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

export const Single = Template.bind({});
Single.args = {
  label: "Select a thing",
  htmlId: "uniqueID-2",
  options: [
    {
      value: "1",
      text: "Option 1",
    },
  ],
};

export const GroupError = Template.bind({});
GroupError.args = {
  statusText: "Please select at least one option",
  status: "invalid",
  label: "Select a thing",
  helper: "Or more than one thing",
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

export const SingleSuccess = Template.bind({});
SingleSuccess.args = {
  statusText: "Terms & conditions accepted",
  status: "valid",
  label: "Legal stuff",
  htmlId: "uniqueID-2",
  options: [
    {
      value: "1",
      text: "Accept the terms of this checkbox",
      checked: true,
    },
  ],
};
