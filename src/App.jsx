import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  // Estado para controlar si estamos en el Login o en el Dashboard
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {/* Si está autenticado, muestra el Dashboard. Si no, muestra el Login */}
      {isAuthenticated ? (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
        
      )}
    </div>
  );
}

export default App;