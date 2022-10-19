import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import {Container, Navbar, Nav} from 'react-bootstrap'; 

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        `  <Container>
            <Navbar.Brand as={Link} to="/">ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                  <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                <i className='fas fa-user'></i> Login
              </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>`
      </Navbar>
    </header>
  )
}

export default Header