import React, { useState } from 'react';
import './Popup.css'; // Import a CSS file to style the popup
// import { Link } from 'react-router-dom';

const Popup_single = () => {
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
          Hosted on a free tier server, first response can take upto 60 seconds. Please be patient.
        </div>
        <div className="popup-buttons">
            
          <button onClick={handleClose} className="popup-button">
            ok, i will be patient
          </button>
          
          {/* <button onClick={handleClose} className="popup-button">
            No
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Popup_single;
