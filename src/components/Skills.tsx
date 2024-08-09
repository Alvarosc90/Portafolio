

import react from '../images/react.png';
import '../styles/Skills.css'; // Archivo CSS para estilos de Skills

import node from '../images/node.png';
import JavaScriptImage from '../images/javascript.png';
import DatabaseImage from '../images/database.png';
import VisualizationImage from '../images/visualization.png';
import Trello from '../images/trello.png';
import DigitalMarketingImage from '../images/digital-marketing.png';
import Python from '../images/python.webp';
import Excel from '../images/excel.webp';
import Css from '../images/css.webp';
import HTML from '../images/html.webp';
import Photoshop from '../images/ps.png';
import Filmora from '../images/filmora.webp';
import Figma from '../images/figma.png';
import Indesing from '../images/id.png';
import Git from '../images/git.webp';


const Skills = () => {
  // Lista de habilidades con nombres y rutas de imágenes
  const webFullStackSkills = [
    { name: 'React', image: react },
    { name: 'CSS', image: Css },
    { name: 'HTML', image: HTML },
    { name: 'Node Js', image: node },
    { name: 'JavaScript', image: JavaScriptImage },
    { name: 'Base de datos', image: DatabaseImage },
    { name: 'Trello', image: Trello },
    { name: 'GitHub', image: Git }
  ];

  const dataAnalysisSkills = [
    { name: 'PowerBI', image: VisualizationImage },
    { name: 'Marketing Digital', image: DigitalMarketingImage },
    { name: 'Python', image: Python },
    { name: 'Excel', image: Excel },
  ];

  const DesingGraphic = [
    { name: 'Photoshop', image: Photoshop },
    { name: 'Indesing', image: Indesing },
    { name: 'Figma', image: Figma },
    { name: 'Filmora', image: Filmora },
  ];


  return (
    <div className="skills-section">
      <p className='title'>Stack tecnológico</p>
      <div className="column">

        <div className="skills-container">
          {webFullStackSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="column">

        <div className="skills-container">
          {dataAnalysisSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}  
        </div>
        <div className="column">

        <div className="skills-container">
          {DesingGraphic.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
