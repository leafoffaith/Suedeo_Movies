import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./ErrorMessages.scss";

export default function ErrorMessages({ messagesArray, addMargin }) {
  return (
    <div className="error-msg-container">
      {messagesArray.map((msg) => (
        <ErrorMessage message={msg} />
      ))}
    </div>
  );
}
