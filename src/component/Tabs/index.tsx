import React, { useState } from "react";

export interface TabsProps {
  className?: string;
  children: React.ReactNode;
}

//TODO: error handling when TabItems != Tabsections etc
function Tabs({ className = "", children }: TabsProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabSelect = (i: number) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTabIndex(i);
  };
  const childrenWithTabIndex = React.Children.map(children, (child, index) => {
    // item wrapper
    if (index === 0) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTab: tabIndex,
        handleClick: handleTabSelect,
      });
    } else {
      return React.cloneElement(child as React.ReactElement<any>, {
        active: index === tabIndex + 1,
      });
    }
  });

  return <div className={`nsw-tabs ${className}`}>{childrenWithTabIndex}</div>;
}

interface TabItemWrapperProps {
  children: React.ReactNode;
  activeTab?: number;
  handleClick?: (i: number) => () => void;
}

export const TabItemWrapper = ({
  children,
  activeTab,
  handleClick,
}: TabItemWrapperProps) => {
  return (
    <div className="nsw-tabs__list-wrapper">
      <ul className="nsw-tabs__list" role="tablist">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement<any>, {
            active: activeTab === index,
            handleClick: handleClick && handleClick(index),
          })
        )}
      </ul>
    </div>
  );
};

interface TabItemProps {
  urlHash?: string;
  title: string;
  active?: boolean;
  handleClick?: () => void;
}

export const TabItem = ({
  urlHash,
  title,
  active,
  handleClick,
}: TabItemProps) => (
  <li className="nsw-tabs__list-item" onClick={handleClick}>
    <a
      href={urlHash ? `#${urlHash}` : "#"}
      className={`nsw-tabs__link ${active && "active"}`}
      role="tab"
      aria-selected={active}
    >
      {title}
    </a>
  </li>
);

interface TabSectionProps {
  children: React.ReactNode;
  active?: boolean;
}

export const TabSection = ({ children, active }: TabSectionProps) => (
  <section className="nsw-tabs__content" hidden={!active}>
    {children}
  </section>
);

export default Tabs;
