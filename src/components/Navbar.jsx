import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavbarComponent() {
  return (
    <section className="navbar-section" id="navbar-section">
      <Navbar expand="lg" className="py-0">
        <Container fluid>
          <Navbar.Brand href="index.html" className="navbar-logo">
            <i className="uil uil-user"></i> Shivam
          </Navbar.Brand>{' '}
          <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="navbar-navigation ms-auto">
              <Nav.Link href="#about-section" className="nav-link">
                <span data-hover="About Me">About Me</span>{' '}
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-link">
                <span data-hover="Projects">Project</span>{' '}
              </Nav.Link>
              <Nav.Link href="#Certification" className="nav-link">
                <span data-hover="Certification">Certification</span>{' '}
              </Nav.Link>
              <Nav.Link href="#skills" className="nav-link">
                <span data-hover="Skills">Tech Stack</span>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarComponent;