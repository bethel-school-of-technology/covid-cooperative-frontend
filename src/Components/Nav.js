import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    // <div>
    //   <ul className="container nav justify-content-end">
    //     <li className="nav-item">
    //       <Link to="/"> Home </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/form"> Form </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/login"> Login </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/post"> Post </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/postFeed"> Post Feed </Link>
    //     </li>
    //   </ul>
    // </div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">Navbar</Navbar.Brand>
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
