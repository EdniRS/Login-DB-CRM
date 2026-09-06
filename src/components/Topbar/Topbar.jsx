import React from 'react';
import { Bell, LogOut } from 'lucide-react';
import './Topbar.css';
import { CurrentUser } from '../../data/UserData'
import Buscador from '../comp-UI/Buscador'

function Topbar({ onLogout })  {
  return (
    <header className='topbar'>

      {/* Buscador */}
      <Buscador placeholder="Buscar en el CRM..." />

      {/*Acciones */}
      <div className='topbar-acciones'>
        <button className='topbar-acciones-boton'>
          <Bell size={16} />
          <span className='notificaciones-alerta'></span>
        </button>

        <span className='topbar-avatar'>{CurrentUser.abreviatura}</span>
        <div className='topbar-user'>
          <strong>{CurrentUser.nombre}</strong>
          <small>{CurrentUser.rol}</small>
        </div>


        <button className='topbar-acciones-boton' onClick={onLogout} title='Cerrar Sesión'>
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;