import React from "react";
import "../../style/index.css";
import NavBar from "../NavBar/navbar";

const Header = () => {
  const path = window.location.pathname;
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
