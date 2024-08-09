import React from 'react';
import '../styles/Portfolio.css'; // Asegúrate de importar los estilos CSS adecuados

const Portfolio: React.FC = () => {
  const fullText = "A mi Portafolio"; // Texto completo que deseas mostrar

  return (
    <header className="Portfolio-container">          
        <p className="Portfolio-text">{fullText}</p>
    </header>
  );
};

export default Portfolio;
