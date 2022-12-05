import React from "react";

import classNames from "classnames";

import "./TextInput.scss";

export default function TextInput({ value, onChange, title, bg, type }) {
  const className = classNames("text-input", bg && bg);

  return (
    <div className="textInput">
      <label>{title}</label>
      <input
        value={value}
        onChange={onChange}
        className={className}
        type={type ? type : "text"}
      />
    </div>
  );
}
