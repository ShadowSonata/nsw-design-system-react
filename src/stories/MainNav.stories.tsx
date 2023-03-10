import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainNav, Header } from "..";

export default {
  title: "Navigation/Main Navigation",
  component: MainNav,
} as ComponentMeta<typeof MainNav>;

const megaNavTemplate: ComponentStory<typeof MainNav> = (args) => (
  <Header
    headerUrl="#"
    mobile={true}
    onSubmit={() => {}}
    search={false}
    siteTitle="digital.nsw"
  >
    <MainNav {...args} />
  </Header>
);
export const MegaNavigation = megaNavTemplate.bind({});
MegaNavigation.args = {
  navItems: [
    {
      text: "About DPC",
      url: "/index.html#about-dpc",
      id: "914d7e2",
      description:
        "Filium morte multavit si sine causa? quae fuerit causa, nollem.",
      subNav: [
        {
          text: "Level 2",
          url: "/index.html#level-2",
          id: "1138",
          subNav: [
            {
              text: "Level 3",
              url: "/index.html#level-3",
            },
            {
              text: "Level 3",
              url: "/index.html#level-3",
            },
            {
              text: "Level 3",
              url: "/index.html#level-3",
            },
          ],
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
      ],
    },
    {
      text: "Updates",
      url: "/index.html#updates",
      id: "3250fbee",
      subNav: [
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
      ],
    },
    {
      text: "Publications",
      url: "/index.html#publications",
      id: "bd48c03b",
      subNav: [
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
      ],
    },
    {
      text: "Tools & Resources",
      url: "/index.html#tools-resources",
      id: "c457a536",
      subNav: [
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
        {
          text: "Level 2",
          url: "/index.html#level-2",
        },
      ],
    },
    {
      text: "Contact us",
      url: "https://www.google.com",
      id: "017200ca",
    },
  ],
  megaMenu: true,
};
