import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../asset/anti.png";
function Navigate() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="logo ">
          <img src={logo} alt="" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
          </Nav>
<<<<<<< HEAD
          <Form className="d-flex w-50 align-center">
            <NavDropdown title="Link" id="navbarScrollingDropdown bg-">
=======
          <Form
            className="d-flex w-50
          justify-content-between align-items-center mx-auto mt-md-n6
          mb-md-n6 bg-white border rounded
          "
          >
            <NavDropdown title="All Categories" id="navbarScrollingDropdown ">
>>>>>>> ab1bcbb (sc)
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-20"
              aria-label="Search"
            />
            
             <Button variant="outline-success">Search</Button>
             
          </Form>
          <Button className="m-2 ">Sign Up</Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}


export default Navigate;
