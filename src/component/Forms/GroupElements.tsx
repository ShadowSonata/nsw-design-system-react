import React from "react";
import nextId from "react-id-generator";

const defHtmlId = nextId();

interface FormHelperProps {
  htmlId?: string;
  children?: React.ReactNode;
  className?: string;
  status?: "invalid" | "valid" | "default";
  error?: boolean;
}

export const FormHelper = ({
  htmlId = defHtmlId,
  children,
  className = "",
  status,
}: FormHelperProps) => (
  <span
    id={`${status === "invalid" ? "error" : "helper"}${htmlId}`}
    className={`nsw-form__helper ${
      status === "invalid" ? " nsw-form__helper--error" : ""
    } ${status === "valid" ? " nsw-form__helper--valid" : ""} ${className}`}
  >
    <span className="material-icons nsw-material-icons" aria-hidden="true">
      {status === "invalid" ? "cancel" : ""}
      {status === "valid" ? "check_circle" : ""}
    </span>
    {children}
  </span>
);

interface FormLabelProps {
  text: string;
  //   dark?: boolean;
  //   inline?: boolean;
  className?: string;
  htmlFor?: string;
}

export const FormLabel = ({
  htmlFor,
  text,
  //   dark,
  //   inline,
  className = "",
}: FormLabelProps) => (
  <label htmlFor={htmlFor} className={`nsw-form__label ${className}`}>
    {text}
  </label>
);

interface FormGroupProps {
  status?: "invalid" | "valid" | "default";
  error?: boolean;
  className?: string;
  htmlId?: string;
  label: string;
  children?: React.ReactNode;
  helper?: string;
  statusText?: string;
  uniqueID?(...args: unknown[]): unknown;
}

export const FormGroup = ({
  htmlId = nextId(),
  status = "default",
  children,
  label,
  helper,
  statusText,
  error,
  className = "",
}: FormGroupProps) => (
  <div className={`nsw-form__group ${className}`}>
    <FormLabel htmlFor={htmlId} text={label} />
    {helper ? <FormHelper htmlId={htmlId}>{helper}</FormHelper> : ""}
    {React.Children.map(children, (child) =>
      React.cloneElement(child as React.ReactElement, { error })
    )}
    {status && (
      <FormHelper htmlId={htmlId} status={status}>
        {statusText}
      </FormHelper>
    )}
  </div>
);
