import react from '../images/react.png';
import node from '../images/node.png';
import JavaScriptImage from '../images/javascript.png';
import DatabaseImage from '../images/database.png';
import VisualizationImage from '../images/visualization.png';
import Trello from '../images/trello.png';
import Python from '../images/python.webp';
import Excel from '../images/excel.webp';
import Figma from '../images/figma.png';
import Git from '../images/git.webp';
import DataAnalysis from '../images/data-analysis.png';
import Scrum from '../images/scrum.png';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillGroups = [
  {
    title: 'Procesos y gestión IT',
    description: 'Procedimientos, mejora continua, soporte funcional, compras técnicas y coordinación con proveedores.',
    skills: [
      { name: 'Procesos', image: Scrum },
      { name: 'Trello', image: Trello },
      { name: 'Figma', image: Figma },
      { name: 'Git', image: Git },
    ],
  },
  {
    title: 'Desarrollo de soluciones',
    description: 'Herramientas internas a medida para resolver necesidades operativas con interfaces claras y datos persistentes.',
    skills: [
      { name: 'JavaScript', image: JavaScriptImage },
      { name: 'React', image: react },
      { name: 'Node.js', image: node },
      { name: 'MSSQL', image: DatabaseImage },
    ],
  },
  {
    title: 'Datos e indicadores',
    description: 'Automatización de métricas, tableros, exploración de datos y visualizaciones para gestión.',
    skills: [
      { name: 'Power BI', image: VisualizationImage },
      { name: 'Excel', image: Excel },
      { name: 'Python', image: Python },
      { name: 'Análisis', image: DataAnalysis },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="section-heading">
        <span>Stack y forma de trabajo</span>
        <h2>Herramientas al servicio de procesos más simples.</h2>
        <p>
          Mi stack no está pensado como una lista aislada, sino como un sistema de trabajo:
          entender el proceso, construir la solución, medir el resultado y mejorar.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <motion.article className="skill-group" key={group.title} whileHover={{ y: -7 }}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skills-container">
              {group.skills.map((skill) => (
                <motion.div className="skill-item" key={skill.name} whileHover={{ x: 4 }}>
                  <div className="skill-icon">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="working-method">
        <motion.div whileHover={{ y: -5 }}>
          <span>01</span>
          <strong>Escuchar la operación</strong>
          <p>Relevar necesidades, fricciones, excepciones y prioridades por área.</p>
        </motion.div>
        <motion.div whileHover={{ y: -5 }}>
          <span>02</span>
          <strong>Ordenar el circuito</strong>
          <p>Procedimentar, definir responsables y bajar la complejidad del proceso.</p>
        </motion.div>
        <motion.div whileHover={{ y: -5 }}>
          <span>03</span>
          <strong>Construir y medir</strong>
          <p>Automatizar, desarrollar, tablerizar y revisar impacto con datos.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
