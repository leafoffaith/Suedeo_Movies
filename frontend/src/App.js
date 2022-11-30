import React, { useContext, useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import "./styles/scss/app.scss";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);
  const userData = useContext(AuthContext);
  console.log(userData);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
