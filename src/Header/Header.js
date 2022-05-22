import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import photo from '../images/uni-fav.png';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="/" className='text-primary'>
                        <img
                            alt=""
                            src={photo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}Uni Store House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/logIn">Log In </Nav.Link>}
                            <Nav.Link eventKey={2} as={Link} to="/signUp">
                                Sign Up
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/ManageInventory">
                                ManageInventory
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/Myitem">
                                Myitem
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;