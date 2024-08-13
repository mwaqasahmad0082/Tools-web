import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const productdata = () => {
  return (
    <div className="bg-dark Navbar-component">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-capitalize text-white">
            bootstrap project
          </Navbar.Brand>
          <Navbar.Toggle id="metoogle" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="text-white ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-capitalize nav-link">
                Section
              </Nav.Link>
              <Nav.Link href="#action1" className="text-capitalize nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="#action1" className="text-capitalize nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#action1" className="text-capitalize nav-link">
                contect
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default productdata;
