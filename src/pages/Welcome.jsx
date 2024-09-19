import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react'; // For particle integration
import { loadSlim } from '@tsparticles/slim'; // Slim version for smaller bundle size
import '../assets/css/Welcome.css'; // Ensure the correct path to your CSS file

const Welcome = () => {
    const navigate = useNavigate();
    const [init, setInit] = useState(false);

    // Initialize particles once during the app's lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Slim version to reduce bundle size
        }).then(() => {
            setInit(true); // Set to true when particles are initialized
        });
    }, []);

    // Options for the particles effect
    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: '#000000', // Black background
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
                    value: '#ffffff', // White particles
                },
                links: {
                    color: '#ffffff',
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
                    value: 80,
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
        }),
        []
    );

    const particlesLoaded = useCallback((container) => {
        console.log('Particles loaded:', container);
    }, []);

    return (
        <div className="welcome-container">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}

            <Container className="text-center welcome-content">
                <h1 className="mb-4">Welcome to Your Wallet</h1>
                <p className="mb-4">Secure your future with the power of decentralized finance.</p>
                <Button
                    variant="primary"
                    onClick={() => navigate('/wallet-options')}
                    className="get-started-button"
                >
                    Get Started
                </Button>
            </Container>
        </div>
    );
};

export default Welcome;
