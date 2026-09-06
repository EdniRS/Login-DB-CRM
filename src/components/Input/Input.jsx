import React from 'react';
import './Input.css';

function Input({label, type, id, placeholder, value, onChange}) {
  return (
    <div className='input-group'>
      <label className='input-label' htmlFor="id">
        {label}
      </label>

      <input className='input-style'
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
