import React from "react";
import HeroBannerList from "./HeroBannerList";

const options = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white",
};

const buttonStyles = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark",
};

export interface HeroBannerProps {
  title: string;
  intro: string;
  style?: "dark" | "light" | "white";
  wide?: boolean;
  featured?: boolean;
  children?: React.ReactNode;
  className?: string;
  cta?: {
    url?: string;
    text?: string;
  };
  image?: {
    src?: string;
    alt?: string;
  };
}

export const HeroBanner = ({
  title = "Hero banner",
  intro,
  cta,
  style = "white",
  wide,
  featured,
  image,
  children,
  className = "",
}: HeroBannerProps) => (
  <div
    className={`nsw-hero-banner ${style ? options[style] : ""} ${
      wide ? "nsw-hero-banner--wide" : ""
    } ${featured ? " nsw-hero-banner--featured" : ""}  ${className}`}
  >
    <div className="nsw-hero-banner__container">
      <div className="nsw-hero-banner__wrapper">
        <div className="nsw-hero-banner__content nsw-wysiwyg-content">
          <h1>{title}</h1>
          <p className="nsw-intro">{intro}</p>
          {cta ? (
            <div className="nsw-hero-banner__button">
              <a href={cta.url} className={`nsw-button ${buttonStyles[style]}`}>
                {cta.text}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        {children}
        <div className="nsw-hero-banner__box" role="presentation">
          {image ? (
            <img
              className="nsw-hero-banner__image"
              src={image.src}
              alt={image.alt}
            />
          ) : (
            <div className="nsw-hero-banner__bg" />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;
export { HeroBannerList };
