import React from "react";
import useInput from "../../hooks/useInput";
import "./Login.scss";

export default function Login() {
  const { email, emailOnchange } = useInput("");
  const { password, passwordOnChange } = useInput("");

  return (
    <div className="login__container">
      <h2 className="heading">Login</h2>
      <div className="login__email_container text-input-field-container">
        <label>Email Address</label>
        <input
          type={"text"}
          value={email}
          onChange={(e) => emailOnchange(e)}
          className="text-input"
        />
      </div>
      <div className="login__email_container text-input-field-container">
        <label>Password</label>
        <input
          type={"password"}
          value={password}
          onChange={(e) => passwordOnChange(e)}
          className="text-input"
        />
      </div>
      <button className="btn btn-lg">Login</button>
    </div>
  );
}
