import React from "react";
import "./ErrorMessage.scss";

export default function ErrorMessage({ message }) {
  return <div className="error-msg" key={message}>{message}</div>;
}
