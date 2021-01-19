import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'; 

const navStyle = {
  height: "50px",
}

function Navigation() {
  return (
    <Navbar className="NavBar align-content-center" bg="dark" sticky="top" variant="dark" style={navStyle}>

      <Navbar.Brand href="/home"><Image src="cc.png"roundedCircle></Image></Navbar.Brand>
      <Nav className="mr-auto justify-content-end">
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