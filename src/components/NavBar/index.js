import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import "../../style/index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
// import App from "../../App";
import HomePage from "../HomePage";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" w="100">
      <Navbar.Brand style={{ fontSize: "40px" }}>Place Your Sets!</Navbar.Brand>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Link as={Link} to="/HomePage">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/Login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/SignUp">
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
