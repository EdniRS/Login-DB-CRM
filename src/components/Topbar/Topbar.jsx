import React from 'react';
import { Bell, LogOut, Search } from 'lucide-react';
import './Topbar.css';

const Topbar = ({ onLogout }) => {
  return (
    <header className='topbar'>

      {/* Buscador */}
      <div className="topbar-buscador">
        <Search size={16} />
        <input
          type="text" name="search" id="search"
          placeholder="Buscar en tu CRM..."
        />
      </div>

      {/*Acciones */}
      <div className='topbar-acciones'>
        <button className='topbar-acciones-boton'>
          <Bell size={16} />
          <span className='notificaciones-alerta'></span>
        </button>

        <span className='topbar-avatar'>MR</span>
        <div className='topbar-user'>
          <strong>Melvin Rizo</strong>
          <small>Admin</small>
        </div>


        <button className='topbar-acciones-boton' onClick={onLogout} title='Cerrar Sesión'>
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;