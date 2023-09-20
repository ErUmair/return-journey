import React from 'react';
import { Navbar, Container, NavbarBrand,Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar className='bg-dark'>
                <Container>
                    <NavbarBrand></NavbarBrand>
                    <div className='text-center m-auto p-2 text-light'>
                        &copy; 2023 Copyright:
                        <Nav.Link className='text-light' href='https://google'>
                            Squid Game
                        </Nav.Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer