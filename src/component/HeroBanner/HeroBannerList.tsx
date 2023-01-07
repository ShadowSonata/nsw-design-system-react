import React from "react";

interface HeroBannerListProps {
  subtitle: string;
  children: React.ReactNode;
}

export const HeroBannerList = ({ subtitle, children }: HeroBannerListProps) => (
  <div className="nsw-hero-banner__links">
    <div className="nsw-hero-banner__list">
      <div className="nsw-hero-banner__sub-title">{subtitle}</div>
      {children}
    </div>
  </div>
);

export default HeroBannerList;
