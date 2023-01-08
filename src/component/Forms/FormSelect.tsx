import React from "react";
import nextId from "react-id-generator";
import { FormGroup } from "./GroupElements";

const defHtmlId = nextId();

interface SelectItemProps {
  text: string;
  value: string;
}

export const SelectItem = ({ text, value }: SelectItemProps) => (
  <option value={value}>{text}</option>
);

interface SelectProps {
  options: {
    value: string;
    text: string;
  }[];
  block?: boolean;
  htmlId?: string;
  status?: "valid" | "invalid" | "default";
  selected?: string;
  className?: string;
}
export const Select = ({
  htmlId,
  selected,
  options,
  block,
  status,
  className = "",
  ...attributeOptions
}: SelectProps) => (
  <select
    className={`nsw-form__select ${className}`}
    aria-invalid={status === "invalid"}
    aria-describedby={
      status === "invalid"
        ? `helper${htmlId} error${htmlId}`
        : `helper${htmlId}`
    }
    id={htmlId}
    defaultValue={selected}
    {...attributeOptions}
  >
    {options.map((option) => (
      <SelectItem key={option.value} {...option} />
    ))}
  </select>
);

export interface FormGroupSelectProps {
  status?: "valid" | "invalid" | "default";
  statusText?: string;
  label: string;
  helper?: string;
  selected?: string;
  options: {
    value: string;
    text: string;
    checked?: boolean;
  }[];
  htmlId?: string;
}

export const FormGroupSelect = ({
  status = "default",
  selected,
  statusText,
  label,
  helper,
  options,
  htmlId = defHtmlId,
}: FormGroupSelectProps) => (
  <FormGroup
    status={status}
    statusText={statusText}
    label={label}
    helper={helper}
    htmlId={htmlId}
  >
    <Select options={options} selected={selected} />
  </FormGroup>
);

FormGroupSelect.defaultProps = {
  status: "default",
  htmlId: defHtmlId,
};
