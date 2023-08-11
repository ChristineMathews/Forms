// Modal.js
import React from 'react';
import './Modal.css'; // Import the CSS file for styling

const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Authentication Required</h2>
                <p>You need to log in to access this page.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
