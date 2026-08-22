import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import Input from '../../components/Input/Input'; // ¡Volvemos a importar tu componente!
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email === 'admin@nexocrm.com' && password === 'admin123') {
      onLogin(); 
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Logo />
        <LoginHeader />
        
        <form className="login-form" onSubmit={handleLogin}>
          
          {/* Usamos tu componente Input, que ya trae todo el diseño bonito */}
          <Input 
            label="Correo electrónico" 
            type="email" 
            id="email" 
            placeholder="tu@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
            label="Contraseña" 
            type="password" 
            id="password" 
            placeholder="......"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{color: '#ef4444', fontSize: '0.85rem', marginBottom: '10px'}}>{error}</p>}
          
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;