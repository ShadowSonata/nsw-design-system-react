import React from "react";
import { Button, FormGroupText } from "../..";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Forms and Transactions/Sign up form",
  component: FormGroupText,
} as ComponentMeta<typeof FormGroupText>;

const LoginTemplate: ComponentStory<typeof FormGroupText> = () => (
  <div className="nsw-section--box">
    <form className="nsw-form" onSubmit={() => console.log("submit")}>
      <FormGroupText htmlId="username" label="Username" />
      <FormGroupText htmlId="email" label="Email" />
      <FormGroupText
        helper="Must be at least 8 characters"
        htmlId="password"
        label="Password"
      />
      <Button type="submit">Sign Up</Button>
    </form>
  </div>
);

export const LoginForm = LoginTemplate.bind({});
