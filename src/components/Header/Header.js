import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/search">
            <Nav.Link href="#features">Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/drivers">
            <Nav.Link href="#features">Drivers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/violations">
            <Nav.Link href="#features">Violations</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
