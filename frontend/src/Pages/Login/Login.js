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
            We deliver the best and latest TV and Film recommendations that are
            currently available on the platforms of your choice. Choose movies
            that you love, or hate, in order to give us the best chance of
            providing perfect matches for you. Grab your popcorn and sign up for
            free today!
          </h3>
          <button className="btn btn-xl cta-btn signup_btn">Sign up!</button>
        </div>
      </div>
      <div className="login__container">
        <img
          id="profile-img"
          src={require("../../Logos/RectangleLogo.png")}
          alt="Users profile"
        />
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
        <href id="reset-password">Reset Password</href>
      </div>
    </div>
  );
}
