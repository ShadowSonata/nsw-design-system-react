import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header, SkipTo, Masthead } from "..";

// importing assets causing typescript complaint - solution
//https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
const scLogo = require("./assets/seniorscardlogo.png");

export default {
  title: "Global/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          "Displays across the top of all NSW Government sites. For mobile menu to work, add the main navigation component",
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <>
    <SkipTo nav="#nav" content="#content" />
    <Masthead />
    <Header {...args} />
  </>
);

export const Search = Template.bind({});
Search.args = {
  headerUrl: "#",
  siteTitle: "digital.nsw",
  siteDescriptor: "Department of Customer Service",
  search: true,
  mobile: true,
  onSubmit: (event) => {
    event.preventDefault();
  },
};

export const Simple = Template.bind({});
Simple.args = {
  logo: scLogo,
  headerUrl: "#",
  siteTitle: "Seniors Card NSW",
  mobile: false,
  search: false,
};
