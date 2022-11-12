import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Login from "./Components/Login/Login";
import "./styles/reset.css";

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
