import React, { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import Login from "./Components/Login/Login";

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
