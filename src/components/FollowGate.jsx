// FollowGate.jsx
import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './FollowGate.css';

const FollowGate = ({ onUnlock }) => {
  const [visited, setVisited] = useState({ fb: false, li: false });

  const handleVisit = (platform) => {
    const urls = {
      fb: 'https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL',
      li: 'https://linkedin.com/in/farhad-ali-turk-135369305'
    };
    window.open(urls[platform], '_blank');
    setVisited(prev => ({ ...prev, [platform]: true }));
  };

  const unlocked = visited.fb && visited.li;

  return (
    <div className="follow-gate-backdrop">
      <div className="follow-gate-modal">
        <h3 className="follow-title">Before You Begin</h3>
        <p className="follow-subtitle">Follow us to unlock this quiz</p>
        <div className="follow-buttons">
          <button 
            className={`follow-btn fb ${visited.fb ? 'visited' : ''}`} 
            onClick={() => handleVisit('fb')}
          >
            <FaFacebookF /> Facebook
          </button>
          <button 
            className={`follow-btn li ${visited.li ? 'visited' : ''}`} 
            onClick={() => handleVisit('li')}
          >
            <FaLinkedinIn /> LinkedIn
          </button>
        </div>
        <button 
          className="btn btn-primary unlock-btn" 
          disabled={!unlocked} 
          onClick={onUnlock}
        >
          {unlocked ? 'Start Quiz' : 'Follow to Unlock'}
        </button>
      </div>
    </div>
  );
};

export default FollowGate;
