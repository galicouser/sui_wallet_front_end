import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const SendTransaction = () => {
    const [form, setForm] = useState({
        from: '',
        to: '',
        privateKey: '',
        amount: '',
    });
    const [receipt, setReceipt] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendTransaction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4242/api/wallet/send-transaction', form);
            setReceipt(response.data.receipt);
        } catch (err) {
            setError('Transaction failed');
        }
    };

    return (
        <Container className="my-5">
            <h2>Send a Transaction</h2>
            <Form onSubmit={sendTransaction}>
                <Form.Group>
                    <Form.Label>From Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="from"
                        value={form.from}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>To Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="to"
                        value={form.to}
                        onChange={handleChange}
                        placeholder="Enter recipient address"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Private Key</Form.Label>
                    <Form.Control
                        type="text"
                        name="privateKey"
                        value={form.privateKey}
                        onChange={handleChange}
                        placeholder="Enter your private key"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="text"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="Enter amount in ETH"
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Send Transaction
                </Button>
            </Form>

            {receipt && (
                <Alert variant="success" className="mt-3">
                    <h4>Transaction Receipt:</h4>
                    <p>{JSON.stringify(receipt)}</p>
                </Alert>
            )}

            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Container>
    );
};

export default SendTransaction;
