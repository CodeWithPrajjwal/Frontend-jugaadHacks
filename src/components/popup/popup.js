import React, { useState } from 'react';
import './Popup.css'; // Import a CSS file to style the popup
import { Link } from 'react-router-dom';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-message">
          Do you want to close the chat window?
        </div>
        <div className="popup-buttons">
            <Link to="/">
          <button className="popup-button">
            Yes
          </button>
          </Link>
          <button onClick={handleClose} className="popup-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
