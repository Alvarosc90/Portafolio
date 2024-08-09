import React from 'react';
import '../styles/Welcome.css'; // Importa el archivo CSS para los estilos

const LogoHeader: React.FC = () => {
  const text = "BIENVENIDO ";

  return (
    <header className="header">
      <h1 className="welcome-text">
        {text.split("").map((char, index) => (
          <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </h1>
    </header>
  );
};

export default LogoHeader;
