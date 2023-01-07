import React, { useState } from "react";
import nextId from "react-id-generator";

interface NavProps {
  url?: string;
  text?: string;
  id?: string;
  description?: string;
}

type Level3Nav = NavProps;
type Level2Nav = NavProps & {
  subNav?: Level3Nav[];
  id?: string;
};
type NavItem = NavProps & {
  subNav?: Level2Nav[];
  id?: string;
};

type SubNavItem = NavProps & {
  subNav: Level2Nav[];
  id?: string;
  className?: string;
};

export interface MainNavProps {
  megaMenu?: boolean;
  navItems: NavItem[];
  className?: string;
}

export default function MainNav({
  navItems,
  megaMenu,
  className,
}: MainNavProps) {
  const [isNavOpen, setNavOpen] = useState(false);
  console.log("navItems", navItems);
  return (
    <nav
      id="main-nav"
      className={`nsw-main-nav ${className} ${megaMenu ? "js-mega-menu" : ""}`}
      aria-label="Main Navigation"
    >
      <div className="nsw-main-nav__header">
        <div id="nsw-main-nav__title">Menu</div>
        <button type="button" className="nsw-icon-buttons" aria-expanded="true">
          <span
            className="material-icons nsw-material-icons"
            aria-hidden="true"
          >
            close
          </span>
          <span className="sr-only">Close Menu</span>
        </button>
      </div>
      <ul className="nsw-main-nav__list">
        {navItems.map((navItem) => (
          <li
            key={nextId()}
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              setNavOpen(!isNavOpen);
            }}
          >
            <a href={navItem.url} role="button">
              <span>{navItem.text}</span>
              {navItem.subNav ? (
                <span
                  className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                  aria-hidden="true"
                >
                  keyboard_arrow_right
                </span>
              ) : (
                ""
              )}
            </a>
            {navItem.subNav && (
              <SubNav
                subNav={navItem.subNav}
                url={navItem.url}
                text={navItem.text}
                description={navItem.description}
                id={navItem.id}
                className={isNavOpen ? "active" : ""}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface SubNavHeaderProps {
  url?: string;
  text?: string;
  description?: string;
  id?: string;
}

export const SubNavHeader = ({
  url,
  text,
  description,
  id,
}: SubNavHeaderProps) => (
  <>
    <div className="nsw-main-nav__header">
      <button
        type="button"
        className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
        aria-controls={`subnav-${id}`}
        aria-expanded="true"
      >
        <span className="material-icons nsw-material-icons" aria-hidden="true">
          keyboard_arrow_left
        </span>
        <span>
          Back
          <span className="sr-only"> to previous menu</span>
        </span>
      </button>
      <button
        type="button"
        className="nsw-icon-button js-close-navigation"
        aria-expanded="true"
      >
        <i className="material-icons nsw-material-icons" aria-hidden="true">
          close
        </i>
        <span className="sr-only">Close Menu</span>
      </button>
    </div>
    <div className="nsw-main-nav__title">
      <a href={url}>
        <span>{text}</span>
        <span className="material-icons nsw-material-icons" aria-hidden="true">
          east
        </span>
      </a>
    </div>
    <div className="nsw-main-nav__description">{description}</div>
  </>
);

export const SubNav = ({
  subNav,
  url,
  text,
  description,
  id,
  className,
}: SubNavItem) => {
  return (
    <div
      className={`nsw-main-nav__sub-nav ${className}`}
      id={id}
      role="region"
      aria-label={`${text}-${id}`}
    >
      <SubNavHeader
        url={url}
        text={text}
        description={description}
        id={`sub-nav-header-${id}`}
      />
      <ul className="nsw-main-nav__sub-list">
        {subNav.map((Level2Nav) => (
          <li key={nextId()}>
            <a href={Level2Nav.url}>
              <span>{Level2Nav.text}</span>
              {Level2Nav.subNav ? (
                <span
                  className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                  aria-hidden="true"
                >
                  keyboard_arrow_right
                </span>
              ) : (
                ""
              )}
            </a>

            {Level2Nav.subNav ? (
              <div
                className="nsw-main-nav__sub-nav"
                id={`subnav-${nextId()}`}
                role="region"
                aria-label={`${text} Submenu`}
              >
                <SubNavHeader url={url} text={text} description={description} />
                <ul className="nsw-main-nav__sub-list">
                  {Level2Nav.subNav.map((Level3Nav) => (
                    <li key={nextId()}>
                      <a
                        href={Level3Nav.url}
                        className="nsw-subnavigation__link"
                      >
                        <span>{Level3Nav.text}</span>
                        {/* {Level3Nav.subNav ? (
                            <span
                              className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                              aria-hidden="true"
                            >
                              keyboard_arrow_right
                            </span>
                          ) : (
                            ""
                          )} */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
