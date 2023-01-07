import React from "react";
import nextId from "react-id-generator";

interface FooterLinksProps {
  footerLinks?: {
    url: string;
    text: string;
  }[];
  className?: string;
}

export const FooterLinks = ({
  footerLinks,
  className = "",
}: FooterLinksProps) => (
  <ul className={className}>
    {footerLinks?.map((footerLink) => (
      <li key={nextId()}>
        <a href={footerLink.url}>{footerLink.text}</a>
      </li>
    ))}
  </ul>
);

interface FooterSectionGroupProps {
  heading?: {
    url: string;
    text: string;
  };
  sectionLinks?: {
    url: string;
    text: string;
  }[];
  className?: string;
}

export const FooterSectionGroup = ({
  heading,
  sectionLinks,
  className = "",
}: FooterSectionGroupProps) => (
  <div className={`nsw-footer__group ${className}`}>
    {heading && (
      <h3 className="nsw-footer__heading">
        <a href={heading.url}>{heading.text}</a>
      </h3>
    )}
    {sectionLinks && (
      <ul className="nsw-footer__list">
        {sectionLinks.map((sectionLink) => (
          <li key={nextId()}>
            <a href={sectionLink.url}>{sectionLink.text}</a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

interface FooterUpperProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const FooterUpper = ({
  children,
  className = "",
  ariaLabel = "footer",
}: FooterUpperProps) => (
  <nav className={`nsw-footer__upper ${className}`} aria-label={ariaLabel}>
    <div className="nsw-container">{children}</div>
  </nav>
);

interface FooterLowerProps {
  children: React.ReactNode;
  className?: string;
}

export const FooterLower = ({ children, className = "" }: FooterLowerProps) => (
  <div className={`nsw-footer__lower ${className}`}>{children}</div>
);

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

const Footer = ({ children, className = "" }: FooterProps) => (
  <footer className={`nsw-footer ${className}`} role="contentinfo">
    {children}
  </footer>
);

export default Footer;
