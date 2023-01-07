import React from "react";

const options = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding",
};

export interface SectionProps {
  padding?: "full" | "half" | "none";
  style?:
    | "white"
    | "brand-dark"
    | "brand-light"
    | "brand-supplementary"
    | "black"
    | "off-white"
    | "grey-01"
    | "grey-02"
    | "grey-03"
    | "grey-04";
  children: React.ReactNode;
  container?: boolean;
  className?: string;
  box?: boolean;
}

export const Section = ({
  children = null,
  style = "white",
  container = true,
  padding = "full",
  box = false,
  className = "",
}: SectionProps) => (
  <div
    className={`nsw-section ${className} ${
      options[padding]
    } nsw-section--${style} ${box ? "nsw-section--box" : ""}`}
  >
    <div className={container ? "nsw-container" : ""}>{children}</div>
  </div>
);

export default Section;
