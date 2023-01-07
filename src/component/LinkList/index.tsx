import React from "react";

type CustomLinkComponentProps = {
  onClick?: (...args: unknown[]) => void;
  href: string;
  [k: string]: any;
};

type LinkListItemProps = {
  text: React.ReactNode;
  link?: string;
  children?: React.ReactNode;
  onClick?: (...args: unknown[]) => void;
  linkComponent?: React.ComponentType<CustomLinkComponentProps>;
};

export interface LinkListProps {
  items: {
    link?: string;
    text: string;
  }[];
  linkComponent?: React.ComponentType<CustomLinkComponentProps>;
  className?: string;
}

export const LinkList = ({
  items,
  linkComponent,
  className = "",
}: LinkListProps) => (
  <div className="nsw-link-list">
    <ul className={`nsw-link-list__list ${className}`}>
      {items.map((item) => (
        <LinkListItem linkComponent={linkComponent} key={item.text} {...item} />
      ))}
    </ul>
  </div>
);

export const LinkListItem = ({
  text,
  link = "#",
  children,
  linkComponent,
  onClick,
}: LinkListItemProps) => {
  const LinkComponent = linkComponent;

  // If we are using a normal link
  if (!LinkComponent) {
    return (
      <li className="nsw-link-list__item">
        <a href={link}>
          <span>{text}</span>
          <span
            className="material-icons nsw-material-icons nsw-link-list__icon"
            aria-hidden="true"
          >
            east
          </span>
        </a>
        {children}
      </li>
    );
  } else {
    <li className="nsw-link-list__item">
      <LinkComponent href={link} onClick={onClick}>
        <span>{text}</span>
        <span
          className="material-icons nsw-material-icons nsw-link-list__icon"
          aria-hidden="true"
        >
          east
        </span>
      </LinkComponent>
      {children}
    </li>;
  }

  if (link) {
    return (
      <li className="nsw-link-list__item">
        <a href={link}>
          <span>{text}</span>
          <span
            className="material-icons nsw-material-icons nsw-link-list__icon"
            aria-hidden="true"
          >
            east
          </span>
        </a>
        {children}
      </li>
    );
  }

  return (
    <li className="nsw-link-list__item">
      {text}
      {children}
    </li>
  );
};

LinkList.defaultProps = {
  linkComponent: "a",
};

export default LinkList;
