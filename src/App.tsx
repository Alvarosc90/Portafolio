import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; // Archivo de estilos específicos de la aplicación

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Añade más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
