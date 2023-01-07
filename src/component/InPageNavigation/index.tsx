import React from "react";

interface InpageNavLinksItemProps {
  url: string;
  title: string;
}

export const InpageNavLinksItem = ({ url, title }: InpageNavLinksItemProps) => (
  <li>
    <a href={`${url}`}>{title}</a>
  </li>
);

export interface InPageNavLinksProps {
  title: string;
  className?: string;
  links: InpageNavLinksItemProps[];
  ariaLabel?: string;
}

export const InPageNavLinks = ({
  title,
  links,
  ariaLabel = "in page navigation",
  className = "",
}: InPageNavLinksProps) => (
  <nav className={`nsw-in-page-nav ${className}`} aria-labelled-by={ariaLabel}>
    <div id={ariaLabel} className="nsw-in-page-nav__title">
      {title}
    </div>

    <ul>
      {links.map((link) => (
        <InpageNavLinksItem key={link.title} {...link} />
      ))}
    </ul>
  </nav>
);

export default InPageNavLinks;
