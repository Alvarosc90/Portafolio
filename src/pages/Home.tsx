import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiBarChart2,
  FiBox,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMenu,
  FiMessageSquare,
  FiMoon,
  FiServer,
  FiSettings,
  FiSun,
  FiUsers,
  FiX,
  FiZap,
} from 'react-icons/fi';
import portrait from '../images/PortafolioProfile1.webp';
import cv from '../images/CV - Alvaro Soria.pdf';

const linkedin = 'https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/';
const github = 'https://github.com/Alvarosc90';
const valkiria = 'https://valkiria.tech/';
const trainia = 'https://trainia.valkiria.tech/';
const capemi = 'https://capemi.ar/';

const navigation = [
  ['about', 'Perfil'],
  ['experience', 'Experiencia'],
  ['products', 'Productos'],
  ['stack', 'Stack'],
  ['contact', 'Contacto'],
];

const products = [
  {
    id: 'erp',
    index: '01',
    eyebrow: 'INDUSTRIA',
    title: 'Valkiria ERP',
    headline: 'ERP industrial modular.',
    description:
      'Producción, mantenimiento, inventario, compras, calidad, finanzas, logística, RRHH, accesos e integraciones en una misma plataforma.',
    proof: ['Producción', 'Mantenimiento', 'WMS', 'Compras', 'Calidad', 'RRHH'],
    accent: 'cyan',
    icon: FiSettings,
  },
  {
    id: 'trainia',
    index: '02',
    eyebrow: 'SPORT · FITNESS',
    title: 'TrainIA',
    headline: 'SaaS para gestión y entrenamiento.',
    description:
      'Multi-sede, membresías, pagos, asistencia, clases, caja, kiosco, comunidad, autogestión y herramientas para entrenadores y alumnos.',
    proof: ['Multi-sede', 'Pagos', 'QR', 'Caja', 'Coach IA', 'Autogestión'],
    accent: 'orange',
    icon: FiActivity,
    href: trainia,
  },
  {
    id: 'one',
    index: '03',
    eyebrow: 'AI BUSINESS OS',
    title: 'ValkirIA One',
    headline: 'IA y automatización para negocios.',
    description:
      'Agentes, CRM, WhatsApp, agenda, automatizaciones, marketing, reporting e integraciones dentro de un workspace por empresa.',
    proof: ['Agentes IA', 'CRM', 'WhatsApp', 'Agenda', 'Automatizaciones', 'Reporting'],
    accent: 'violet',
    icon: FiCpu,
  },
];

