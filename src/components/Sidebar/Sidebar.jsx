import React from 'react';
import {
  LayoutDashboard,
  LogOut,
  GamepadDirectional,
  UsersRound,
}
from 'lucide-react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import ItemMenu from '../../components/ItemMenu/ItemMenu';


export default function Sidebar() {
  const navigate = useNavigate();

  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard size={16} strokeWidth={3}/>
    },

    {
      label: 'Clientes',
      path: '/clientes',
      icon: <UsersRound size={16} strokeWidth={3} />,
    },
  ];

  const logout = () => {
    navigate('/');
  }


  return (
    <aside className='sidebar'>
      <div>
        <div className='sidebar-header'>
          <span className='icon'> <GamepadDirectional size={20} /></span>
          <strong>Nexo CRM</strong>
        </div>

        <span className='menu-title'>WORKSPACE</span>
        <nav className='nav-menu'>
          {navItems.map((item) => (
            <ItemMenu item={item} /> 
          ))}
        </nav>
      </div>


      <button className='logout' onClick={logout}> <LogOut size={19 }/> Cerrar Sesión</button>
    </aside>
  )
}
