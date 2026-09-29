import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
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

const navigation = [
  ['about', 'Perfil'],
  ['products', 'Productos'],
  ['work', 'Impacto'],
  ['stack', 'Stack'],
  ['contact', 'Contacto'],
];

const products = [
  {
    id: 'erp',
    index: '01',
    eyebrow: 'INDUSTRIA · OPERACIÓN',
    title: 'Valkiria ERP',
    headline: 'La operación industrial, conectada.',
    description:
      'ERP industrial modular para unir producción, mantenimiento, inventario, compras, calidad, finanzas, logística, RRHH y accesos sobre una misma realidad operativa.',
    proof: ['Producción y máquinas', 'Mantenimiento + pañol', 'Inventario / WMS', 'Compras y calidad', 'RRHH y accesos', 'Integraciones'],
    accent: 'cyan',
    icon: FiSettings,
  },
  {
    id: 'trainia',
    index: '02',
    eyebrow: 'SPORT · FITNESS · COMUNIDAD',
    title: 'TrainIA',
    headline: 'Gestión, entrenamiento y comunidad.',
    description:
      'SaaS multi-tenant para gimnasios, clubes, academias y escuelas deportivas. Membresías, pagos, asistencia, clases, caja, kiosco, comunidad y herramientas inteligentes para entrenadores y alumnos.',
    proof: ['Multi-sede', 'Membresías y pagos', 'QR y asistencia', 'Caja + kiosco', 'Coach IA', 'Portal de autogestión'],
    accent: 'orange',
    icon: FiActivity,
    href: trainia,
  },
  {
    id: 'one',
    index: '03',
    eyebrow: 'AI BUSINESS OS',
    title: 'ValkirIA One',
    headline: 'IA aplicada al trabajo real.',
    description:
      'Workspace para operar agentes, conversaciones, CRM, agenda, automatizaciones, marketing, reporting e integraciones manteniendo contexto y separación por empresa.',
    proof: ['Agentes especializados', 'CRM + WhatsApp', 'Agenda', 'Automatizaciones', 'Reporting', 'Control de plataforma'],
    accent: 'violet',
    icon: FiCpu,
  },
];

