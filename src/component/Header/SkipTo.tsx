import React from "react";

interface SkipToProps {
  nav: string;
  content: string;
}

export const SkipTo = ({ nav, content }: SkipToProps) => (
  <nav className="nsw-skip" aria-label="Skip to links">
    <a href={nav}>
      <span>Skip to navigation</span>
    </a>
    <a href={content}>
      <span>Skip to content</span>
    </a>
  </nav>
);
