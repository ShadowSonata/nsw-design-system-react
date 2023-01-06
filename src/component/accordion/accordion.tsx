import React, { useState } from "react";

interface AccordionProps {
  header: string;
  body: React.ReactNode;
  className?: string;
}
interface AccordionGroupProps {
  className?: string;
  children?: React.ReactNode;
}

const uniqueId = (prefix: string) => {
  const prefixValue = prefix === undefined ? "nsw" : prefix;
  return `${prefixValue}-${Math.random().toString(36).substring(2, 16)}`;
};

export function Accordion({ header, body, className = "" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uID = uniqueId("accordion");
  return (
    <React.Fragment>
      <div className={`nsw-accordion__title ${className}`}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${uID}-title`}
          className={`nsw-accordion__button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {header}
          <i
            className="material-icons nsw-material-icons nsw-accordion__icon"
            // focusable="false"
            aria-hidden="true"
          >
            keyboard_arrow_right
          </i>
        </button>
      </div>
      <div
        className="nsw-accordion__content"
        id={`${uID}-content`}
        hidden={!isOpen}
      >
        <div className="nsw-wysiwyg-content">{body}</div>
      </div>
    </React.Fragment>
  );
}

export const AccordionGroup = ({
  className,
  children,
}: AccordionGroupProps) => (
  <div className={`nsw-accordion ready ${className ? className : ""}`}>
    {children}
  </div>
);
