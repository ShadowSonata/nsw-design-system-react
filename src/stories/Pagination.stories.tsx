import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Pagination as PaginationComponent,
  PaginationEllipsis,
  PaginationItem,
} from "..";

export default {
  title: "Navigation/Pagination",
  component: PaginationComponent,
  subcomponents: { PaginationEllipsis, PaginationItem },
} as ComponentMeta<typeof PaginationComponent>;

const Template: ComponentStory<typeof PaginationComponent> = (args) => (
  <PaginationComponent {...args} />
);
const TrimmedTemplate: ComponentStory<typeof PaginationComponent> = (args) => (
  <PaginationComponent {...args}>
    <PaginationItem page={1} url="#page1" />
    <PaginationItem page={2} url="#page2" />
    <PaginationItem page={3} url="#page3" />
    <PaginationEllipsis />
    <PaginationItem page={10} url="#page10" />
    <PaginationItem page={11} url="#page11" />
  </PaginationComponent>
);
export const Pagination = Template.bind({});
Pagination.args = {
  paginationItems: [
    {
      url: "#page1",
    },
    {
      url: "#page2",
    },
    {
      url: "#page3",
    },
    {
      url: "#page4",
    },
  ],
  active: 3,
};

export const Trimmed = TrimmedTemplate.bind({});
