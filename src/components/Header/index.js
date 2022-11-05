import React from "react";
import "../../style/index.css";
import Nav from "../Nav";

const Header = () => {
  const path = window.location.pathname;
  return (
    <div>
      <header className="App-header">
        <h1>This is the Header</h1>
      </header>
      <Nav />
    </div>
  );
};

export default Header;