const experience = [
  {
    index: '01',
    visual: 'process',
    type: 'CAPEMI · PROCESOS Y GESTIÓN IT',
    title: 'Responsable de Procesos y Gestión IT',
    description:
      'Desarrollo soluciones tecnológicas para áreas operativas y administrativas. Automatización de procesos, soporte a decisiones, infraestructura, proveedores e integración entre necesidades de negocio y tecnología.',
    tags: ['Procesos', 'IT', 'Automatización', 'Infraestructura', 'Proveedores'],
    icon: FiLayers,
    link: capemi,
    linkLabel: 'capemi.ar',
  },
  {
    index: '02',
    visual: 'central',
    type: 'CAPEMI · DESARROLLO FULL STACK',
    title: 'Sistema Central CAPEMI',
    description:
      'Plataforma interna para centralizar producción, mantenimiento, inventario, reclamos, accesos y circuitos por sector, con roles, trazabilidad y datos compartidos.',
    tags: ['React', 'Node.js', 'SQL', 'Roles', 'Trazabilidad'],
    icon: FiBox,
  },
  {
    index: '03',
    visual: 'web',
    type: 'CAPEMI · WEB Y COMUNICACIÓN',
    title: 'capemi.ar, rebranding y presencia digital',
    description:
      'Trabajo sobre el sitio institucional, actualización de presencia digital, contenidos y piezas vinculadas a comunicación, marketing y posicionamiento de la empresa.',
    tags: ['Web', 'Contenido', 'Rebranding', 'Marketing digital'],
    icon: FiGlobe,
    link: capemi,
    linkLabel: 'Visitar capemi.ar',
  },
  {
    index: '04',
    visual: 'bi',
    type: 'CAPEMI · BUSINESS INTELLIGENCE',
    title: 'Dashboards e indicadores en Power BI',
    description:
      'Tableros para producción, mantenimiento y seguimiento operativo: disponibilidad, MTBF, MTTR, fallas, piezas procesadas, actividades y otros indicadores de gestión.',
    tags: ['Power BI', 'DAX', 'Power Query', 'SQL', 'KPIs'],
    icon: FiBarChart2,
  },
  {
    index: '05',
    visual: 'odoo',
    type: 'CAPEMI · ODOO E INTEGRACIONES',
    title: 'Conector Odoo y reporting',
    description:
      'Consultas y cruces sobre ventas, compras, inventario, MRP, facturación y productos. Exportación de registros, reporting y conexión con procesos de planta.',
    tags: ['Odoo', 'Node.js', 'Express', 'APIs', 'Excel'],
    icon: FiDatabase,
  },
  {
    index: '06',
    visual: 'food',
    type: 'CAPEMI · AUTOMATIZACIÓN OPERATIVA',
    title: 'Gestión de comedor interno',
    description:
      'Sistema para menús, pedidos por empleado, demanda diaria y control de entrega mediante lectura de código de barras.',
    tags: ['React', 'Node.js', 'SQL', 'Código de barras'],
    icon: FiCheckCircle,
  },
  {
    index: '07',
    visual: 'people',
    type: 'CAPEMI · RRHH',
    title: 'Sistema de clima laboral',
    description:
      'Encuestas internas con autenticación, carga de respuestas, visualización estadística y seguimiento de resultados.',
    tags: ['React', 'Encuestas', 'Autenticación', 'Reportes'],
    icon: FiUsers,
  },
  {
    index: '08',
    visual: 'analytics',
    type: 'DATOS · ANÁLISIS',
    title: 'Análisis de producción, mantenimiento y datos',
    description:
      'Trabajos de análisis sobre ventas, rendimiento productivo, fallas de máquinas, piezas granalladas, actividades y datasets con Python, Excel y BI.',
    tags: ['Python', 'Excel', 'Power BI', 'SQL', 'Análisis de datos'],
    icon: FiBarChart2,
  },
  {
    index: '09',
    visual: 'agents',
    type: 'IA · DESARROLLO',
    title: 'Orquestación de agentes',
    description:
      'Flujo de agentes especializados para revisar frontend, backend, QA, consistencia visual, documentación y contexto de distintos proyectos en paralelo.',
    tags: ['Agentes IA', 'Frontend', 'Backend', 'QA', 'GitHub'],
    icon: FiCpu,
  },
  {
    index: '10',
    visual: 'automation',
    type: 'AUTOMATIZACIÓN · INTEGRACIONES',
    title: 'WhatsApp, n8n, Odoo e IA local',
    description:
      'Flujos conversacionales para consultar sistemas, interpretar pedidos y ejecutar acciones mediante webhooks, APIs y modelos locales.',
    tags: ['n8n', 'WhatsApp', 'Odoo', 'Ollama', 'Qwen', 'Webhooks'],
    icon: FiMessageSquare,
  },
  {
    index: '11',
    visual: 'infra',
    type: 'INFRAESTRUCTURA · DEPLOY',
    title: 'VPS, Docker, Cloudflare y entornos',
    description:
      'Configuración de entornos de desarrollo, staging y producción, despliegues, Docker, Linux, túneles Cloudflare, dominios, SSL y servicios auxiliares.',
    tags: ['Docker', 'Linux', 'VPS', 'Cloudflare', 'GitHub'],
    icon: FiServer,
  },
  {
    index: '12',
    visual: 'vision',
    type: 'IA · COMPUTER VISION',
    title: 'Visión artificial con cámaras IP',
    description:
      'Detección y conteo de personas y vehículos utilizando streams RTSP, zonas de interés y modelos YOLO.',
    tags: ['Python', 'YOLO', 'RTSP', 'Computer Vision'],
    icon: FiZap,
  },
];

