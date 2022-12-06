import React from "react";
import "./Signup.scss";
import useInput from "../../hooks/useInput";
import TextInput from "../Commons/TextInput/TextInput";
import { ValidateEmail } from "../../utils";

export default function Signup() {
  const [name, nameOnChange] = useInput("");
  const [email, emailOnChange] = useInput("");
  const [password, passwordOnChange] = useInput("");

  const onFormSubmit = (e) => {
    e.preventDefault();
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
      <button className="btn btn-xl signup_btn">Signup</button>
    </form>
  );
}
