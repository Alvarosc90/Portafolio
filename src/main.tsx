import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';

import './App.css'; // Asegúrate de que el archivo de estilos globales esté correctamente referenciado aquí


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

