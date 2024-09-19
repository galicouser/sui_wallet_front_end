// src/components/LogoutButton.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Button variant="secondary" onClick={logout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
