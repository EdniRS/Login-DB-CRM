import React from 'react';
import { BellDot, LogOut, Search } from 'lucide-react';
import './Topbar.css';



const Topbar = ({ onLogout }) => {
  return (
    <header className="topbar">
      {/* Buscador */}
      <div className="search-container">
        <span className="search-icon"><Search size={22} color='#ffffff'/></span> 
        <input 
          type="text" 
          placeholder="Buscar en tu CRM..." 
          className="search-input"
        />
      </div>

      {/* Perfil y Acciones */}
      <div className="topbar-actions">
        <button className="icon-button">
          <BellDot size={22} color='#ffffff'/>
        </button>
        
        <div className="user-profile">
          <div className="user-avatar">MR</div>
          <div className="user-info">
            <span className="user-name">Melvin Rizo</span>
            <span className="user-role">Admin</span>
          </div>
        </div>

        <button className="icon-button logout" onClick={onLogout} title='Cerrar Sesión'>
           <LogOut size={22} color='#ffffff'/>
        </button>
      </div>
    </header>
  );
};

export default Topbar;