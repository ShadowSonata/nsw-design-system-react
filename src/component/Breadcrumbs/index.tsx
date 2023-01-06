import React from "react";

type LinkItem = {
  link?: string;
  text: string;
};
export interface BreadcrumbsProps {
  label?: string;
  items: LinkItem[];
  linkComponent?: React.ReactElement<any>;
  className?: string;
  inline?: boolean;
}
interface BreadcrumbLinkListItemProps
  extends LinkItem,
    Pick<BreadcrumbsProps, "linkComponent"> {
  children?: React.ReactNode;
}

const Breadcrumbs = ({
  items,
  linkComponent,
  label = "",
  className = "",
  inline = true,
}: BreadcrumbsProps) => (
  <nav className={`nsw-breadcrumbs ${className}`} aria-label={label}>
    <ol
      className={`nsw-breadcrumb__list ${className}${
        inline ? " nsw-breadcrumb__list--inline" : ""
      }`}
    >
      {items.map((item) => (
        <BreadcrumbLinkListItem
          linkComponent={linkComponent}
          key={item.text}
          {...item}
        />
      ))}
    </ol>
  </nav>
);

export const BreadcrumbLinkListItem = ({
  text,
  linkComponent,
  children,
  link = "#",
}: BreadcrumbLinkListItemProps) => {
  const LinkComponent = linkComponent;
  if (link) {
    if (!LinkComponent) {
      return (
        <li>
          <a href={link}>{text}</a>
          {children}
        </li>
      );
    } else {
      return <li>{React.cloneElement(LinkComponent, { href: "" })}</li>;
    }
  }

  return (
    <li>
      {text}
      {children}
    </li>
  );
};

export default Breadcrumbs;
