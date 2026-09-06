import React from 'react'
import { NavLink } from 'react-router-dom';
import './ItemMenu.css';




export default function ItemMenu({item}) {
  return (
    <NavLink
        key={item.label}
        to={item.path}
        className={
            ({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')
        }
    >   
        {item.icon}
        <span>{item.label}</span>
    </NavLink>
  )
}
