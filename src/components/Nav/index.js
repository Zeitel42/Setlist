import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../style/index.css";
import App from "../../App";

const Nav = () => {
  return (
    <div>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Nav;
