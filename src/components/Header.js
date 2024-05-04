import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/Welcome" className="text-decoration-none text-light mx-2">Home</NavLink>
                    <Nav className="me-auto">
                        
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Registration</NavLink>
                        <NavLink to="/Login" className="text-decoration-none text-light mx-2">Login</NavLink>
                        <NavLink to="/Features" className="text-decoration-none text-light">Features</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header