import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Breadcrumbs as BreadcrumbsComponent } from "..";

export default {
  title: "Content/Breadcrumb",
  component: BreadcrumbsComponent,
} as ComponentMeta<typeof BreadcrumbsComponent>;

const Template: ComponentStory<typeof BreadcrumbsComponent> = (args) => (
  <BreadcrumbsComponent {...args} />
);

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  items: [
    {
      link: "breadcrumb/one/",
      text: "Home",
    },
    {
      link: "breadcrumb/two/",
      text: "About DPC",
    },
    {
      link: "breadcrumb/three/",
      text: "NSW Digital Design System",
    },
  ],
};
