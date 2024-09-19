import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const CreateWallet = () => {
    const [wallet, setWallet] = useState(null);
    const [error, setError] = useState('');

    const createNewWallet = async () => {
        try {
            const response = await axios.post('http://localhost:4242/api/wallet/create-wallet');
            setWallet(response.data);
        } catch (err) {
            setError('Failed to create wallet');
        }
    };

    return (
        <Container className="text-center my-5">
            <h2>Create a New Wallet</h2>
            <Button onClick={createNewWallet} variant="success" className="my-3">
                Generate Wallet
            </Button>
            {wallet && (
                <Alert variant="info">
                    <strong>Address:</strong> {wallet.address} <br />
                    <strong>Private Key:</strong> {wallet.privateKey}
                </Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
        </Container>
    );
};

export default CreateWallet;
