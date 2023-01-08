import React from "react";
import nextId from "react-id-generator";
import { FormHelper } from "./GroupElements";

interface CheckboxItemProps {
  text?: string;
  value: string;
  className?: string;
  htmlId?: string;
  uniqueID?: string;
  status?: "valid" | "invalid" | "default";
  asGroup?: boolean;
  checked?: boolean;
}

export const CheckboxItem = ({
  text,
  htmlId,
  value,
  status,
  asGroup,
  uniqueID,
  checked,
}: CheckboxItemProps) => (
  <React.Fragment>
    <input
      className="nsw-form__checkbox-input"
      type="checkbox"
      value={value}
      name={htmlId}
      aria-invalid={status === "invalid" && !asGroup}
      aria-describedby={
        status === "invalid"
          ? `helper${htmlId} error${htmlId}`
          : `helper${htmlId}`
      }
      id={uniqueID}
      checked={checked}
    />
    <label className="nsw-form__checkbox-label" htmlFor={uniqueID}>
      {text || ""}
    </label>
  </React.Fragment>
);

export interface FormGroupCheckboxProps {
  status?: "valid" | "invalid" | "default";
  statusText?: string;
  htmlId?: string;
  label?: string;
  // changed original API
  asGroup?: boolean;
  helper?: string;
  options: {
    value: string;
    text?: string;
    checked?: boolean;
  }[];
  className?: string;
}

export const FormGroupCheckbox = ({
  status = "default",
  statusText,
  htmlId = nextId(),
  label,
  asGroup,
  helper,
  options,
  className = "",
}: FormGroupCheckboxProps) => (
  <div className={`nsw-form__group ${className}`}>
    <fieldset
      className="nsw-form__fieldset"
      aria-invalid={status === "invalid"}
    >
      {asGroup && (
        <legend>
          <span className="nsw-form__legend">{label}</span>
          {helper ? <FormHelper htmlId={htmlId}>{helper}</FormHelper> : ""}
          {status && (
            <FormHelper htmlId={htmlId} status={status}>
              {statusText}
            </FormHelper>
          )}
        </legend>
      )}

      <div>
        {options.map((option) => (
          <CheckboxItem
            key={option.value}
            {...option}
            asGroup={asGroup}
            htmlId={htmlId}
            status={status}
          />
        ))}
      </div>
      {status && !asGroup && (
        <FormHelper htmlId={htmlId} status={status}>
          {statusText}
        </FormHelper>
      )}
    </fieldset>
  </div>
);
