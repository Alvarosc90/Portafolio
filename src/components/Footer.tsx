import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode, faProjectDiagram, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/FooterStyles.css'; // Asegúrate de importar tu archivo CSS para los estilos

const Footer: React.FC = () => {
  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.location.href = '/'; // Redirige a la página de inicio
  };

  return (
    <footer className="footer-container">
      <h2>Gracias por llegar hasta el final</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
      <nav className="footer-nav">
        <a href="/" onClick={handleHomeClick} className="footer-nav-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="#about" className="footer-nav-link">
          <FontAwesomeIcon icon={faUser} /> Acerca de Mí
        </a>
        <a href="#skills" className="footer-nav-link">
          <FontAwesomeIcon icon={faCode} /> Habilidades
        </a>
        <a href="#projects" className="footer-nav-link">
          <FontAwesomeIcon icon={faProjectDiagram} /> Proyectos
        </a>
      </nav>
      <p className="copyright">
        2024 Álvaro Rodrigo Franco Soria Casali
      </p>
    </footer>
  );
};

export default Footer;
