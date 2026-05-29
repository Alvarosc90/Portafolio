import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faDiagramProject, faGear, faRoute } from '@fortawesome/free-solid-svg-icons';
import { motion, useReducedMotion } from 'framer-motion';
import CallToActionBtn from './CallToActionBtn';
import ProfileImageWrapper from './profileStyles';
import '../styles/Portfolio.css';

const focusItems = [
  {
    label: 'Procesos internos',
    detail: 'procedimientos, circuitos y mejora continua',
    icon: faDiagramProject,
  },
  {
    label: 'Soluciones IT',
    detail: 'herramientas de desarrollo y automatización',
    icon: faGear,
  },
  {
    label: 'Indicadores de gestión',
    detail: 'KPIs, tableros y trazabilidad operativa',
    icon: faChartLine,
  },
  {
    label: 'Datos para decidir',
    detail: 'análisis aplicado a decisiones concretas',
    icon: faDatabase,
  },
    {
    label: 'Gestion IT',
    detail: 'análisis y Compras de insumos',
    icon: faDiagramProject,
  },
];



const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="hero-eyebrow">Transformación digital · Gestión operativa</p>
        <h1>Álvaro Soria</h1>
        <p className="hero-role">Responsable de Procesos y Gestión IT</p>
        <p className="hero-copy">
          Integro necesidades operativas con soluciones tecnológicas: procedimentación,
          automatización, análisis de datos, tableros en Power BI y desarrollo Full Stack
          para mejorar circuitos de trabajo reales.
        </p>

        <CallToActionBtn />
      </motion.div>

      <div className="hero-visual" aria-label="Perfil y foco de trabajo">
        <ProfileImageWrapper />

        <motion.div
          className="workflow-panel"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="workflow-panel__header">
            <span>
              <FontAwesomeIcon icon={faRoute} />
              Mis cualidades
            </span>
          </div>
          <div className="workflow-list">
            {focusItems.map((item) => (
              <motion.div className="workflow-item" key={item.label} whileHover={{ x: 5 }}>
                <FontAwesomeIcon icon={item.icon} />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="impact-flow"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >

        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
