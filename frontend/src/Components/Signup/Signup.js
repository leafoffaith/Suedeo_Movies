import React, { useContext, useEffect } from "react";
import "./Signup.scss";
import useInput from "../../hooks/useInput";
import TextInput from "../Commons/TextInput/TextInput";
import { ValidateEmail } from "../../utils";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import ErrorMessage from "../Commons/ErrorMessage/ErrorMessage";

export default function Signup() {
  const [name, nameOnChange] = useInput("john");
  const [email, emailOnChange] = useInput("john@gmail.com");
  const [password, passwordOnChange] = useInput("john");
  const { signup, loading, error, resetError } = useContext(AuthContext);

  useEffect(() => {
    console.log("ERROR CHANGED!", error);
  }, [error]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    resetError();
    signup(email, name, password);
    ValidateEmail();
  };

  return (
    <form className="signup__container" onSubmit={onFormSubmit}>
      <TextInput
        value={name}
        title={"Full Name"}
        onChange={nameOnChange}
        bg="black"
      />
      <TextInput
        value={email}
        title={"Email Address"}
        onChange={emailOnChange}
      />
      <TextInput
        value={password}
        title="Password"
        onChange={passwordOnChange}
        type="password"
      />
      <div>
        <button className="btn btn-xl signup_btn">Signup</button>
        {loading && <CircularProgress />}
      </div>
      {error && <ErrorMessage message={error} />}
    </form>
  );
}
