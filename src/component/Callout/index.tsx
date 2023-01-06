import React from "react";

export interface CalloutProps {
  title: string;
  level?: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Default callout
 *
 * @param  {string}  title            - The title of the header
 * @param  {string}  level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 */
export const Callout = ({
  title,
  children,
  level = 4,
  className = "",
}: CalloutProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`nsw-callout ${className}`}>
      <div className="nsw-callout__content">
        <HeadingTag className="nsw-callout__title">{title}</HeadingTag>
        {children}
      </div>
    </div>
  );
};

export default Callout;
