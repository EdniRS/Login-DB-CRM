import React from 'react';
import './Resumen.css';

const Resumen = () => {
  return (
    <div className="resumen-container">
      {/* Cabecera del Resumen */}
      <div className="resumen-header">
        <div>
          <p className="resumen-date">JUEVES, 20 DE AGOSTO DE 2026</p>
          <h1 className="resumen-greeting">Buenos días, Melvin</h1>
          <p className="resumen-subtitle">Aquí tienes el pulso de tu negocio hoy.</p>
        </div>
        <button className="btn-nuevo-contacto">+ Nuevo contacto</button>
      </div>

      {/* Tarjetas de Métricas (Grid de 4 columnas) */}
      <div className="metrics-grid">
        <div className="metric-card">
          <p>Contactos activos</p>
          <h2>248</h2>
          <span className="trend positive">↑ 12.5% vs. mes anterior</span>
        </div>
        <div className="metric-card">
          <p>Oportunidades</p>
          <h2>$65.4k</h2>
          <span className="trend positive">↑ 8.2% vs. mes anterior</span>
        </div>
        <div className="metric-card">
          <p>Tasa de conversión</p>
          <h2>24.8%</h2>
          <span className="trend positive">↑ 4.1% vs. mes anterior</span>
        </div>
        <div className="metric-card">
          <p>Tareas pendientes</p>
          <h2>18</h2>
          <span className="trend negative">↓ -2.4% vs. mes anterior</span>
        </div>
      </div>

      {/* Sección Inferior (Pipeline y Actividad) */}
      <div className="bottom-sections">
        <div className="pipeline-section box-panel">
          <h3>Pipeline de ventas</h3>
          <p className="subtitle">Tus oportunidades por etapa</p>
          {/* Aquí irían las columnas del pipeline */}
          <div className="pipeline-columns">
             <div className="pipeline-col">Nuevo (3)</div>
             <div className="pipeline-col">Contactado (3)</div>
             <div className="pipeline-col">Propuesta (3)</div>
             <div className="pipeline-col">Ganado (5)</div>
          </div>
        </div>

        <div className="activity-section box-panel">
          <h3>Actividad reciente</h3>
          <p className="subtitle">Lo último en tu equipo</p>
          {/* Aquí irían los items de actividad */}
          <div className="activity-item">Correo enviado a Nube Studio</div>
          <div className="activity-item">Tarea completada: Demo</div>
        </div>
      </div>
    </div>
  );
};

export default Resumen;