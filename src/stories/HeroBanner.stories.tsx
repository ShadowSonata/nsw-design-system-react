import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeroBanner, HeroBannerList } from "..";

export default {
  title: "Content/Hero Banner",
  components: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
  <HeroBanner {...args} />
);

export const Default = Template.bind({});
export const Light = Template.bind({});
export const Dark = Template.bind({});

Default.args = {
  title: "Helping you deliver great government services",
  intro:
    "Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance",
  style: "white",
  cta: { url: "/", text: "Learn more" },
  image: { src: "https://picsum.photos/id/237/2000/1250", alt: "Labrador dog" },
};

Dark.args = {
  title: "Helping you deliver great government services",
  style: "dark",
  intro:
    "Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance",
  cta: { url: "/", text: "Learn more" },
  image: { src: "https://picsum.photos/id/237/2000/1250", alt: "Labrador dog" },
};

Light.args = {
  title: "Helping you deliver great government services",
  style: "light",
  intro:
    "Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance",
  cta: { url: "/", text: "Learn more" },
  image: { src: "https://picsum.photos/id/237/2000/1250", alt: "Labrador dog" },
};
