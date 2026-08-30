import React from 'react';
import NexoIcon from '../Icons/NexoIcon';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <NexoIcon className="logo-icon" />
      <span className="logo-text">Nexo CRM</span>
    </div>
  );
};

export default Logo;