const capabilities = [
  {
    icon: FiLayers,
    title: 'Procesos y producto',
    text: 'Relevamiento, diseño funcional, priorización y mejora continua.',
    tools: ['Discovery', 'UX operativo', 'Roadmap', 'Roles'],
  },
  {
    icon: FiCode,
    title: 'Desarrollo full stack',
    text: 'Aplicaciones web, SaaS, APIs y lógica de negocio.',
    tools: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express'],
  },
  {
    icon: FiCpu,
    title: 'IA y agentes',
    text: 'Agentes especializados, modelos locales y automatización asistida.',
    tools: ['OpenAI', 'Ollama', 'Qwen', 'n8n', 'YOLO'],
  },
  {
    icon: FiDatabase,
    title: 'Datos y BI',
    text: 'Modelado, consultas, indicadores y visualización.',
    tools: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Excel'],
  },
  {
    icon: FiMessageSquare,
    title: 'Integraciones',
    text: 'Conexión entre ERP, mensajería, pagos y servicios.',
    tools: ['Odoo', 'WhatsApp', 'Mercado Pago', 'SMTP', 'REST APIs'],
  },
  {
    icon: FiServer,
    title: 'Infraestructura',
    text: 'Deploy, entornos, servidores y operación técnica.',
    tools: ['Docker', 'Linux', 'VPS', 'Cloudflare', 'GitHub'],
  },
];

