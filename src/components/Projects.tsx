import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faLock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../styles/NewProject.css';
import ProjectData from './ProjectData';
import ProjectWeb from './ProjectWeb';

const Projects = () => {
  return (
    <section className="new-projects-container">
      <div className="section-heading">
        <span>Casos de impacto</span>
        <h2>Proyectos que ordenan operación, datos y decisiones.</h2>
        <p>
          El portfolio ahora muestra soluciones como evidencia de gestión: herramientas internas,
          tableros, automatización y análisis aplicados a problemas concretos.
        </p>
      </div>

      <div className="project-block">
        <div className="project-block__title">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          <h3>Soluciones internas y automatización</h3>
        </div>
        <div className="new-project-grid new-project-grid--featured">
          {ProjectWeb.map((project) => (
            <motion.article key={project.title} className="new-project-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
              <div className="new-image-container">
                <img src={project.image} alt={project.title} className="new-project-image" />
              </div>
              <div className="new-project-details">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="project-tags">
                  {project.focus.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="new-technologies">
                  {project.technologiesImages.map((techImage, idx) => (
                    <img key={techImage} src={techImage} alt={`Tecnología ${idx + 1}`} className="new-tech-icon" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="project-block">
        <div className="project-block__title">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <h3>Datos, BI y análisis</h3>
        </div>
        <div className="new-project-grid">
          {ProjectData.map((project) => {
            const cardContent = (
              <>
                <div className="new-image-container">
                  <img src={project.image} alt={project.title} className="new-project-image" />
                </div>
                <div className="new-project-details">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="project-tags">
                    {project.focus.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="new-technologies">
                    {project.technologiesImages.map((techImage, idx) => (
                      <img key={techImage} src={techImage} alt={`Tecnología ${idx + 1}`} className="new-tech-icon" />
                    ))}
                  </div>
                </div>
              </>
            );

            if (project.url) {
              return (
                <motion.a key={project.title} className="new-project-card new-project-card--link" href={project.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.article key={project.title} className="new-project-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                <span className="internal-badge">
                  <FontAwesomeIcon icon={faLock} />
                  Interno
                </span>
                {cardContent}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
