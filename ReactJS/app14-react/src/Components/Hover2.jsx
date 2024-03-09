import React, { useState } from 'react';

const HoverExample = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                padding: '20px',
                backgroundColor: isHovered ? 'lightblue' : 'lightgrey',
                transition: 'background-color 0.3s ease'
            }}
        >
            <h2>Hi this is hover component</h2>
        </div>
    );
};

export default HoverExample;
