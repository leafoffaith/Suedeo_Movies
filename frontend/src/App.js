import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import "./styles/scss/app.scss";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import Logout from "./Pages/Logout/Logout";
import SignupPage from "./Pages/Signup/SignupPage";
import MovieChoice from "./Pages/MovieChoice/MovieChoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/moviechoice" element={<MovieChoice />} />
    </Routes>
  );
}

export default App;
