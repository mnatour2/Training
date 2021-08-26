import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Actors" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addActor">
                Create a new actor
              </NavDropdown.Item>
              <NavDropdown.Item href="/actors"> View Actors</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Create a new movie</NavDropdown.Item>
              <NavDropdown.Item href="#">View movies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Create a new user</NavDropdown.Item>
              <NavDropdown.Item href="#">View users</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
