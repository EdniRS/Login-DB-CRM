import React from 'react';
import './Input.css';

// Recibimos propiedades dinámicas para reutilizar este diseño
const Input = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">{label}</label>
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        className="input-field"
        value={value}       
        onChange={onChange} 
      />
    </div>
  );
};

export default Input;
