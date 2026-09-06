
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login'
import MainLayout from './layouts/MainLayout'
import Dashboard from './Pages/Dashboard/Dashboard';
import Clientes from './Pages/Clientes/Clientes'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />} >
          <Route path='/dashboard' element={<Dashboard />} /> 
          <Route path='/clientes' element={<Clientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;