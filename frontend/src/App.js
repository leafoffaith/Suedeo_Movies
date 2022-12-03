import React, { useContext, useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import "./styles/scss/app.scss";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import { AuthContext } from "./context/AuthContext";
import Logout from "./Pages/Logout/Logout";

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);
  const userData = useContext(AuthContext);
  console.log(userData);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
