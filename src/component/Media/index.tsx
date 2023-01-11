import React from "react";

const options = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent",
};

export interface MediaProps {
  style?: "default" | "dark" | "light" | "transparent";
  video?: string;
  image?: string;
  caption?: string;
  title?: string;
  right?: "none" | "30" | "40" | "50";
  left?: "none" | "30" | "40" | "50";
  center?: "none" | "60" | "70" | "80" | "90";
}

export const Media = ({
  image,
  video,
  title,
  caption,
  left,
  right,
  center,
  style = "default",
}: MediaProps) => (
  <figure
    className={`nsw-media${
      left === undefined || left === "none" ? "" : ` nsw-media--left-${left}`
    } ${options[style]} ${
      right === undefined || right === "none"
        ? ""
        : ` nsw-media--right-${right}`
    } ${
      center === undefined || center === "none" ? "" : ` nsw-media--${center}`
    }`}
  >
    {video ? (
      <div className="nsw-media__video">
        <iframe src={video} title={title} allowFullScreen></iframe>
      </div>
    ) : (
      ""
    )}
    {image ? <img src={image} alt={title} /> : ""}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default Media;
