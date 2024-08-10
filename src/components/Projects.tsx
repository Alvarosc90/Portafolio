import '../styles/NewProject.css'; // Asegúrate de que este CSS esté actualizado
import ProjectData from './ProjectData';
import ProjectWeb from './ProjectWeb';

const Projects = () => {
  const handleProjectClickData = (url: string) => {
    window.open(url, '_blank');
  };

  const handleProjectClickWeb = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="new-projects-container" id="projects">
      <h2>Projects Web</h2>
      <div className="new-project-grid">
        {ProjectWeb.map((project, index) => (
          <div
            key={index}
            className="new-project-card"
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

      <h2>Projects DataAnalyst</h2>
      <div className="new-project-grid">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="new-project-card"
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
    </section>
  );
};

export default Projects;
