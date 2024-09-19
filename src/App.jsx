// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import WalletNavbar from './components/Navbar';
import Welcome from './pages/Welcome';
import WalletOptions from './pages/WalletOptions';
import ExistingWallet from './components/ExistingWallet';
import './assets/css/App.css'; // Global CSS for consistent styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            {isAuthenticated && <WalletNavbar />}
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/wallet-options" element={<WalletOptions />} />
                <Route path="/existing-wallet" element={<ExistingWallet />} />
                {/* Add any additional routes here */}
            </Routes>
        </Router>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

export default App;
