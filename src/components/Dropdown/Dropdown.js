import React, { useState, useRef } from 'react';
import './Dropdown.css';

function Dropdown({ children, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContainer = useRef(null);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown-container ${isOpen ? 'open' : ''}`} ref={toggleContainer}>
            <button className="dropdown-button" onClick={handleButtonClick}>
                Select Option
            </button>

            <div className="dropdown-body">
                {children}
            </div>
        </div>
    );
}

export default Dropdown;
