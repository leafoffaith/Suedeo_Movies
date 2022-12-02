import React, { useContext } from "react";
import "./LoginPage.scss";
import LoginForm from "../../Components/LoginForm/LoginForm";

import LoginLanding from "../../Components/LoginLanding/LoginLanding";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className="login_page__container already_logged_in">
        <p>You're already logged in :)</p>
        <Link to={"/"}>
          <p>Click here to go to home</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="login_page__container">
      <LoginLanding />
      <LoginForm />
    </div>
  );
}
