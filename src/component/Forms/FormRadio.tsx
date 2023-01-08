import React from "react";
import nextId from "react-id-generator";
import { FormHelper } from "./GroupElements";

interface RadioItemProps {
  text: string;
  value: string;
  checked?: boolean;
  className?: string;
  htmlId?: string;
  uniqueID?: string;
  status?: "valid" | "invalid" | "default";
  asGroup?: boolean;
}

export const RadioItem = ({
  text,
  htmlId,
  value,
  checked,
  status,
  asGroup,
  uniqueID,
}: RadioItemProps) => (
  <React.Fragment>
    <input
      className="nsw-form__radio-input"
      type="radio"
      name={htmlId}
      aria-describedby={
        status === "invalid"
          ? `helper${htmlId} error${htmlId}`
          : `helper${htmlId}`
      }
      value={value}
      id={uniqueID}
      checked={checked}
    />
    <label className="nsw-form__radio-label" htmlFor={uniqueID}>
      {text}
    </label>
  </React.Fragment>
);

export interface FormGroupRadioProps {
  status?: "valid" | "invalid" | "default";
  statusText?: string;
  htmlId?: string;
  label?: string;
  // changed original API
  asGroup?: boolean;
  helper?: string;
  options: {
    value: string;
    text: string;
    checked?: boolean;
  }[];
  className?: string;
}

export const FormGroupRadio = ({
  status = "default",
  statusText,
  htmlId = nextId(),
  label,
  asGroup = true,
  helper,
  options,
  className = "",
}: FormGroupRadioProps) => (
  <div className={`nsw-form__group ${className}`}>
    <fieldset
      className="nsw-form__fieldset"
      aria-invalid={status === "invalid"}
    >
      {asGroup && (
        <legend>
          <span className="nsw-form__legend">{label}</span>
          {helper ? <FormHelper htmlId={htmlId}>{helper}</FormHelper> : ""}
          {status ? (
            <FormHelper htmlId={htmlId} status={status}>
              {statusText}
            </FormHelper>
          ) : (
            ""
          )}
        </legend>
      )}

      <div>
        {options.map((option) => (
          <RadioItem
            key={option.value}
            {...option}
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
