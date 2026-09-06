import React from 'react'
import './ClienteTabla.css'
import Buscador from '../comp-UI/Buscador'

export default function ClienteTabla() {
  return (
    <section className='cliente-tabla'>
      <div className='cliente-tabla-header'>

        <div className='cliente-tabla-header-text'>
          <h2>Todos los Clientes</h2>
          <p>"4" clientes registrados</p>
        </div>

        <Buscador placeholder="Filtrar por nombre o empresa..." />
      </div>

      <div className='cliente-tabla-body'>
        <div className="cliente-tabla-body-header">
          <span>Contacto</span>
          <span>Correo Electronico</span>
          <span>Estado</span>
          <span>Acciones</span>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}
