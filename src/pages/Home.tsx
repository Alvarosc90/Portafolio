import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiArrowUpRight, FiArrowDown, FiCode, FiCpu, FiDatabase, FiLayers, FiSun, FiMoon, FiMenu, FiX, FiDownload, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import portrait from '../images/PortafolioProfile1.webp';
import platform from '../images/centralizado1.png';
import dining from '../images/Comedor1.png';
import survey from '../images/encuesta1.png';
import cv from '../images/CV - Alvaro Soria.pdf';

const linkedin = 'https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/';
const navigation = [['about', 'Perfil'], ['projects', 'Proyectos'], ['skills', 'Stack'], ['contact', 'Contacto']];
const skills = [
  { icon: FiCode, title: 'Desarrollo full stack', text: 'Aplicaciones a medida, desde la interfaz hasta la lógica de negocio.', tools: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'Sequelize', 'APIs REST', 'Socket.IO', 'JWT'] },
  { icon: FiCpu, title: 'IA y automatización', text: 'Flujos que conectan herramientas, modelos de lenguaje y operación.', tools: ['n8n', 'Ollama', 'ChatGPT', 'Llama', 'Qwen', 'WhatsApp API', 'Webhooks', 'Integración con Odoo', 'Python', 'YOLO'] },
  { icon: FiDatabase, title: 'Datos y business intelligence', text: 'Del dato operativo a indicadores que ayudan a tomar decisiones.', tools: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'MySQL', 'MariaDB', 'Excel', 'Modelado de datos', 'KPIs'] },
  { icon: FiLayers, title: 'Infraestructura y gestión IT', text: 'Implementación, soporte y mejora continua de soluciones empresariales.', tools: ['Docker', 'Linux', 'VPS', 'Git / GitHub', 'Netlify', 'SSH', 'VPN', 'Redes', 'Procesos', 'Gestión de proveedores'] },
];
const projects = [
  { title: 'Una operación. Un sistema conectado.', category: 'Desarrollo', label: 'Sistema integral · CAPEMI', image: platform, description: 'Desarrollo de una plataforma interna que reúne procesos de producción, mantenimiento, inventario y gestión por sector.', detail: 'Interfaces por área, permisos por rol, seguimiento de reclamos y trazabilidad de tareas. Trabajo sobre la integración de datos y circuitos que antes se gestionaban por separado.', tags: ['React', 'Node.js', 'MySQL', 'Roles y permisos'] },
  { title: 'Automatización conversacional con IA', category: 'IA y automatización', label: 'Integraciones · En desarrollo', description: 'Integración de WhatsApp, n8n, Odoo y modelos locales para acercar información de gestión a las personas que la necesitan.', detail: 'Flujos con webhooks, consultas a sistemas y ejecución de modelos con Ollama en un VPS. El trabajo incluye enrutamiento de mensajes y ajustes de disponibilidad e interpretación.', tags: ['n8n', 'WhatsApp API', 'Ollama', 'Odoo'] },
  { title: 'Indicadores para entender la operación', category: 'Datos', label: 'Business intelligence · CAPEMI', description: 'Tableros en Power BI para mantenimiento, producción y seguimiento de actividades, con métricas construidas desde los registros operativos.', detail: 'Modelado de datos y DAX para disponibilidad, MTBF y MTTR; seguimiento de fallas, piezas procesadas y actividades. Revisión de períodos y filtros para que cada indicador represente el proceso correcto.', tags: ['Power BI', 'DAX', 'SQL', 'KPIs'] },
  { title: 'Visión artificial aplicada a cámaras', category: 'IA y automatización', label: 'Visión artificial · En desarrollo', description: 'Detección y conteo de personas y vehículos con cámaras IP, zonas de interés y reglas de cruce.', detail: 'Integración de video RTSP y modelos YOLO. Ajuste de zonas y secuencias de cruce para distinguir ingresos y egresos, con validación de resultados en situaciones reales.', tags: ['Python', 'YOLO', 'RTSP', 'Análisis de video'] },
  { title: 'Del pedido a la entrega del almuerzo', category: 'Desarrollo', label: 'Gestión de comedor', image: dining, description: 'Aplicación para organizar menús, pedidos por empleado y demanda diaria de cocina.', detail: 'Circuito de pedidos y control de entrega mediante lectura de código de barras. Una herramienta diseñada alrededor del uso diario de empleados y personal de comedor.', tags: ['React', 'Node.js', 'SQL', 'Código de barras'] },
  { title: 'Escuchar al equipo, ordenar las respuestas', category: 'Desarrollo', label: 'Clima laboral', image: survey, description: 'Sistema de encuestas internas con autenticación y visualización de resultados.', detail: 'Carga de respuestas y lectura estadística para acompañar el análisis de clima laboral y el seguimiento de acciones de gestión.', tags: ['React', 'Encuestas', 'Autenticación', 'Reportes'] },
];
const filters = ['Todos', 'Desarrollo', 'IA y automatización', 'Datos'];

