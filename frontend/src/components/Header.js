import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>

                <Container>
                    <Navbar.Brand href="/">imagebox</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Container>

                <Nav className="mr-auto">
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> cart</Nav.Link>
                    <Nav.Link href="/login"><i className="fas fa-user"></i> Sign In</Nav.Link>
                </Nav>
            </Navbar>

        </header>
    )
}

export default Header
