import React from "react";
import "./index.css";

export type Props = {
  data: { value: string; placeholder: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
};

export const Dropdown: React.FC<Props> = ({
  data,
  placeholder,
  onChange,
  value = "",
}) => {
  return (
    <select
      value={value}
      className={"border-2 mx-4 py-1 px-2 pr-10 rounded-md"}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option value={"0"} disabled>
        {placeholder}
      </option>
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.placeholder}
        </option>
      ))}
    </select>
  );
};
