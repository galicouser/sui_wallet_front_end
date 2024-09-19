import React, { useEffect, useMemo, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { BsPlusCircle, BsWallet2, BsEye, BsUsb } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Slim version for smaller bundle size
import '../assets/css/WalletOptions.css';

const WalletOptions = () => {
    const [init, setInit] = useState(false);

    // Initialize particles once during the app's lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Slim version to reduce bundle size
        }).then(() => {
            setInit(true); // Set to true when particles are initialized
        });
    }, []);

    // Particle options
    const options = useMemo(() => ({
        background: {
            color: {
                value: '#10161f', // You can adjust this or keep it transparent for particles
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push',
                },
                onHover: {
                    enable: false,
                    mode: 'repulse',
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: 'white', // Blue particles to match your theme
            },
            links: {
                color: '#007bff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <div className="wallet-options-container">
            {init && (
                <Particles id="tsparticles" options={options} />
            )}

<Container className="wallet-options">
    <h2 className="mb-4">Add Wallet</h2>
    <p>Create a new wallet or add an existing one.</p>
    <ListGroup className="mb-4">

        <ListGroup.Item action>
            <div className="wallet-option">
                <BsWallet2 className="option-icon" />
                <div className="option-text">
                    <Link to="/existing-wallet" className="option-title">New Wallet</Link>
                    <span className="option-description">Create a new secure wallet</span>
                </div>
            </div>
        </ListGroup.Item>

        <ListGroup.Item action>
            <div className="wallet-option">
                <BsWallet2 className="option-icon" />
                <div className="option-text">
                    <Link to="/existing-wallet" className="option-title">Existing Wallet</Link>
                    <span className="option-description">Import an existing wallet using recovery phrases</span>
                </div>
            </div>
        </ListGroup.Item>

        <ListGroup.Item action>
            <div className="wallet-option">
                <BsEye className="option-icon" />
                <div className="option-text">
                    <Link to="/existing-wallet" className="option-title">Watch Account</Link>
                    <span className="option-description">Monitor balances without using private keys</span>
                </div>
            </div>
        </ListGroup.Item>
    </ListGroup>

    <h2 className="mb-4">Hardware Wallets</h2>
    {/* <p>Create a new wallet or add an existing one.</p> */}
    <ListGroup>
        <ListGroup.Item action>
            <div className="wallet-option">
                <BsUsb className="option-icon" />
                <div className="option-text">
                    <Link to="/existing-wallet" className="option-title">Pair With Ledger</Link>
                    <span className="option-description">Connect your Ledger hardware wallet</span>
                </div>
            </div>
        </ListGroup.Item>
    </ListGroup>
</Container>

        </div>
    );
};

export default WalletOptions;