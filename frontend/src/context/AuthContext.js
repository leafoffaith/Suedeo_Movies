import axios from "axios";
import React, { useEffect, useState } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext(null);

console.log("Auth context file!");
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

  useEffect(() => {
    console.log("Reached theeffect, user is : ", state.isLoggedIn);
    if (state.isLoggedIn === true) {
      navigate("/");
    }
  }, [state.isLoggedIn]);

  const login = (email, password) => {
    setState({ ...state, loading: true });
    axios
      .post(constants.loginEndpoint, { email, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setState({ ...state, isLoggedIn: true, user: res.data });
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

  const logout = () => {
    if (!state.isLoggedIn) {
      return;
    }
    setState({ ...state, isLoggedIn: false, user: null });
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
