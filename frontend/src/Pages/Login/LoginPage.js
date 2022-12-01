import React from "react";
import "./LoginPage.scss";
import LoginForm from "../../Components/LoginForm/LoginForm";

import LoginLanding from "../../Components/LoginLanding/LoginLanding";

export default function LoginPage() {
  return (
    <div className="login_page__container">
      <LoginLanding />
      <LoginForm />
    </div>
  );
}
