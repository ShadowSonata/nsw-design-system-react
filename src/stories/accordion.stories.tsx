import React from "react";
import { Accordion as AccordionComponent, AccordionGroup } from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Content/Accordion",
  component: AccordionGroup,
  subcomponents: { AccordionComponent },
} as ComponentMeta<typeof AccordionComponent>;

// TODO: settle this
// @ts-ignore
const Template: ComponentStory<{ items: typeof AccordionComponent[] }> = (
  args
) => (
  <AccordionGroup>
    {
      // @ts-ignore
      args.items.map((item, index) => (
        <AccordionComponent key={index} body={item.body} header={item.header} />
      ))
    }
  </AccordionGroup>
);

const SingleTemplate: ComponentStory<typeof AccordionComponent> = (args) => (
  <AccordionGroup>
    <AccordionComponent {...args} />
  </AccordionGroup>
);

export const AccordionSingle = SingleTemplate.bind({});
export const AccordionMulti = Template.bind({});

AccordionMulti.args = {
  items: [
    {
      header: "This is an accordion",
      body: "This is the body of an accordion 1",
    },
    {
      header: "This is an accordion",
      body: "This is the body of an accordion 2",
    },
    {
      header: "This is an accordion",
      body: "This is the body of an accordion 3",
    },
  ],
};

AccordionSingle.args = {
  header: "This is a single accordion",
  body: "This is the body of a single accordion",
};
