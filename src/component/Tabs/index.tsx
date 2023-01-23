import React, { useCallback, useEffect, useState } from "react";

export interface TabsProps {
  className?: string;
  children: React.ReactNode;
}

//TODO: error handling when TabItems != Tabsections etc
function Tabs({ className = "", children }: TabsProps) {
  const [tabIndex, setTabIndex] = useState(0);

  const updateTabIndex = (i: number) => {
    // e.preventDefault()
    setTabIndex(i);
  };

  const childrenWithTabIndex = React.Children.map(children, (child, index) => {
    // item wrapper
    if (index === 0) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTabIndex: tabIndex,
        updateTabIndex,
      });
    } else {
      return React.cloneElement(child as React.ReactElement<any>, {
        active: index === tabIndex + 1 ? true : false,
      });
    }
  });

  return <div className={`nsw-tabs ${className}`}>{childrenWithTabIndex}</div>;
}

interface TabItemWrapperProps {
  children: React.ReactNode;
  activeTabIndex?: number;
  updateTabIndex?: (i: number) => void;
}

export const TabItemWrapper = ({
  children,
  activeTabIndex,
  updateTabIndex,
}: TabItemWrapperProps) => {
  return (
    <div className="nsw-tabs__list-wrapper">
      <ul className="nsw-tabs__list" role="tablist">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement<any>, {
            // active: activeTab === index,
            tabIndex: index,
            updateTabIndex,
            activeTabIndex,
          })
        )}
      </ul>
    </div>
  );
};

interface TabItemProps {
  urlHash?: string;
  title: string;
  tabIndex?: number;
  activeTabIndex?: number;
  updateTabIndex?: (i: number) => void;
}

export const TabItem = ({
  urlHash,
  title,
  tabIndex,
  activeTabIndex,
  updateTabIndex,
}: TabItemProps) => {
  const [hash, updateHash] = useHash();
  const isUsingHash = !!urlHash;
  const active =
    isUsingHash && hash ? hash === `#${urlHash}` : tabIndex === activeTabIndex;

  useEffect(() => {
    if (active) {
      updateTabIndex!(tabIndex!);
    }
  }, [active, tabIndex, updateTabIndex]);

  return (
    <li
      className="nsw-tabs__list-item"
      onClick={(e) => {
        updateTabIndex!(tabIndex!);
        if (isUsingHash) {
          updateHash(`#${urlHash}`);
        } else {
          e.preventDefault();
        }
      }}
    >
      <a
        href={urlHash ? `#${urlHash}` : ""}
        className={`nsw-tabs__link ${active && "active"}`}
        role="tab"
        aria-selected={active}
      >
        {title}
      </a>
    </li>
  );
};

interface TabSectionProps {
  children: React.ReactNode;
  active?: boolean;
}

export const TabSection = ({ children, active }: TabSectionProps) => {
  return (
    <section className="nsw-tabs__content" hidden={!active}>
      {children}
    </section>
  );
};

const useHash = () => {
  const [hash, setHash] = React.useState<string>("");

  const hashChangeHandler = React.useCallback(() => {
    setHash(window?.location.hash);
  }, []);
  useEffect(() => {
    if (window) {
      setHash(window.location.hash);
    }
  }, []);

  useEffect(() => {
    if (!window) return;
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, [hashChangeHandler]);

  const updateHash = useCallback(
    (newHash: string) => {
      if (!window) return;
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash] as const;
};

export default Tabs;
