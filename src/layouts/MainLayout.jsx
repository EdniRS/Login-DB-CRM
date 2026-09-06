import React from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import './MainLayout.css'


export default function MainLayout() {
  return (
    <div className='app-container'>
        <Sidebar />
        <div className='area-principal'>
            <Topbar />
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}
