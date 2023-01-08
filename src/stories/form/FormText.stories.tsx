import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormGroupText } from "../..";

export default {
  title: "Forms and Transactions/Text Input",
  component: FormGroupText,
} as ComponentMeta<typeof FormGroupText>;

const Template: ComponentStory<typeof FormGroupText> = (args) => (
  <FormGroupText {...args} />
);

export const SingleLine = Template.bind({});
SingleLine.args = {
  label: "Your name",
  helper: "as it appears on your birth certificate",
  htmlId: "single-line-id",
};

export const MultipleLine = Template.bind({});
MultipleLine.args = {
  label: "Your name",
  helper: "as it appears on your birth certificate",
  htmlId: "multiple-line-id",
  as: "textarea",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: "Email",
  inputType: "email",
  htmlId: "email-input-id",
  status: "valid",
  statusText: "Valid email address",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password",
  inputType: "password",
  htmlId: "password-input-id",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Your name",
  helper: "as it appears on your birth certificate",
  statusText: "Please enter your name",
  htmlId: "error-id",
  status: "invalid",
};
