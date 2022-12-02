import axios from "axios";
import React, { useState } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext(null);

const initialAuthState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  user: null,
};

export const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [state, setState] = useState({
    ...initialAuthState,
    user: user ? user : null,
    isLoggedIn: user ? true : false,
  });
  const navigate = useNavigate();

  const login = (email, password) => {
    setState({ ...state, loading: true });
    axios
      .post(constants.loginEndpoint, { email, password })
      .then((res) => {
        setState({ ...state, isLoggedIn: true, userObject: res });
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log("setting error state", err.response.data.message);
        setState({ ...state, error: "ERROR" });
      })
      .finally(() => {
        setState({ ...state, loading: false });
      });
  };
  const signup = (email, password, name) => {};
  return (
    <AuthContext.Provider value={{ ...state, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
