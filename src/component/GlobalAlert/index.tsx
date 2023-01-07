import React from "react";

const options = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
};

const buttonStyles = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
};

export interface GlobalAlertProps {
  title: string;
  content: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  as?: "critical" | "light" | "default";
}

const GlobalAlert = ({
  title,
  content,
  ctaText,
  ctaHref,
  className = "",
  as = "default",
}: GlobalAlertProps) => {
  return (
    <div
      className={`nsw-global-alert ${className} ${
        as === "default" ? "" : options[as]
      }`}
    >
      <div className="nsw-global-alert__wrapper">
        <div className="nsw-global-alert__content">
          <div className="nsw-global-alert__title">{title}</div>
          <p>{content}</p>
        </div>
        <p>
          {ctaText && ctaHref ? (
            <a href={ctaHref} className={buttonStyles[as]}>
              {ctaText}
            </a>
          ) : (
            ""
          )}
        </p>
        <button type="button" className="nsw-icon-button">
          <span
            className="material-icons nsw-material-icons"
            aria-hidden="true"
          >
            close
          </span>
          <span className="sr-only">Close message</span>
        </button>
      </div>
    </div>
  );
};

export default GlobalAlert;