const capabilities = [
  {
    icon: FiLayers,
    title: 'Producto y procesos',
    text: 'Relevo la operación, detecto fricción y convierto el problema en un producto utilizable.',
    tools: ['Discovery', 'UX operativo', 'Roadmap', 'Roles y permisos'],
  },
  {
    icon: FiCode,
    title: 'Desarrollo full stack',
    text: 'Construyo aplicaciones web y SaaS desde frontend hasta APIs, autenticación y lógica de negocio.',
    tools: ['React', 'TypeScript', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    icon: FiZap,
    title: 'IA, agentes y automatización',
    text: 'Conecto modelos, agentes y flujos para reducir tareas repetitivas y acelerar decisiones.',
    tools: ['OpenAI', 'Ollama', 'Qwen', 'n8n', 'Webhooks'],
  },
  {
    icon: FiDatabase,
    title: 'Datos y BI',
    text: 'Modelo datos y diseño indicadores para que la operación pueda medirse y explicarse.',
    tools: ['Power BI', 'DAX', 'SQL', 'MySQL', 'Excel'],
  },
  {
    icon: FiMessageSquare,
    title: 'Integraciones',
    text: 'Uno sistemas que normalmente viven separados: ERP, mensajería, formularios, pagos y servicios internos.',
    tools: ['Odoo', 'WhatsApp', 'Mercado Pago', 'SMTP', 'APIs'],
  },
  {
    icon: FiServer,
    title: 'Infraestructura y deploy',
    text: 'Llevo la solución a producción y preparo el entorno para operar, probar y crecer.',
    tools: ['Docker', 'Linux', 'VPS', 'Cloudflare', 'GitHub'],
  },
];

const work = [
  {
    index: '01',
    type: 'EMPRESA · INDUSTRIA',
    title: 'Digitalización operativa en CAPEMI',
    description:
      'Desarrollo e integración de herramientas internas para producción, mantenimiento, inventario, asistencia, comedor, indicadores y otros circuitos de gestión.',
    result:
      'El foco es reemplazar información fragmentada por flujos trazables, roles claros y datos que puedan reutilizarse entre áreas.',
    tags: ['Aplicaciones internas', 'Procesos', 'SQL', 'Integración', 'Power BI'],
    icon: FiBox,
  },
  {
    index: '02',
    type: 'AUTOMATIZACIÓN · IA',
    title: 'Orquestación de agentes para construir más rápido',
    description:
      'Diseño un flujo de trabajo donde agentes especializados revisan frontend, backend, calidad y consistencia mientras el desarrollo avanza.',
    result:
      'La IA no reemplaza el criterio: se utiliza para paralelizar revisión, documentación, QA y tareas repetitivas sin perder contexto del proyecto.',
    tags: ['Agentes IA', 'QA', 'GitHub', 'Contexto de proyecto', 'Automatización'],
    icon: FiCpu,
  },
  {
    index: '03',
    type: 'INTEGRACIONES · NEGOCIO',
    title: 'Del mensaje a la acción',
    description:
      'Flujos que conectan WhatsApp, n8n, Odoo y modelos de IA para consultar información y ejecutar tareas dentro de procesos reales.',
    result:
      'La meta es que una conversación pueda transformarse en una consulta, una actualización o una acción de negocio sin duplicar carga manual.',
    tags: ['WhatsApp', 'n8n', 'Odoo', 'APIs', 'IA local'],
    icon: FiMessageSquare,
  },
  {
    index: '04',
    type: 'PRODUCTO · SAAS',
    title: 'Productos propios con operación real',
    description:
      'Valkiria ERP, TrainIA y ValkirIA One se diseñan como productos independientes, con roles, módulos, billing, despliegue y evolución continua.',
    result:
      'Trabajo el producto completo: arquitectura, experiencia, datos, infraestructura, integraciones, pruebas y feedback de uso.',
    tags: ['SaaS', 'Multi-tenant', 'Billing', 'UX', 'Deploy'],
    icon: FiGlobe,
  },
];

const principles = [
  ['01', 'Entender antes de automatizar', 'Primero identifico cómo funciona el proceso y dónde se pierde tiempo, información o control.'],
  ['02', 'Construir para uso real', 'Una solución tiene que sobrevivir al día a día: roles, errores, mobile, permisos y casos borde.'],
  ['03', 'Conectar, no aislar', 'El valor crece cuando aplicaciones, datos, IA e integraciones comparten contexto.'],
  ['04', 'Iterar con evidencia', 'Mido, reviso con usuarios y ajusto el producto sobre lo que realmente sucede en operación.'],
];

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
          <span>COMUNIDAD</span>
          <strong>Todo conectado.<br />Todo en movimiento.</strong>
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
          <div className="agent-primary"><small>AGENTE PRINCIPAL</small><strong>Operations Agent</strong><p>Contexto, herramientas e integraciones en un mismo flujo.</p><span><i /> ONLINE</span></div>
          <div><small>LEADS</small><strong>24</strong><span>+6 esta semana</span></div>
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
        <span className="eyebrow">05 / CONVERSEMOS</span>
        <h2>¿Tenés un proceso que<br /><em>debería funcionar mejor?</em></h2>
        <p>
          Puedo ayudarte a convertir una operación manual, una idea de producto o una integración pendiente
          en una solución concreta.
        </p>
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
          <p>Gracias por contarme el desafío. Te respondo para que veamos contexto, alcance y próximos pasos.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>INICIAR CONVERSACIÓN</span><small>Respuesta por email</small></div>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" autoComplete="name" placeholder="¿Cómo te llamás?" required />
          <ValidationError prefix="Nombre" field="name" errors={state.errors} />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">¿Qué querés resolver?</label>
          <textarea id="message" name="message" rows={5} placeholder="Proceso, idea, sistema o integración que necesitás mejorar…" required />
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
          <span>ÁLVARO SORIA<small>PRODUCT · SOFTWARE · AI</small></span>
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
          <a className="header-contact" href="#contact">Trabajemos juntos <FiArrowUpRight /></a>
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
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="availability"><i /> DISPONIBLE PARA PROYECTOS FREELANCE Y COLABORACIONES</div>
              <span className="eyebrow">PORTFOLIO / 2026</span>
              <h1>Construyo sistemas que convierten<br />procesos complejos en <em>productos útiles.</em></h1>
              <p className="hero-description">
                Desarrollo software, automatizaciones y soluciones con IA de punta a punta.
                Entiendo la operación, diseño el producto, conecto los sistemas y lo llevo a producción.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#products">Ver productos <FiArrowUpRight /></a>
                <a className="button ghost" href="#contact">Contame tu proyecto <FiArrowRight /></a>
                <a className="text-action" href={cv} download="CV-Alvaro-Soria.pdf"><FiDownload /> Descargar CV</a>
              </div>

              <div className="hero-proof">
                <div><strong>03</strong><span>productos propios<br />en evolución</span></div>
                <div><strong>360°</strong><span>producto, código,<br />datos y deploy</span></div>
                <div><strong>AI</strong><span>agentes y automatización<br />aplicados a operación</span></div>
              </div>
            </motion.div>

            <motion.div
              className="hero-command"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <div className="command-shell">
                <div className="command-top">
                  <div><i /><i /><i /></div>
                  <span>BUILD SYSTEM / ALVARO SORIA</span>
                  <b>ONLINE</b>
                </div>

                <div className="command-intro">
                  <div className="portrait-mini"><img src={portrait} alt="Álvaro Soria" fetchPriority="high" /></div>
                  <div><small>PRODUCT BUILDER · FULL STACK · AI</small><strong>Entender.<br />Construir.<br /><em>Mejorar.</em></strong></div>
                </div>

                <div className="command-products">
                  <span className="command-label">PRODUCTOS / ACTIVOS</span>
                  {[
                    ['Valkiria ERP', 'Industria', 'cyan'],
                    ['TrainIA', 'Sport & fitness', 'orange'],
                    ['ValkirIA One', 'AI Business OS', 'violet'],
                  ].map(([name, area, accent]) => (
                    <div className={'command-product ' + accent} key={name}>
                      <i />
                      <span><strong>{name}</strong><small>{area}</small></span>
                      <b>→</b>
                    </div>
                  ))}
                </div>

                <div className="agent-orchestration">
                  <div><span className="command-label">ORQUESTACIÓN</span><strong>Agentes trabajando en paralelo.</strong></div>
                  <div className="agent-row"><span>FRONTEND</span><i /><span>BACKEND</span><i /><span>QA</span><i /><span>DOCS</span></div>
                </div>
              </div>
              <a className="command-link" href={valkiria} target="_blank" rel="noopener noreferrer">
                Explorar Valkiria Project <FiArrowUpRight />
              </a>
            </motion.div>
          </div>

          <div className="hero-marquee" aria-label="Áreas de trabajo">
            {['PRODUCT DESIGN', 'FULL STACK', 'AI AGENTS', 'AUTOMATION', 'DATA & BI', 'INTEGRATIONS', 'INFRASTRUCTURE'].map(item => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-number">01</div>
          <div className="section-heading">
            <span className="eyebrow">PERFIL</span>
            <h2>No me quedo en el código.<br /><em>Trabajo sobre el problema completo.</em></h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <p>
                Mi perfil combina desarrollo, análisis de procesos, automatización, datos e infraestructura.
                Eso me permite conversar con el usuario que vive el problema y también bajar hasta la implementación técnica.
              </p>
              <p>
                Actualmente trabajo en CAPEMI sobre procesos y gestión IT, mientras desarrollo productos propios bajo Valkiria Project.
                Ese cruce entre industria, producto y tecnología define cómo construyo.
              </p>
              <div className="about-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">Ver experiencia en LinkedIn <FiArrowUpRight /></a>
                <a href={cv} download="CV-Alvaro-Soria.pdf">Descargar CV <FiDownload /></a>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-top"><span>CAPEMI</span><span>2026 — ACTUALIDAD</span></div>
              <h3>Responsable de Procesos<br />y Gestión IT</h3>
              <div className="experience-grid">
                <span>Aplicaciones internas</span>
                <span>Automatización</span>
                <span>Business Intelligence</span>
                <span>Infraestructura</span>
                <span>Integraciones</span>
                <span>Mejora continua</span>
              </div>
            </div>
          </div>

          <div className="principles-grid">
            {principles.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="section products-header">
            <div className="section-number">02</div>
            <div className="section-heading split-heading">
              <div><span className="eyebrow">PRODUCTOS PROPIOS · VALKIRIA PROJECT</span><h2>Tres productos.<br /><em>Una misma forma de construir.</em></h2></div>
              <p>Software diseñado alrededor de operaciones reales: industria, deporte y negocios potenciados por IA.</p>
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
                        <a href={valkiria} target="_blank" rel="noopener noreferrer">Ver en Valkiria Project <FiArrowUpRight /></a>
                        {product.href && <a href={product.href} target="_blank" rel="noopener noreferrer">Abrir producto <FiArrowUpRight /></a>}
                      </div>
                    </div>
                    <ProductVisual productId={product.id} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-number">03</div>
          <div className="section-heading split-heading">
            <div><span className="eyebrow">IMPACTO / CASOS</span><h2>Del problema operativo<br /><em>a una solución que se usa.</em></h2></div>
            <p>Una selección de cómo aplico desarrollo, IA, automatización e integración en contextos reales.</p>
          </div>

          <div className="work-list">
            {work.map((item) => {
              const WorkIcon = item.icon;
              return (
                <article key={item.index} className="work-card">
                  <div className="work-index">{item.index}</div>
                  <div className="work-icon"><WorkIcon /></div>
                  <div className="work-main">
                    <span className="eyebrow">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="work-result">
                    <span>ENFOQUE</span>
                    <p>{item.result}</p>
                    <div>{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-number">04</div>
          <div className="section-heading split-heading">
            <div><span className="eyebrow">CAPACIDADES</span><h2>Una persona para conectar<br /><em>negocio y ejecución técnica.</em></h2></div>
            <p>No parto de una herramienta. Elijo el stack según el problema, el contexto y el costo de mantener la solución.</p>
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
            <div><FiUsers /><span><strong>Discovery</strong><small>Entender usuario y operación</small></span></div>
            <i />
            <div><FiLayers /><span><strong>Diseño</strong><small>Flujo, datos y arquitectura</small></span></div>
            <i />
            <div><FiCode /><span><strong>Build</strong><small>Frontend, backend e integraciones</small></span></div>
            <i />
            <div><FiCheckCircle /><span><strong>QA</strong><small>Agentes + revisión funcional</small></span></div>
            <i />
            <div><FiServer /><span><strong>Deploy</strong><small>Producción, monitoreo e iteración</small></span></div>
          </div>

          <div className="tech-cloud" aria-label="Tecnologías">
            {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Python', 'SQL', 'MySQL', 'Power BI', 'Docker', 'Linux', 'GitHub', 'Cloudflare', 'n8n', 'Odoo', 'Ollama', 'Qwen', 'OpenAI', 'REST APIs', 'Webhooks'].map(item => <span key={item}>{item}</span>)}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#inicio"><span>AS.</span><strong>Álvaro Soria</strong></a>
          <p>Software, automatización e IA con contexto de negocio.</p>
        </div>
        <div className="footer-nav">
          <a href={valkiria} target="_blank" rel="noopener noreferrer">Valkiria Project <FiArrowUpRight /></a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
        </div>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Álvaro Soria</span><a href="#inicio">Volver arriba <FiArrowUpRight /></a></div>
      </footer>
    </MotionConfig>
  );
}
