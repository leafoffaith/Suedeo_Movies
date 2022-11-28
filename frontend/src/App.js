import React, { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import "./styles/scss/app.scss";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"; 

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);

  return (
    <div>
      {/* <Login /> */}
      <Home/>
    </div>
  );
}

export default App;
