import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import "./reset.css";

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
