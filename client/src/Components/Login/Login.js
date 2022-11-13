import React from "react";
import useInput from "../../hooks/useInput";
import "./Login.scss";

export default function Login() {
  const { email, emailOnchange } = useInput("");
  const { password, passwordOnChange } = useInput("");

  return (
    <div className="login_page__container">
      {/* This is the left hand side of login page */}
      <div className="left">
        <div className="left__content">
          <h1>Get The Best Movie Recommendations</h1>
          <h3 className="left_desc">
            ...in your fingertips. We will provide you with the next best movie
            you can watch by knowing about your movie preferences. Quick, give
            it a try now
          </h3>
          <button className="btn btn-xl cta-btn signup_btn">Sign up!</button>
        </div>
      </div>
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
    </div>
  );
}
