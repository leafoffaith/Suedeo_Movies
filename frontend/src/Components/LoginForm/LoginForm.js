import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useInput from "../../hooks/useInput";
import { ValidateEmail } from "../../utils";
import ErrorMessages from "../Commons/ErrorMessages/ErrorMessages";
import "./LoginForm.scss";

export default function Login() {
  const [email, emailOnChange] = useInput("oefjw@ewfo.com");
  const [password, passwordOnChange] = useInput("ewfojewfojf");
  const { login, isLoggedIn, loading, error } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  console.log(isLoggedIn);

  const formSubmitHandler = (e) => {
    console.log("Submitting form");
    e.preventDefault();
    setErrors([]);
    if (!ValidateEmail(email)) {
      setErrors((errors) => errors.concat("Invalid Email"));
      console.log("OOPS");
      return;
    }
    login(email, password);
  };

  useEffect(() => {
    console.log("effec treaced, error is : ", error);
    if (error) {
      console.log("Found error in effect");
    }
  }, [error]);

  return (
    <div className="login__container">
      <h2 className="heading">Login</h2>
      <form onSubmit={formSubmitHandler}>
        <div className="login__email_container text-input-field-container">
          <label>Email Address</label>
          <input
            type={"text"}
            value={email}
            onChange={emailOnChange}
            className="text-input"
          />
        </div>
        <div className="login__email_container text-input-field-container">
          <label>Password</label>
          <input
            type={"password"}
            value={password}
            onChange={passwordOnChange}
            className="text-input"
          />
        </div>
        <button className="btn btn-lg">Login</button>
        {loading && <span>Loading...</span>}
        <ErrorMessages messagesArray={errors} />
      </form>
    </div>
  );
}
