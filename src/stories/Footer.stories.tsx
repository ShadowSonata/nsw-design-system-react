import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Footer,
  FooterUpper,
  FooterLower,
  FooterSectionGroup,
  FooterLinks,
} from "..";

export default {
  title: "Global/Footer",
  components: Footer,
  subcomponents: { FooterUpper, FooterLower, FooterLinks, FooterSectionGroup },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer>
    <FooterUpper>
      <FooterSectionGroup
        heading={{
          url: "#",
          text: "Section Link 1",
        }}
        sectionLinks={[
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
        ]}
      />
      <FooterSectionGroup
        heading={{
          url: "#",
          text: "Section Link",
        }}
        sectionLinks={[
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
          {
            url: "#",
            text: "Section Link",
          },
        ]}
      />
    </FooterUpper>
    <FooterLower>
      <div className="nsw-container">
        <p>
          We pay respect to the Traditional Custodians and First Peoples of NSW,
          and acknowledge their continued connection to their country and
          culture.
        </p>
        <hr />
        <FooterLinks
          footerLinks={[
            {
              url: "#",
              text: "Tertiary",
            },
            {
              url: "#",
              text: "Tertiary",
            },
            {
              url: "#",
              text: "Tertiary",
            },
            {
              url: "#",
              text: "Tertiary",
            },
          ]}
        />
        <p>Copyright © 2021</p>
      </div>
    </FooterLower>
  </Footer>
);

export const FooterTemplate = Template.bind({});
