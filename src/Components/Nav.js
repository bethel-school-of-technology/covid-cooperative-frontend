import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'; 
import "../Components/Auth.css"; 

const navStyle = {
  height: "50px",
  paddingTop: "20px", 
  paddingBottom: "20px",
  marginTop: "70px", 
}

const logo = {
  marginTop: "20px", 
}

function Navigation() {
  return (
    <Navbar className="NavBar align-content-center" bg="dark" sticky="top" variant="dark" style={navStyle}>

      <Navbar.Brand href="/home"><Image className="CClogo" style={logo} src="cc.png"roundedCircle></Image></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/form">Form</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/post">Post</Nav.Link>
        <Nav.Link href="/postFeed">Post Feed</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation; 