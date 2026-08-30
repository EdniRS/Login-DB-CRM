import React from 'react';
import { Users, CircleDollarSign, TrendingUp, ClipboardList } from 'lucide-react';
import './Resumen.css';

const Resumen = () => {
    return (
        <div className="resumen-container">
            {/* Cabecera del Resumen */}
            <div className="resumen-header">
                <div>
                    <p className="resumen-date">MARTES, 12 DE NOVIEMBRE DE 2024</p>
                    <h1 className="resumen-greeting">Buenos días, Melvin</h1>
                    <p className="resumen-subtitle">Aquí tienes el pulso de tu negocio hoy.</p>
                </div>
                <button className="btn-nuevo-contacto">+ Nuevo contacto</button>
            </div>

            {/* Tarjetas de Métricas */}
            <div className="metrics-grid">

                <div className="metric-card">
                    {/* Aquí agregamos la cajita con el icono */}
                    <div className="metric-icon-box">
                        <Users size={20} color="#6366f1" />
                    </div>
                    <p>Contactos activos</p>
                    <h2>248</h2>
                    <div className='trend-container'></div>
                    <span className="trend positive">↑ 12.5%</span>
                    <span className="trend-text">vs. mes anterior</span>
                    <div/>
                </div>

                <div className="metric-card">
                    <div className="metric-icon-box">
                        <CircleDollarSign size={20} color="#6366f1" />
                    </div>
                    <p>Oportunidades</p>
                    <h2>$65.4k</h2>
                    <span className="trend positive">↑ 8.2% vs. mes anterior</span>
                    <span className="trend-text">vs. mes anterior</span>
                </div>

                <div className="metric-card">
                    <div className="metric-icon-box">
                        <TrendingUp size={20} color="#6366f1" />
                    </div>
                    <p>Tasa de conversión</p>
                    <h2>24.8%</h2>
                    <span className="trend positive">↑ 4.1% vs. mes anterior</span>
                    <span className="trend-text">vs. mes anterior</span>
                </div>

                <div className="metric-card">
                    <div className="metric-icon-box">
                        <ClipboardList size={20} color="#6366f1" />
                    </div>
                    <p>Tareas pendientes</p>
                    <h2>18</h2>
                    <span className="trend negative">↑ 2.4% vs. mes anterior</span>
                    <span className="trend-text">vs. mes anterior</span>
                </div>

            </div>
        </div>
    );
};

export default Resumen;