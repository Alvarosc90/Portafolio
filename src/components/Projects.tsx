import { useState } from 'react';
import '../styles/NewProject.css'; // Importación del archivo CSS
import ProjectData from './ProjectData'; // Archivo de datos de proyectos DataAnalyst
import ProjectWeb from './ProjectWeb'; // Archivo de datos de proyectos Web

const Projects = () => {
  const [currentIndexData, setCurrentIndexData] = useState(0); // Estado para proyectos DataAnalyst
  const [currentIndexWeb, setCurrentIndexWeb] = useState(0); // Estado para proyectos Web

  const handleProjectClickData = (url: string) => {
    window.open(url, '_blank'); // Abre el enlace del proyecto en una nueva pestaña
  };

  const handleProjectClickWeb = (url: string) => {
    window.open(url, '_blank'); // Abre el enlace del proyecto en una nueva pestaña
  };

  const handleNextData = () => {
    if (currentIndexData < ProjectData.length - 1) {
      setCurrentIndexData(currentIndexData + 1);
    }
  };

  const handlePrevData = () => {
    if (currentIndexData > 0) {
      setCurrentIndexData(currentIndexData - 1);
    }
  };

  const handleNextWeb = () => {
    if (currentIndexWeb < ProjectWeb.length - 1) {
      setCurrentIndexWeb(currentIndexWeb + 1);
    }
  };

  const handlePrevWeb = () => {
    if (currentIndexWeb > 0) {
      setCurrentIndexWeb(currentIndexWeb - 1);
    }
  };

  return (
    <section className="new-projects-container" id="projects">
      <h2>Projects Web</h2>
      <div className="new-project-grid">
        {ProjectWeb.map((project, index) => (
          <div
            key={index}
            className={`new-project-card ${index === currentIndexWeb ? 'active' : ''}`}
            onClick={() => handleProjectClickWeb(project.url)}
          >
            <div className="new-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="new-project-image"
              />
            </div>
            <div className="new-project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="new-technologies">
                {project.technologiesImages.map((techImage, idx) => (
                  <img
                    key={idx}
                    src={techImage}
                    alt={`Technology ${idx + 1}`}
                    className="new-tech-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="nav-button" onClick={handlePrevWeb} disabled={currentIndexWeb === 0}>
          Anterior
        </button>
        <button className="nav-button" onClick={handleNextWeb} disabled={currentIndexWeb === ProjectWeb.length - 1}>
          Siguiente
        </button>
      </div>

      <h2>Projects DataAnalyst</h2>
      <div className="new-project-grid">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className={`new-project-card ${index === currentIndexData ? 'active' : ''}`}
            onClick={() => handleProjectClickData(project.url)}
          >
            <div className="new-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="new-project-image"
              />
            </div>
            <div className="new-project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="new-technologies">
                {project.technologiesImages.map((techImage, idx) => (
                  <img
                    key={idx}
                    src={techImage}
                    alt={`Technology ${idx + 1}`}
                    className="new-tech-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="nav-button" onClick={handlePrevData} disabled={currentIndexData === 0}>
          Anterior
        </button>
        <button className="nav-button" onClick={handleNextData} disabled={currentIndexData === ProjectData.length - 1}>
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default Projects;
