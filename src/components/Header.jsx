import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-info">
                <Container className="">
                    <Navbar.Brand haref="/" className="">Squid Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto text-light">
                            <Link to="/" className="header-text mx-2">Home</Link>
                            <Link to="/game-rule" className="header-text mx-2">Game Rules</Link>
                            <Link to="leader-board" className="header-text mx-2">Leader Board</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header