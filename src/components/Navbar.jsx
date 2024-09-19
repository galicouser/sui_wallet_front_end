import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsWallet2, BsHouseDoor, BsArrowRightCircle } from 'react-icons/bs'; // Import Bootstrap icons
import '../assets/css/Navbar.css'; // Import the custom CSS file

const WalletNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="wallet-navbar">
            <Container>
                <Navbar.Brand to="/" className="navbar-brand">
                    <BsWallet2 className="brand-icon" /> Sui Wallet
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-links">
                        <Nav.Link as={Link} to="/" className="nav-item">
                            <BsHouseDoor className="nav-icon" /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/create-wallet" className="nav-item">
                            <BsWallet2 className="nav-icon" /> Create Wallet
                        </Nav.Link>
                        <Nav.Link as={Link} to="/send-transaction" className="nav-item">
                            <BsArrowRightCircle className="nav-icon" /> Send Transaction
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default WalletNavbar;
