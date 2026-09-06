import React from 'react'
import { Search } from 'lucide-react'
import './Buscador.css'

export default function Buscador(props) {
  return (
    <div className='topbar-buscador'>
      <Search size={16} />
      <input type="text" name="search" id="search"
      placeholder={props.placeholder}
      />
    </div>
  )
}
