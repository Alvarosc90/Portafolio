import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlineSquares2X2,
  HiOutlineSun,
} from 'react-icons/hi2';
import logo from '../images/LogoHeader.png';
import '../styles/HeaderStyles.css';

type Theme = 'dark' | 'light';

const navItems = [
  { href: '#inicio', label: 'Inicio', icon: HiOutlineHome },
  { href: '#about', label: 'Perfil', icon: HiOutlineBriefcase },
  { href: '#projects', label: 'Casos', icon: HiOutlineSquares2X2 },
  { href: '#skills', label: 'Stack', icon: HiOutlineCodeBracket },
  { href: '#contact', label: 'Contacto', icon: HiOutlineEnvelope },
];

const Header = () => {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header-container">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <motion.a href="#inicio" className="brand-mark" aria-label="Ir al inicio" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <img src={logo} alt="Logo de Álvaro Soria" />
        <span>
          <strong>Álvaro Soria</strong>
          <small>Procesos & Gestión IT</small>
        </span>
      </motion.a>

      <nav className="nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <motion.a href={item.href} className="nav-link" key={item.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <item.icon aria-hidden="true" />
            <span>{item.label}</span>
          </motion.a>
        ))}
      </nav>

      <nav className="header-social" aria-label="Perfiles sociales">
        <motion.a href="https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          <FaLinkedinIn />
        </motion.a>
        <motion.a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          <FaGithub />
        </motion.a>
        <motion.a href="#projects" aria-label="Ver casos de impacto" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          <HiOutlineChartBar />
        </motion.a>
        <motion.button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          {theme === 'dark' ? <HiOutlineSun aria-hidden="true" /> : <HiOutlineMoon aria-hidden="true" />}
        </motion.button>
      </nav>
    </header>
  );
};

export default Header;