function Contact() {
  const [state, handleSubmit] = useForm('xyzgyvpp');
  return <section id="contact" className="section contact-section">
    <div className="contact-heading"><span className="eyebrow">04 / CONVERSEMOS</span><h2>¿Qué podemos<br /><em>resolver juntos?</em></h2><p>Un proceso que necesita orden, una aplicación a medida o datos que todavía no cuentan toda la historia.</p><div className="social-links"><a href={linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a><a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a></div></div>
    {state.succeeded ? <div className="success-message" role="status"><FiArrowUpRight /><h3>Gracias por escribirme.</h3><p>Recibí tu mensaje. Te respondo para que conversemos sobre el proyecto.</p></div> : <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Tu nombre</label><input id="name" name="name" autoComplete="name" placeholder="¿Cómo te llamás?" required /><ValidationError prefix="Nombre" field="name" errors={state.errors} />
      <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required /><ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Contame sobre el desafío</label><textarea id="message" name="message" rows={4} placeholder="Qué necesitás resolver y en qué contexto…" required /><ValidationError prefix="Mensaje" field="message" errors={state.errors} />
      <ValidationError errors={state.errors} /><button className="button primary" disabled={state.submitting} type="submit">{state.submitting ? 'Enviando…' : 'Enviar mensaje'}<FiArrowUpRight /></button>
    </form>}
  </section>;
}

export default function Home() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('Todos');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme remains usable without storage. */ }
  }, [theme]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Saltar al contenido</a>
    <header className="site-header"><a href="#inicio" className="brand" aria-label="Álvaro Soria, inicio"><span className="monogram">as<span>.</span></span><span>ÁLVARO SORIA<small>DESARROLLO / DATOS / IA</small></span></a>
      <nav id="main-nav" className={menu ? 'navigation open' : 'navigation'} aria-label="Navegación principal">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button><a className="header-contact" href="#contact">Hablemos <FiArrowUpRight /></a><button className="icon-button menu-toggle" aria-label={menu ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu(!menu)}>{menu ? <FiX /> : <FiMenu />}</button></div>
    </header>
    <main id="main"><section className="hero section" id="inicio">
      <div className="hero-topline"><span className="eyebrow">PORTAFOLIO / ÁLVARO SORIA</span><span>Córdoba, Argentina</span></div>
      <div className="hero-layout"><motion.div className="hero-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><p className="hero-role">Responsable de Procesos y Gestión IT</p><h1>Conecto procesos,<br />datos y <em>tecnología.</em></h1><p className="hero-description">Transformo necesidades de negocio en aplicaciones, automatizaciones e inteligencia para la operación. Del primer relevamiento a una solución que se usa todos los días.</p><div className="hero-buttons"><a className="button primary" href="#projects">Explorar proyectos <FiArrowUpRight /></a><a className="button secondary" href={cv} download="CV-Alvaro-Soria.pdf"><FiDownload /> Descargar CV</a></div><div className="hero-signature"><span>FULL STACK DEVELOPER</span><span>DATA & AI</span><span>PROCESS THINKING</span></div></motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}><div className="portrait-frame"><span className="portrait-index">AS / 01</span><img src={portrait} alt="Álvaro Soria" fetchPriority="high" /><div className="portrait-caption"><strong>Entender. Construir. Mejorar.</strong><span>Tecnología con contexto de negocio.</span></div></div><div className="integration-strip"><FiCode /><span>Desarrollo</span><i /><FiDatabase /><span>Datos</span><i /><FiCpu /><span>IA</span></div></motion.div></div>
      <a className="scroll-cue" href="#about"><FiArrowDown /> Conocé mi enfoque</a>
    </section>
    <section id="about" className="section about-section"><div className="section-intro"><span className="eyebrow">01 / PERFIL</span><h2>La tecnología funciona mejor<br />cuando entendés <em>el proceso.</em></h2></div><div className="about-layout"><div className="about-copy"><p>Trabajo en la intersección entre desarrollo, datos y gestión. Me involucro en la operación para entender qué necesita cada área y convertirlo en herramientas concretas.</p><p>En CAPEMI combino desarrollo full stack, automatización, análisis de datos e infraestructura. Mi foco está en conectar sistemas, ordenar información y acompañar a quienes los utilizan.</p><a href={linkedin} className="text-link" target="_blank" rel="noopener noreferrer">Mi recorrido en LinkedIn <FiArrowUpRight /></a></div><article className="experience"><div className="experience-meta"><span>CAPEMI</span><span>FEB. 2026 — ACTUALIDAD</span></div><h3>Responsable de Procesos<br />y Gestión IT</h3><ul><li>Desarrollo de aplicaciones internas e integración entre áreas.</li><li>Indicadores de gestión y análisis para la toma de decisiones.</li><li>Automatización, procedimientos y mejora de circuitos de trabajo.</li><li>Infraestructura, soporte funcional y gestión de proveedores IT.</li></ul></article></div></section>
    <section id="projects" className="section projects-section"><div className="section-intro split-intro"><div><span className="eyebrow">02 / TRABAJO SELECCIONADO</span><h2>Problemas reales.<br /><em>Soluciones concretas.</em></h2></div><p>Aplicaciones empresariales, datos e integraciones. Una selección de mi trabajo y de los desarrollos que estoy explorando.</p></div><div className="project-filters" role="group" aria-label="Filtrar proyectos">{filters.map(item => <button key={item} className={filter === item ? 'selected' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="sr-only" role="status">{projects.filter(p => filter === 'Todos' || p.category === filter).length} proyectos</p>
      <div className="project-grid">{projects.filter(p => filter === 'Todos' || p.category === filter).map((project) => <article key={project.title} className={`project-card ${project === projects[0] && filter === 'Todos' ? 'featured' : ''}`}>
        {project.image ? <div className="project-image"><img src={project.image} alt={`Captura del proyecto: ${project.label}`} loading="lazy" /></div> : <div className="project-domain"><span>{project.category === 'Datos' ? 'BUSINESS INTELLIGENCE' : project.title.includes('Visión') ? 'COMPUTER VISION' : 'CONNECTED SYSTEMS'}</span>{project.category === 'Datos' ? <FiDatabase /> : <FiCpu />}</div>}
        <div className="project-body"><span className="eyebrow">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><details><summary>Alcance del proyecto <FiArrowRight /></summary><p>{project.detail}</p></details></div>
      </article>)}</div></section>
    <section id="skills" className="section skills-section"><div className="section-intro split-intro"><div><span className="eyebrow">03 / STACK & HABILIDADES</span><h2>Un stack conectado.<br /><em>De punta a punta.</em></h2></div><p>Elijo las herramientas según el problema: construir, integrar, automatizar y medir.</p></div><div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><div className="skill-top"><group.icon /><span>0{index + 1}</span></div><h3>{group.title}</h3><p>{group.text}</p><div className="tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div><div className="method"><h3>Cómo trabajo</h3>{[['01', 'Entender', 'Relevar necesidades y prioridades con quienes viven el proceso.'], ['02', 'Construir', 'Diseñar, desarrollar e integrar una solución aplicable.'], ['03', 'Mejorar', 'Validar con usuarios, medir y ajustar sobre la operación.']].map(([n, title, text]) => <div key={n}><span>{n}</span><strong>{title}</strong><p>{text}</p></div>)}</div></section>
    <Contact /></main><footer className="site-footer"><a className="footer-name" href="#inicio">Álvaro Soria<span>.</span></a><p>Desarrollo, datos e IA con sentido de negocio.</p><div><span>© {new Date().getFullYear()}</span><a href="#inicio">Volver arriba <FiArrowUpRight /></a></div></footer>
  </MotionConfig>;
}
