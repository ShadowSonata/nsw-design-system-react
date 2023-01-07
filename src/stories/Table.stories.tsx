import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table, TableResponsiveWrapper } from "..";

export default {
  title: "Content/Tables",
  component: Table,
} as ComponentMeta<typeof Table>;
const simpleHeaders = [
  { title: "First Name", key: "fname", width: 33 },
  { title: "Last Name", key: "lname", width: 33 },
  { title: "Email", key: "email", width: 33 },
];

const simpleData = [
  { fname: "Coco", lname: "Clarke", email: "coco.clarke@email.com" },
  { fname: "Bonnie", lname: "Delacruz", email: "bonnie.delacruz@email.com" },
  { fname: "Matthew", lname: "Lamb", email: "matthew.lamb@email.com" },
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const ResponsiveTemplate: ComponentStory<typeof Table> = (args) => (
  <TableResponsiveWrapper>
    <Table {...args} />
  </TableResponsiveWrapper>
);

export const Default = Template.bind({});
Default.args = {
  caption: "User record",
  headers: simpleHeaders,
  data: simpleData,
};

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {
  caption: "User record",
  headers: simpleHeaders,
  data: simpleData,
};

export const Bordered = Template.bind({});
Bordered.args = {
  caption: "User record",
  headers: simpleHeaders,
  bordered: true,
  data: simpleData,
};

export const Striped = Template.bind({});
Striped.args = {
  caption: "Population of Australian states and territories, December 2015",
  headers: simpleHeaders,
  striped: true,
  data: simpleData,
};

export const CaptionTop = Template.bind({});
CaptionTop.args = {
  caption: "Population of Australian states and territories, December 2015",
  headers: simpleHeaders,
  captionTop: true,
  data: simpleData,
};
