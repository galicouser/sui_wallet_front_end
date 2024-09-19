import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="text-center my-5">
            <h1>Welcome to Sui Wallet</h1>
            <p>Your gateway to the Sui blockchain.</p>
            <Button href="/create-wallet" variant="primary" className="my-3">
                Create a New Wallet
            </Button>
        </Container>
    );
};

export default Home;
