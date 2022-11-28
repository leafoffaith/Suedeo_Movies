import React from "react";
import "./LoginPage.scss";
import Login from "../Components/LoginForm/Login";
import LoginLanding from "../Components/LoginLanding/LoginLanding";

export default function LoginPage() {
  return (
    <div className="login_page__container">
      <LoginLanding />
      <Login />
    </div>
  );
}
