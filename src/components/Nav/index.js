import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../style/index.css";
import App from "../../App";

const Nav = () => {
  return (
    <div>
      <div className="NavBar">
        <Link to="/Login">Login</Link>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/HomePage">Home</Link>
      </div>
    </div>
  );
};

export default Nav;
