import React from "react";

export interface ContentBlockProps {
  image?: string;
  imageAlt?: string;
  headline: string;
  icon?: React.ReactNode;
  copy?: string;
  links?: {
    url?: string;
    text?: string;
  }[];
  mainLink?: {
    url: string;
    text: string;
  };
  className?: string;
}

export const ContentBlock = ({
  links,
  mainLink,
  headline,
  copy,
  image,
  imageAlt,
  icon,
  className = "",
}: ContentBlockProps) => {
  const ContentBlockContainer = "div";
  return (
    <ContentBlockContainer className={`nsw-content-block ${className}`}>
      {image && <ContentBlockImage src={image} imageAlt={imageAlt} />}
      {icon && <ContentBlockIcon>{icon}</ContentBlockIcon>}
      <div className="nsw-content-block__content">
        {headline && <ContentBlockHeading>{headline}</ContentBlockHeading>}
        {copy && <ContentBlockCopy>{copy}</ContentBlockCopy>}
        {links && (
          <ul className="nsw-content-block__list">
            {links.map((link) => (
              <li key={link.text}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        )}
        {mainLink && (
          <div className="nsw-content-block__link">
            <a href={mainLink.url}>{mainLink.text}</a>
          </div>
        )}
      </div>
    </ContentBlockContainer>
  );
};

interface ContentBlockImageProps {
  src: string;
  imageAlt?: string;
}

export const ContentBlockImage = ({
  src,
  imageAlt,
}: ContentBlockImageProps) => (
  <div className="nsw-content-block__image">
    <img src={src} alt={imageAlt} className="nsw-content-block__image" />
  </div>
);

interface ContentBlockIconProps {
  children?: React.ReactNode;
}

export const ContentBlockIcon = ({ children }: ContentBlockIconProps) => (
  <div className="nsw-content-block__image">
    <div className="nsw-content-block__icon">{children}</div>
  </div>
);

interface ContentBlockCopyProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContentBlockCopy = ({
  children,
  className = "",
}: ContentBlockCopyProps) => (
  <p className={`nsw-content-block__copy ${className}`}>{children}</p>
);

interface ContentBlockHeadingProps {
  children?: React.ReactNode;
}

export const ContentBlockHeading = ({ children }: ContentBlockHeadingProps) => (
  <h2 className="nsw-content-block__title">{children}</h2>
);

export default ContentBlock;
