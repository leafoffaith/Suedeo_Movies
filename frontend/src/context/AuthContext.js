import axios from "axios";
import React, { useEffect, useState } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext(null);

console.log("Resetting state!");
const initialAuthState = {
  isLoggedIn: false,
  loading: false,
  error: "RESET",
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
    console.log("Reached the useEffect, user is : ", state.isLoggedIn);
    if (state.isLoggedIn === true) {
      navigate("/");
    }
  }, [state.isLoggedIn]);

  const login = (email, password) => {
    setState({ ...state, loading: true });
    axios
      .post(constants.loginEndpoint, { email, password })
      .then((res) => {
        console.log("working")
        const data = res.data
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data.token));
        setState({ ...state, user: data, isLoggedIn: true });
      })
      .catch((err) => {
        console.log("setting error state", err.response.data.message);
        setState({ ...state, error: "ERROR" });
      })
      .finally(() => {
        setState({ ...state, loading: false });
      });
  };

  const signup = (email, password, name) => {
    const payload = { name, email, password };
    setState({ ...state, loading: true });
    axios
      .post(constants.signupEndpoint, payload)
      .then((res) => {
        const data = res.data;
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data.token));
        setState({ ...state, isLoggedIn: true, user: data });
      })
      .catch((err) => {
        const msg = err.response.data.message;
        console.log("Signup request failed", msg);
        setState({ ...state, error: msg });
      });
    // .finally(() => {
    //   setState({ ...state, loading: false });
    // });
  };

  const logout = () => {
    if (!state.isLoggedIn) {
      return;
    }
    setState({ ...state, isLoggedIn: false, user: null });
    localStorage.removeItem("user");
  };

  const resetError = () => {
    setState({ ...state, error: null });
  };
  return (
    <AuthContext.Provider
      value={{ ...state, login, signup, logout, resetError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
