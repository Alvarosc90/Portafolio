import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faDiagramProject, faGear, faHandshake, faRoute } from '@fortawesome/free-solid-svg-icons';
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
    detail: 'herramientas internas y automatización',
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
];

const impactFlow = [
  { step: '01', title: 'Relevar', text: 'Escucho operación, dolores, excepciones y prioridades.' },
  { step: '02', title: 'Ordenar', text: 'Procedimento, simplifico y defino responsabilidades claras.' },
  { step: '03', title: 'Construir', text: 'Desarrollo o integro soluciones IT ajustadas al circuito.' },
  { step: '04', title: 'Medir', text: 'Automatizo indicadores para sostener la mejora en datos.' },
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
        <p className="hero-eyebrow">Capemi · Transformación digital · Gestión operativa</p>
        <h1>Álvaro Soria</h1>
        <p className="hero-role">Responsable de Procesos y Gestión IT</p>
        <p className="hero-copy">
          Integro necesidades operativas con soluciones tecnológicas: procedimentación,
          automatización, análisis de datos, tableros en Power BI y desarrollo Full Stack
          para mejorar circuitos de trabajo reales.
        </p>

        <CallToActionBtn />

        <div className="hero-metrics" aria-label="Resumen profesional">
          <div>
            <span>Actualidad</span>
            <strong>Feb. 2026</strong>
          </div>
          <div>
            <span>Capemi</span>
            <strong>1 año 7 meses</strong>
          </div>
          <div>
            <span>Enfoque</span>
            <strong>IT + procesos + datos</strong>
          </div>
        </div>
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
              Mapa de impacto
            </span>
            <strong>Operación conectada</strong>
          </div>
          <div className="workflow-list">
            {focusItems.map((item) => (
              <motion.div className="workflow-item" key={item.label} whileHover={{ x: 4 }}>
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
          {impactFlow.map((item) => (
            <motion.article key={item.step} whileHover={{ y: -5 }}>
              <span>{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="hero-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}>
          <FontAwesomeIcon icon={faHandshake} />
          <span>Puente entre operación, proveedores y tecnología.</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
