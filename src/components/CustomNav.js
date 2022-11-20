import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
function CustomNav() {
  //if user has logged in then show text or else show login page
  const userName = localStorage.getItem("username");
  const navigate = useNavigate();
  return (
    <>
    {userName != null?<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/expense">Add Items</Nav.Link>
            <Nav.Link href={"/view/" + (userName!=null?userName:"archit")}>
              View Items
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {userName == null ? (
            <Nav.Link href="/login">Login</Nav.Link>
          ) : (
            <Navbar.Text>
              Signed in as:{" "}
              <a
                href="#"
                onClick={() => {
                  localStorage.clear();
                  navigate('/login');
                }}
                style={{textTransform:"uppercase"}}
              >
                {userName}
              </a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar> : ""}
    </>
  );
}

export default CustomNav;
