import React from 'react';
import Logo from '../Logo/Logo';
import {
  LayoutDashboard,
  Users,
  Target,
  ClipboardCheck,
  CalendarDays,
  Settings,
}
  from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { name: "Resumen", Icon: LayoutDashboard },
  { name: "Contactos", Icon: Users },
  { name: "Oportunidades", Icon: Target },
  { name: "Actividades", Icon: ClipboardCheck },
  { name: "Calendario", Icon: CalendarDays },
  { name: "Configuración", Icon: Settings }
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
      </div>

      <nav className="sidebar-nav">
        <span className="nav-subtitle">WORKSPACE</span>

        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`nav-button ${activeTab === item.name ? 'active' : ''}`}
            onClick={() => setActiveTab(item.name)}
          >
            <item.Icon size={18} style={{ marginRight: '12px' }} />

            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;