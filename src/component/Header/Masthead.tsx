import React from "react";

interface MastheadProps {
  text?: string;
}

export const Masthead = ({
  text = "A NSW Government website",
}: MastheadProps) => (
  <div className="nsw-masthead">
    <div className="nsw-container">
      <p>{text}</p>
    </div>
  </div>
);
