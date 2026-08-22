import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Resumen from './Resumen';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Resumen'); 

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Contenedor derecho (Topbar + Contenido) */}
      <div className="dashboard-content-wrapper">
        <Topbar onLogout={onLogout} />
        
        <main className="dashboard-main">
          {/* Si estamos en "Resumen", mostramos el componente. Si no, la vista en desarrollo */}
          {activeTab === 'Resumen' ? (
            <Resumen />
          ) : (
            <div className="development-view">
              <h1 className="development-title">{activeTab}</h1>
              <p className="development-subtitle"></p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;