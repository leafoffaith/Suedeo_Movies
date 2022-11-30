import React, { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import Login from "./Components/LoginForm/Login";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home/Home";

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);

  return <Home />;
}

export default App;
