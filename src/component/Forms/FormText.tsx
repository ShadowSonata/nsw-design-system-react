import React from "react";
import nextId from "react-id-generator";
import { FormGroup } from "./GroupElements";

const defHtmlId = nextId();

interface TextInputProps {
  as?: "input" | "text" | "textarea";
  block?: boolean;
  number?: boolean;
  className?: string;
  htmlId?: string;
  status?: "valid" | "invalid" | "default";
  type?: string;
}

export const TextInput = ({
  as = "input",
  status,
  block,
  number,
  htmlId = defHtmlId,
  type = "text",
  className = "",
  ...attributeOptions
}: TextInputProps) =>
  as === "textarea" ? (
    <textarea
      className={
        `nsw-form__input ${className}` +
        `${block ? " nsw-form__input--block" : ""}` +
        `${number ? " nsw-form__input--number" : ""}`
      }
      aria-invalid={status === "invalid"}
      aria-describedby={
        status === "invalid"
          ? `helper${htmlId} error${htmlId}`
          : `helper${htmlId}`
      }
      id={htmlId}
      {...attributeOptions}
    />
  ) : (
    <input
      className={
        `nsw-form__input ${className}` +
        `${block ? " nsw-form__input--block" : ""}` +
        `${number ? " nsw-form__input--number" : ""}`
      }
      aria-invalid={status === "invalid"}
      aria-describedby={
        status === "invalid"
          ? `helper${htmlId} error${htmlId}`
          : `helper${htmlId}`
      }
      type={type}
      {...attributeOptions}
      id={htmlId}
    />
  );

export interface FormGroupTextProps {
  status?: "valid" | "invalid" | "default";
  className?: string;
  as?: "input" | "textarea";
  statusText?: string;
  label: string;
  helper?: string;
  htmlId?: string;
  inputType?: string;
}

export const FormGroupText = ({
  status = "default",
  className = "",
  inputType,
  as,
  statusText,
  label,
  helper,
  htmlId = defHtmlId,
  ...attributeOptions
}: FormGroupTextProps) => (
  <FormGroup
    status={status}
    statusText={statusText}
    label={label}
    helper={helper}
    htmlId={htmlId}
  >
    <TextInput
      status={status}
      htmlId={htmlId}
      {...attributeOptions}
      type={inputType}
    />
  </FormGroup>
);
