import React, { useEffect } from 'react';
import { faUser, faCode, faProjectDiagram, faHome, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/HeaderStyles.css';

const Header: React.FC = () => {
  useEffect(() => {
    const footer = document.getElementById('footer');

    const isFooterVisible = () => {
      const rect = footer?.getBoundingClientRect();
      return (
        rect?.top! >= 0 &&
        rect?.bottom! <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const toggleHeaderVisibility = () => {
      const header = document.querySelector('.header-container') as HTMLElement;
      if (isFooterVisible()) {
        header.style.opacity = '0';
        header.style.transform = 'translate(-50%, 100%)';
      } else {
        header.style.opacity = '1';
        header.style.transform = 'translate(-50%, 0)';
      }
    };

    window.addEventListener('scroll', toggleHeaderVisibility);

    toggleHeaderVisibility(); // Llama a la función al cargar la página

    return () => {
      window.removeEventListener('scroll', toggleHeaderVisibility);
    };
  }, []);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    window.location.href = '/'; // Redirige a la página de inicio
  };

  return (
    <header className="header-container">
      <nav className="nav">
        <a href="/" onClick={handleHomeClick} className="nav-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="#about" className="nav-link">
          <FontAwesomeIcon icon={faUser} /> Acerca de Mi
        </a>
        <a href="#skills" className="nav-link">
          <FontAwesomeIcon icon={faCode} /> Habilidades
        </a>
        <a href="#projects" className="nav-link">
          <FontAwesomeIcon icon={faProjectDiagram} /> Proyectos
        </a>
        <div className="nav-link">
          <FontAwesomeIcon icon={faCaretDown} /> Social
          <div className="social-menu">
            <a href="https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/" target="_blank" rel="noopener noreferrer" className="social-menu-item">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer" className="social-menu-item">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
