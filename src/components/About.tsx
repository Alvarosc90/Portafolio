import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faNetworkWired, faPeopleArrows, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../styles/aboutStyles.css';

const responsibilities = [
  'Procedimentación y mejora continua de procesos internos IT.',
  'Desarrollo de soluciones tecnológicas a demanda para áreas operativas y administrativas.',
  'Diseño y automatización de indicadores de gestión y tableros en Power BI.',
  'Análisis de datos para soporte en toma de decisiones.',
  'Coordinación de compras técnicas, proveedores, infraestructura y servicios.',
  'Integración entre necesidades operativas y soluciones IT.',
  'Optimización de circuitos de trabajo mediante automatización y digitalización.',
  'Soporte funcional y estratégico para áreas internas.',
];

const pillars = [
  {
    title: 'Procesos claros',
    text: 'Documento, ordeno y traduzco circuitos internos para que cada área trabaje con criterios compartidos.',
    icon: faClipboardCheck,
  },
  {
    title: 'Tecnología aplicada',
    text: 'Construyo soluciones con JavaScript, React, Node.js y MSSQL cuando la operación necesita una herramienta concreta.',
    icon: faScrewdriverWrench,
  },
  {
    title: 'Datos accionables',
    text: 'Automatizo indicadores y tableros para que la gestión tenga trazabilidad, lectura rápida y contexto.',
    icon: faNetworkWired,
  },
  {
    title: 'Puente operativo',
    text: 'Conecto stakeholders, proveedores y equipos internos para convertir necesidades reales en decisiones ejecutables.',
    icon: faPeopleArrows,
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="section-heading">
        <span>Nuevo posicionamiento</span>
        <h2>Gestión IT con criterio de proceso, datos y ejecución.</h2>
        <p>
          Actualmente me desempeño en Capemi en un rol transversal orientado a optimizar
          procesos, acompañar la transformación digital y dar soporte operativo IT a
          distintas áreas de la empresa.
        </p>
      </div>

      <div className="about-layout">
        <motion.article className="current-role" whileHover={{ y: -5 }}>
          <div className="role-kicker">Capemi · Jornada completa · Híbrido</div>
          <h3>Responsable de Procesos y Gestión IT</h3>
          <p className="role-period">Feb. 2026 - actualidad</p>
          <p>
            Ascenso a un rol estratégico transversal, combinando desarrollo Full Stack,
            análisis de datos, soporte funcional, compras técnicas y toma de decisiones
            vinculadas a infraestructura, servicios y tecnología.
          </p>
        </motion.article>

        <motion.div className="responsibility-panel" whileHover={{ y: -5 }}>
          <h3>Responsabilidades principales</h3>
          <ul>
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <motion.article className="pillar-card" key={pillar.title} whileHover={{ y: -6, rotate: 0.2 }}>
            <FontAwesomeIcon icon={pillar.icon} />
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default About;
