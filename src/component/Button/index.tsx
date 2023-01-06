import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  style?:
    | "dark"
    | "dark-outline"
    | "dark-outline-solid"
    | "light"
    | "light-outline"
    | "white"
    | "danger";
  type?: "button" | "submit" | "reset" | undefined;
  block?: boolean;
  className?: string;
}

/**
 * All different kind of button options
 *
 * @type {Object}
 */

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}   linkComponent    - The component used for the link
 * @param  {string}   link             - If this is a link the location it goes
 * @param  {string}   children         - Anything inside
 * @param  {string}   style            - The button style
 * @param  {string}   type             - The type attribute, default: 'button', optional
 * @param  {boolean}  block            - The block option, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const Button = ({
  children,
  link,
  style = "dark",
  type = "button",
  block = false,
  className = "",
}: ButtonProps) => {
  if (link) {
    return (
      <a
        className={`nsw-button ${className} nsw-button--${style}${
          block ? " nsw-button--block" : ""
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`nsw-button ${className} nsw-button--${style}${
        block ? " nsw-button--block" : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  style: "dark",
  linkComponent: "a",
};

export default Button;
