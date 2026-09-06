import React from 'react'
import './PageHeader.css'
import { Plus } from 'lucide-react';


export default function PageHeader(props) {
    const hoy = new Date().toLocaleDateString('es-ES',
      {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
      }
    );



  return (
    <header className='page-header'>
      <div className='page-header-info'>
        <span className='page-header-date'>{hoy}</span>
        <h1 className='page-header-title'>{props.title}</h1>
        <p className='page-header-description'>{props.subtitle}</p>
      </div>
      <button className='btn-primary'> <Plus size={16} strokeWith={3}/> {props.actionText}</button>
    </header>
  )
}
