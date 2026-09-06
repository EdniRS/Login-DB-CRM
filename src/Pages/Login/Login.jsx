import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import Input from '../../components/Input/Input'
import './Login.css'; 



function Login() {
  const navigate = useNavigate();

  function irDashboard(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className='login-page'>
      <div className='login-wrapper'>

        {/* Corregido: la letra 'n' al final de section */}
        <div className='login-header-section'>
          <Logo />
          <LoginHeader />
        </div>

        <div className='login-card'>
          {/* Al presionar Enter o el botón, se ejecuta handleLogin */}
          <form className='login-form' onSubmit={irDashboard}>
            
            {/* Usamos el componente <Input /> con mayúscula */}
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@ejemplo.com" requiered 
              
              
            />

            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••" required
            />

            

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;