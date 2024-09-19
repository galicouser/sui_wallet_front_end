import React, { useEffect, useMemo, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import '../assets/css/ExistingWallet.css'; // Custom CSS for styling

const ExistingWallet = () => {
    const [phrases, setPhrases] = useState(Array(24).fill(''));
    const navigate = useNavigate();
    const [init, setInit] = useState(false);

    // Initialize particles once during the app's lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const handlePhraseChange = (index, value) => {
        const updatedPhrases = [...phrases];
        updatedPhrases[index] = value;
        setPhrases(updatedPhrases);
    };

    const getPhrasePairs = () => {
        const pairs = [];
        for (let i = 0; i < phrases.length; i += 2) {
            pairs.push(phrases.slice(i, i + 2));
        }
        return pairs;
    };

    // Particle options
    const options = useMemo(() => ({
        background: {
            color: { value: 'transparent' }, // Transparent background
        },
        fpsLimit: 120,
        interactivity: {
            detect_on: "window",
        },
        particles: {
            color: { value: '#007bff' },
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
                outModes: { default: 'bounce' },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: { enable: true },
                value: 50,
            },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    return (
        <div className="wallet-existing-container">
            {init && <Particles id="tsparticles" options={options} />}
            <Container className="existing-wallet mt-5">
                <div className="header-with-back-button">
                    <Button
                        variant="link"
                        onClick={() => navigate('/wallet-options')}
                        className="back-button"
                    >
                        <BsArrowLeft className="back-icon" />Back
                    </Button>
                </div>
                <h2 className="mb-4">Recover Your Existing Wallet</h2>
                <p className="mb-4">
                    To recover your existing wallet, please enter the 24-word recovery phrases in the correct order.
                </p>
                <Card>
                    <Card.Body>
                    <Form>
                        {getPhrasePairs().map((pair, rowIndex) => (
                            <div key={rowIndex} className="phrase-row">
                                {pair.map((phrase, inputIndex) => (
                                    <div key={inputIndex} className="phrase-input-wrapper">
                                        <Form.Control
                                            type="text"
                                            value={phrase}
                                            onChange={(e) => handlePhraseChange(rowIndex * 2 + inputIndex, e.target.value)}
                                            className="phrase-input"
                                        />
                                        <span className="phrase-label">{rowIndex * 2 + inputIndex + 1}:</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                        
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button variant="success" type="submit" className="mt-3">
                                Continue
                            </Button>
                        </div>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ExistingWallet;
