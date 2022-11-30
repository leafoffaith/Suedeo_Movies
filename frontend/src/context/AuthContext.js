import axios from "axios";
import React, { useState } from "react";
import constants from "../constants";

export const AuthContext = React.createContext(null);

const initialAuthState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  userObject: null,
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialAuthState);

  const login = (email, password) => {
    setState({ ...state, loading: true });
    axios
      .post(constants.loginEndpoint, { email, password })
      .then((res) => {
        setState({ ...state, isLoggedIn: true, userObject: res });
      })
      .catch((err) => {
        console.log(err);
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
