import React, { useState, useEffect } from 'react';
import './front.css';
import desktopImage from '../../images/flower2.jpg';
import mobileImage from '../../images/flower2.jpg';

const Front = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
        <div className="Front" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="Front-content">
                <h1>PORTFOLIO</h1>
                <p>A combination of some projects</p>
            </div>
        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowWidth;
};

export default Front;