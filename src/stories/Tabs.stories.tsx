import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs as TabsComponent, TabItem, TabItemWrapper, TabSection } from "..";

export default {
  title: "Content/Tabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = () => (
  <TabsComponent>
    <TabItemWrapper>
      <TabItem title="New and existing home" urlHash="tab1" />
      <TabItem title="Vacant land" urlHash="tab2" />
      <TabItem title="Airline" />
    </TabItemWrapper>
    <TabSection>
      <h2>New and existing homes</h2>
      <p>
        As a first home buyer, you may be eligible for a
        <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty">
          {" "}
          transfer duty{" "}
        </a>
        concession or exemption.
      </p>
      <ul>
        <li>
          If your home is valued at less than $650,000, you can apply for a full
          exemption so that you don’t have to pay transfer duty.
        </li>
        <li>
          If the value of your home is between $650,000 and $800,000, you can
          apply for a concessional rate of transfer duty. The amount you’ll have
          to pay will be based on the value of your home.
        </li>
      </ul>
    </TabSection>
    <TabSection>
      <h2>Vacant land</h2>
      <p>
        The FHBAS applies to vacant land on which you plan to build your home.
      </p>
      <ul>
        <li>
          You won’t pay any{" "}
          <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty">
            transfer duty
          </a>{" "}
          if your land is valued at less than $350,000.
        </li>
        <li>
          For land valued between $350,000 and $450,000, you’ll receive a
          concessional rate.
        </li>
      </ul>
    </TabSection>
    <TabSection>
      <h2>
        United Airlines launches new 12-hour direct flight from Brisbane to San
        Francisco
      </h2>
      <p>
        Hear the phrase ‘international long-haul flight’, and ‘comfort’ is
        rarely a word that springs to mind. But United Airlines updated Polaris
        Class is miles above the rest.{" "}
      </p>
    </TabSection>
  </TabsComponent>
);
export const TabsComp = Template.bind({});
