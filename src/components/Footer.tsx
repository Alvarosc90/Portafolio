import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowUp, HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineEnvelope, HiOutlineSquares2X2 } from 'react-icons/hi2';
import logo from '../images/LogoHeader.png';
import '../styles/FooterStyles.css';

const footerLinks = [
  { href: '#about', label: 'Perfil', icon: HiOutlineBriefcase },
  { href: '#projects', label: 'Casos', icon: HiOutlineSquares2X2 },
  { href: '#skills', label: 'Stack', icon: HiOutlineCodeBracket },
  { href: '#contact', label: 'Contacto', icon: HiOutlineEnvelope },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-brand">
        <img src={logo} alt="Logo de Álvaro Soria" />
        <div>
          <strong>Álvaro Soria</strong>
          <p>Procesos · Gestión IT · Datos · Desarrollo</p>
        </div>
      </div>

      <div className="footer-cta">
        <span>Disponible para conversar sobre mejora operativa, BI y soluciones internas.</span>
        <a href="#contact">Iniciar conversación</a>
      </div>

      <div className="social-icons">
        <motion.a href="https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ y: -2 }}>
          <FaLinkedinIn className="social-icon" />
        </motion.a>
        <motion.a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ y: -2 }}>
          <FaGithub className="social-icon" />
        </motion.a>
      </div>

      <nav className="footer-nav">
        {footerLinks.map((link) => (
          <motion.a href={link.href} className="footer-nav-link" key={link.href} whileHover={{ y: -2 }}>
            <link.icon aria-hidden="true" /> {link.label}
          </motion.a>
        ))}
        <motion.a href="#inicio" className="footer-nav-link footer-nav-link--top" whileHover={{ y: -2 }}>
          <HiOutlineArrowUp aria-hidden="true" /> Inicio
        </motion.a>
      </nav>

      <p className="copyright">
        2026 Álvaro Rodrigo Franco Soria Casali
      </p>
    </footer>
  );
};

export default Footer;
