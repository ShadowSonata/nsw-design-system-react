import React from "react";

export interface CardProps {
  link?: string;
  style: "dark" | "light" | "white";
  tag?: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  headline?: string;
  highlight?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({
  link,
  style = "white",
  headline,
  highlight,
  tag,
  date,
  image,
  imageAlt,
  className = "",
  children,
}: CardProps) => {
  return (
    <div
      className={
        `nsw-card nsw-card--${style} ${className}` +
        `${headline ? "nsw-card--headline" : ""} ` +
        `${highlight ? "nsw-card--highlight" : ""} `
      }
    >
      {
        // card image
        image && (
          <div className="nsw-card__image">
            <img className={className} src={image} alt={imageAlt} />
          </div>
        )
      }
      <div className={`nsw-card__content`}>
        {tag && <p className="nsw-card__tag">{tag}</p>}
        {date && (
          <p className={`nsw-card__date`}>
            <time dateTime={date}>{date}</time>
          </p>
        )}
        {headline && (
          <div className={`nsw-card__title`}>
            {link ? (
              <a href={link} className="nsw-card__link">
                {headline}
              </a>
            ) : (
              tag
            )}
          </div>
        )}
        {children}
        <span
          className="material-icons nsw-material-icons nsw-card__icon"
          aria-hidden="true"
        >
          east
        </span>
      </div>
    </div>
  );
};

interface CardCopyProps {
  className?: string;
  children?: React.ReactNode;
}
export const CardCopy = ({ children, className = "" }: CardCopyProps) => (
  <p className={`nsw-card__copy ${className}`}>{children}</p>
);

interface CardDividerProps {
  className?: string;
}

/**
 * A horizontal rule used to divide content inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardDivider = ({
  className,
  ...attributesOptions
}: CardDividerProps) => (
  <hr className={`nsw-card__divider ${className}`} {...attributesOptions} />
);

CardDivider.defaultProps = {
  className: "",
};

interface CardLinkProps {
  link: string;
  text: string;
  className?: string;
}

/**
 * Use when making the entire click area of card clickable.
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardLink = ({
  link,
  text,
  className,
  ...attributesOptions
}: CardLinkProps) => (
  <a
    href={link}
    className={`nsw-card--clickable__link ${className}`}
    {...attributesOptions}
  >
    {text}
  </a>
);

CardLink.defaultProps = {
  className: "",
};

interface CardFooterProps {
  className?: string;
  dark?: boolean;
  alt?: boolean;
  children?: React.ReactNode;
}

/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardFooter = ({
  dark,
  alt,
  children,
  className,
  ...attributesOptions
}: CardFooterProps) => (
  <div className={`nsw-card__footer ${className}`} {...attributesOptions}>
    {children}
  </div>
);

CardFooter.defaultProps = {
  className: "",
  dark: false,
  alt: false,
};

interface CardTitleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardTitle = ({
  children,
  className,
  ...attributeOptions
}: CardTitleProps) => {
  const HeadingTag = `div`;

  return (
    <HeadingTag
      className={`nsw-card__title ${className}`}
      {...attributeOptions}
    >
      {children}
    </HeadingTag>
  );
};

CardTitle.defaultProps = {
  className: null,
};

export default Card;
