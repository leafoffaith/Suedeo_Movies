import React from "react";
import "./LoginLanding.scss";
import { Link } from "react-router-dom";

export default function LoginLanding() {
  return (
    <div className="left">
      <div className="left__content">
        <h1>Get The Best Movie Recommendations</h1>
        <h3 className="left_desc">
          ...at your fingertips. We will provide you with a list of all of your
          future favourite movies, based on your movie preferences. Quick, give
          it a try now!
        </h3>
        <Link to={"/signup"}>
        <button className="btn btn-xl cta-btn signup_btn">Sign up!</button>
        </Link>
      </div>
    </div>
  );
}