function ExperienceIllustration({ kind, title }: { kind: string; title: string }) {
  const meta: Record<string, { label: string; icon: ReactNode }> = {
    process: { label: 'PROCESOS · IT', icon: <FiLayers /> },
    central: { label: 'SISTEMA CENTRAL', icon: <FiBox /> },
    web: { label: 'WEB · BRAND', icon: <FiGlobe /> },
    bi: { label: 'POWER BI · KPIs', icon: <FiBarChart2 /> },
    odoo: { label: 'ODOO · ERP', icon: <FiDatabase /> },
    food: { label: 'OPERACIÓN · COMEDOR', icon: <FiCheckCircle /> },
    people: { label: 'RRHH · CLIMA', icon: <FiUsers /> },
    analytics: { label: 'DATA · ANÁLISIS', icon: <FiBarChart2 /> },
    agents: { label: 'AGENTES · QA', icon: <FiCpu /> },
    automation: { label: 'N8N · AUTOMATION', icon: <FiMessageSquare /> },
    infra: { label: 'INFRA · DEPLOY', icon: <FiServer /> },
    vision: { label: 'COMPUTER VISION', icon: <FiZap /> },
  };

  const visual = meta[kind] ?? meta.process;

  const scene = () => {
    switch (kind) {
      case 'process':
        return <div className="scene-process">
          <span>NECESIDAD</span><i /><span>PROCESO</span><i /><span>SOLUCIÓN</span><i /><span>MEJORA</span>
        </div>;
      case 'central':
        return <div className="scene-central">
          <div className="central-hub">CORE</div>
          {['PROD', 'MANT', 'INV', 'RRHH'].map(item => <span key={item}>{item}</span>)}
        </div>;
      case 'web':
        return <div className="scene-browser">
          <div className="browser-bar"><i /><i /><i /></div>
          <div className="browser-hero"><b>CAPEMI</b><span>INDUSTRIA · TECNOLOGÍA</span></div>
          <div className="browser-lines"><i /><i /><i /></div>
        </div>;
      case 'bi':
        return <div className="scene-bi">
          <div className="bi-card"><small>OEE</small><b>86%</b></div>
          <div className="scene-bars">{[42, 68, 55, 82, 73, 91].map((height, index) => <i key={index} style={{ height: height + '%' }} />)}</div>
          <div className="scene-line"><span /><span /><span /><span /></div>
        </div>;
      case 'odoo':
        return <div className="scene-odoo">
          <div className="odoo-core">ODOO</div>
          {['MRP', 'INV', 'SALE', 'API'].map(item => <span key={item}>{item}</span>)}
          <i className="odoo-link l1" /><i className="odoo-link l2" /><i className="odoo-link l3" /><i className="odoo-link l4" />
        </div>;
      case 'food':
        return <div className="scene-food">
          <div className="menu-sheet"><b>MENÚ</b><span /><span /><span /></div>
          <div className="qr-grid">{Array.from({ length: 16 }).map((_, index) => <i key={index} />)}</div>
        </div>;
      case 'people':
        return <div className="scene-people">
          <div className="people-row">{[1,2,3,4].map(item => <i key={item} />)}</div>
          <div className="survey-bars"><span /><span /><span /></div>
        </div>;
      case 'analytics':
        return <div className="scene-analytics">
          <div className="axis x" /><div className="axis y" />
          {[['18%','24%'],['36%','61%'],['53%','42%'],['69%','72%'],['82%','35%']].map(([left,bottom], index) => <i key={index} style={{ left, bottom }} />)}
          <div className="trend-line" />
        </div>;
      case 'agents':
        return <div className="scene-agents">
          <div className="agent-core">AI</div>
          {['FE', 'BE', 'QA', 'DOC'].map((item, index) => <span className={'agent-node n' + index} key={item}>{item}</span>)}
        </div>;
      case 'automation':
        return <div className="scene-automation">
          {['WA', 'N8N', 'AI', 'ODOO'].map((item, index) => <div key={item}><span>{item}</span>{index < 3 && <i />}</div>)}
        </div>;
      case 'infra':
        return <div className="scene-infra">
          <div className="rack">{[1,2,3,4].map(item => <i key={item} />)}</div>
          <div className="cloud">CLOUD</div>
          <span className="infra-path" />
        </div>;
      case 'vision':
        return <div className="scene-vision">
          <div className="camera-frame">
            <span className="bbox b1">PERSON</span>
            <span className="bbox b2">VEHICLE</span>
            <i className="crosshair h" /><i className="crosshair v" />
          </div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className={'experience-illustration illustration-' + kind} role="img" aria-label={'Ilustración representativa: ' + title}>
      <div className="illustration-top">
        <span>{visual.icon}</span>
        <small>{visual.label}</small>
      </div>
      <div className="illustration-scene" aria-hidden="true">{scene()}</div>
    </div>
  );
}

function ProductVisual({ productId }: { productId: string }) {
  if (productId === 'erp') {
    return (
      <div className="product-ui erp-ui" aria-hidden="true">
        <div className="ui-bar"><span>VALKIRIA ERP</span><b>OPERACIÓN / EN VIVO</b></div>
        <div className="erp-metrics">
          <div><small>PRODUCCIÓN</small><strong>12</strong><span>órdenes activas</span></div>
          <div><small>MÁQUINAS</small><strong>08</strong><span>en seguimiento</span></div>
          <div><small>MANTENIMIENTO</small><strong>04</strong><span>prioridades</span></div>
        </div>
        <div className="erp-grid">
          <div className="machine-list">
            {['INYECTORA 01', 'PRENSA 04', 'MEZCLADO 02', 'TERMINACIÓN'].map((name, index) => (
              <div key={name}><i className={index === 2 ? 'warn' : ''} /><span>{name}<small>{index === 2 ? 'Setup' : 'Produciendo'}</small></span><b>{[92, 84, 61, 88][index]}%</b></div>
            ))}
          </div>
          <div className="mini-chart">
            <span>Producción por hora</span>
            <div>{[52, 76, 64, 88, 73, 96, 82, 91].map((height, index) => <i key={index} style={{ height: height + '%' }} />)}</div>
          </div>
        </div>
      </div>
    );
  }

  if (productId === 'trainia') {
    return (
      <div className="product-ui trainia-ui" aria-hidden="true">
        <div className="trainia-phone">
          <div className="phone-top"><b>TrainIA</b><span>AS</span></div>
          <small>ENTRENAMIENTO DE HOY</small>
          <h4>Potencia +<br /><em>velocidad.</em></h4>
          <div className="session-card"><span>55 MIN · INTERMEDIO</span><strong>8 bloques</strong><button>INICIAR SESIÓN</button></div>
          <div className="phone-stats"><span><b>14</b> clases</span><span><b>82%</b> asistencia</span></div>
        </div>
        <div className="trainia-panel">
          <span>GESTIÓN + ENTRENAMIENTO</span>
          <strong>Socios.<br />Pagos.<br />Comunidad.</strong>
          <div><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-ui one-ui" aria-hidden="true">
      <div className="one-sidebar"><b>V</b>{['CMD', 'CRM', 'AI', 'AUT', 'REP'].map(item => <span key={item}>{item}</span>)}</div>
      <div className="one-main">
        <div className="ui-bar"><span>COMMAND CENTER</span><b>WORKSPACE ACTIVO</b></div>
        <div className="agent-grid">
          <div className="agent-primary"><small>AGENTE PRINCIPAL</small><strong>Operations Agent</strong><p>Contexto, herramientas e integraciones.</p><span><i /> ONLINE</span></div>
          <div><small>LEADS</small><strong>24</strong><span>esta semana</span></div>
          <div><small>AUTOMATIZACIONES</small><strong>18</strong><span>12 activas</span></div>
          <div className="one-flow"><small>FLUJO</small><p>WhatsApp → Agente → CRM → Agenda</p></div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [state, handleSubmit] = useForm('xyzgyvpp');

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-copy">
        <span className="eyebrow">05 / CONTACTO</span>
        <h2>¿Trabajamos juntos?</h2>
        <p>Desarrollo, automatización, integraciones, datos, IA o producto.</p>
        <div className="contact-links">
          <a href={linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
          <a href={github} target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
          <a href={valkiria} target="_blank" rel="noopener noreferrer"><FiGlobe /> Valkiria Project <FiArrowUpRight /></a>
        </div>
      </div>

      {state.succeeded ? (
        <div className="success-message" role="status">
          <FiCheckCircle />
          <h3>Mensaje recibido.</h3>
          <p>Gracias. Te respondo por email.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>INICIAR CONVERSACIÓN</span><small>Respuesta por email</small></div>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" autoComplete="name" placeholder="Tu nombre" required />
          <ValidationError prefix="Nombre" field="name" errors={state.errors} />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Proyecto o necesidad</label>
          <textarea id="message" name="message" rows={5} placeholder="Contame brevemente qué necesitás." required />
          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
          <ValidationError errors={state.errors} />
          <button className="button primary" disabled={state.submitting} type="submit">
            {state.submitting ? 'Enviando…' : 'Enviar mensaje'} <FiArrowUpRight />
          </button>
        </form>
      )}
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme remains usable when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Saltar al contenido</a>

      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Álvaro Soria, inicio">
          <span className="monogram">AS<span>.</span></span>
          <span>ÁLVARO SORIA<small>SOFTWARE · DATA · AI · AUTOMATION</small></span>
        </a>

        <nav id="main-nav" className={menu ? 'navigation open' : 'navigation'} aria-label="Navegación principal">
          {navigation.map(([id, label]) => (
            <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a className="header-contact" href="#contact">Contacto <FiArrowUpRight /></a>
          <button
            className="icon-button menu-toggle"
            aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menu}
            aria-controls="main-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero section" id="inicio">
          <div className="hero-linkedin-layout">
            <motion.div
              className="hero-linkedin-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="availability"><i /> DISPONIBLE PARA PROYECTOS FREELANCE Y COLABORACIONES</div>
              <span className="eyebrow">SOFTWARE · DATA · AI · AUTOMATION</span>
              <h1>Software, datos e IA<br />aplicados a <em>procesos reales.</em></h1>
              <p className="hero-description">
                Desarrollo sistemas internos, productos SaaS, dashboards, automatizaciones e integraciones.
                Desde el relevamiento hasta producción.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#experience">Ver experiencia <FiArrowUpRight /></a>
                <a className="button ghost" href="#products">Productos propios <FiArrowRight /></a>
                <a className="text-action" href={cv} download="CV-Alvaro-Soria.pdf"><FiDownload /> Descargar CV</a>
              </div>

              <div className="hero-linkedin-tags" aria-label="Especialidades">
                <span>Full Stack</span>
                <span>Power BI</span>
                <span>Odoo</span>
                <span>AI Agents</span>
                <span>n8n</span>
                <span>Infraestructura</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-portrait-stage"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              <div className="hero-portrait-glow" aria-hidden="true" />
              <div className="hero-portrait-large">
                <img src={portrait} alt="Álvaro Soria" fetchPriority="high" />
              </div>
            </motion.div>

            <motion.aside
              className="hero-linkedin-card"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <span className="eyebrow">PERFIL PROFESIONAL</span>
              <h2>Álvaro Soria</h2>
              <p className="hero-role-main">Responsable de Procesos y Gestión IT</p>
              <p className="hero-role-detail">
                Desarrollo Full Stack · Business Intelligence · Automatización · Inteligencia Artificial
              </p>

              <div className="hero-profile-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
                <a href={github} target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
              </div>

              <div className="hero-profile-highlights">
                <div><span>CAPEMI</span><strong>Procesos + Gestión IT</strong></div>
                <div><span>POWER BI</span><strong>Dashboards + KPIs</strong></div>
                <div><span>ODOO</span><strong>Integraciones + Reporting</strong></div>
                <div><span>VALKIRIA</span><strong>Productos propios</strong></div>
              </div>

              <div className="hero-agent-line">
                <span>ORQUESTACIÓN DE AGENTES</span>
                <strong>Frontend · Backend · QA · Docs</strong>
              </div>
            </motion.aside>
          </div>

          <div className="hero-marquee" aria-label="Áreas de trabajo">
            {['FULL STACK', 'POWER BI', 'ODOO', 'AI AGENTS', 'N8N', 'DATA', 'DOCKER', 'CLOUDFLARE'].map(item => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-number">01</div>
          <div className="section-heading">
            <span className="eyebrow">PERFIL</span>
            <h2>Desarrollo, datos, automatización e infraestructura.</h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <p>
                Trabajo en la intersección entre operación y tecnología. Relevo procesos, desarrollo soluciones,
                conecto sistemas, analizo datos y acompaño la implementación.
              </p>
              <p>
                En CAPEMI trabajo sobre procesos y gestión IT. En paralelo desarrollo productos propios dentro de Valkiria Project.
              </p>
              <div className="about-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
                <a href={cv} download="CV-Alvaro-Soria.pdf">Descargar CV <FiDownload /></a>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-top"><span>CAPEMI</span><span>2026 — ACTUALIDAD</span></div>
              <h3>Responsable de Procesos<br />y Gestión IT</h3>
              <div className="experience-grid">
                <span>Desarrollo interno</span>
                <span>Automatización</span>
                <span>Power BI</span>
                <span>Odoo</span>
                <span>Infraestructura</span>
                <span>Proveedores IT</span>
              </div>
            </div>
          </div>

          <div className="method-compact">
            {[
              ['01', 'Entender', 'Proceso y necesidad.'],
              ['02', 'Construir', 'Solución e integración.'],
              ['03', 'Mejorar', 'Medir, corregir y escalar.'],
            ].map(([number, title, text]) => (
              <div key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>
            ))}
          </div>
        </section>

        <section id="experience" className="section work-section">
          <div className="section-number">02</div>
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">EXPERIENCIA Y PROYECTOS</span>
              <h2>Trabajo realizado.</h2>
            </div>
            <p>CAPEMI, sistemas internos, BI, datos, automatización, integraciones, IA e infraestructura.</p>
          </div>

          <div className="experience-projects">
            {experience.map((item) => {
              const Icon = item.icon;
              return (
                <article className="experience-project" key={item.index}>
                  <ExperienceIllustration kind={item.visual} title={item.title} />
                  <div className="experience-project-content">
                    <div className="experience-project-top">
                      <span>{item.index}</span>
                      <Icon />
                    </div>
                    <span className="eyebrow">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    {item.link && (
                      <a className="experience-link" href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.linkLabel} <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="github-archive">
            <div>
              <span className="eyebrow">OTROS PROYECTOS</span>
              <h3>Web, e-commerce, análisis de datos y aprendizaje técnico.</h3>
              <p>El repositorio de GitHub también conserva proyectos anteriores de desarrollo web, análisis, machine learning y experimentación.</p>
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">Ver GitHub completo <FiGithub /><FiArrowUpRight /></a>
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="section products-header">
            <div className="section-number">03</div>
            <div className="section-heading split-heading">
              <div><span className="eyebrow">PRODUCTOS PROPIOS · VALKIRIA PROJECT</span><h2>Productos actuales.</h2></div>
              <p>Valkiria ERP, TrainIA y ValkirIA One.</p>
            </div>
          </div>

          <div className="product-list">
            {products.map((product) => {
              const ProductIcon = product.icon;
              return (
                <article className={'product-story ' + product.accent} key={product.id}>
                  <div className="section product-story-inner">
                    <div className="product-copy">
                      <div className="product-meta"><span>{product.index}</span><span>{product.eyebrow}</span></div>
                      <div className="product-name"><ProductIcon /><span>{product.title}</span></div>
                      <h3>{product.headline}</h3>
                      <p>{product.description}</p>
                      <div className="product-proof">{product.proof.map(item => <span key={item}>{item}</span>)}</div>
                      <div className="product-actions">
                        <a href={valkiria} target="_blank" rel="noopener noreferrer">Valkiria Project <FiArrowUpRight /></a>
                        {product.href && <a href={product.href} target="_blank" rel="noopener noreferrer">Abrir TrainIA <FiArrowUpRight /></a>}
                      </div>
                    </div>
                    <ProductVisual productId={product.id} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-number">04</div>
          <div className="section-heading split-heading">
            <div><span className="eyebrow">STACK</span><h2>Herramientas que uso.</h2></div>
            <p>Desarrollo, datos, IA, integraciones e infraestructura.</p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <div className="capability-top"><Icon /><span>0{index + 1}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tag-row">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                </article>
              );
            })}
          </div>

          <div className="delivery-strip">
            <div><FiUsers /><span><strong>Relevar</strong><small>Proceso y usuarios</small></span></div>
            <i />
            <div><FiLayers /><span><strong>Diseñar</strong><small>Flujo y arquitectura</small></span></div>
            <i />
            <div><FiCode /><span><strong>Desarrollar</strong><small>Frontend y backend</small></span></div>
            <i />
            <div><FiCheckCircle /><span><strong>Validar</strong><small>QA y operación</small></span></div>
            <i />
            <div><FiServer /><span><strong>Desplegar</strong><small>Producción e iteración</small></span></div>
          </div>

          <div className="tech-cloud" aria-label="Tecnologías">
            {[
              'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Python', 'SQL', 'MySQL', 'MariaDB',
              'Power BI', 'DAX', 'Power Query', 'Docker', 'Linux', 'GitHub', 'Cloudflare', 'n8n', 'Odoo',
              'Ollama', 'Qwen', 'OpenAI', 'YOLO', 'REST APIs', 'Webhooks', 'Mercado Pago',
            ].map(item => <span key={item}>{item}</span>)}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#inicio"><span>AS.</span><strong>Álvaro Soria</strong></a>
          <p>Software · Datos · IA · Automatización.</p>
        </div>
        <div className="footer-nav">
          <a href={capemi} target="_blank" rel="noopener noreferrer">CAPEMI <FiArrowUpRight /></a>
          <a href={valkiria} target="_blank" rel="noopener noreferrer">Valkiria Project <FiArrowUpRight /></a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
        </div>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Álvaro Soria</span><a href="#inicio">Volver arriba <FiArrowUpRight /></a></div>
      </footer>
    </MotionConfig>
  );
}
