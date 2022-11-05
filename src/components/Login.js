import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
function Login() {
  return (
    <div className="login">
      <Link to="/App">Home</Link>

      <header className="App-header">
        <h1>This will be the login page</h1>
      </header>
    </div>
  );
}

export default Login;
