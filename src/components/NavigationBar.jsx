import React from "react";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function NavigationBar() {
  return (
    <div>
      {["md"].map((expand) => (
        <Navbar key={expand} fixed="top" variant="light" expand={expand} className="mb-3">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="#">Binar Car Rental</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <LinkContainer to="/">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Binar Car Rental</Offcanvas.Title>
                </LinkContainer>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/cars">
                    <Nav.Link>Cars</Nav.Link>
                  </LinkContainer>
                  <Nav.Link href="#services">Our Services</Nav.Link>
                  <Nav.Link href="#why-us">Why Us</Nav.Link>
                  <Nav.Link href="#testi">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                  <Nav>
                    <Button className="mr-2 btn-light-green">Register</Button>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
