import React from 'react';
import '../styles/aboutStyles.css'; // Importar el archivo CSS local

//import myImage from '../images/ALVARO2.webp'; // Ajusta la ruta de la imagen según corresponda
//<img src={myImage} alt="Álvaro Rodrigo Franco Soria Casali" className="about-image" />
const About: React.FC = () => {
  return (
    <div className="about-container">
      
      <div>
        <h2 className="tittle">Sobre Mí</h2>
        <div className="about-section">
          <p className="textabout">
            Soy un profesional de 34 años de Santiago del Estero, Argentina, con sólida formación en Análisis de Datos y Desarrollo Web. Como Analista de Datos y Programador en constante capacitación, he trabajado en proyectos de análisis de datos y desarrollo web, aplicando mis habilidades técnicas para lograr objetivos empresariales. Busco oportunidades en Marketing, Desarrollo Web y Análisis de Datos para seguir creciendo profesionalmente y contribuir significativamente en cada equipo. 
            </p>
        </div>

      </div>
    </div>
  );
};

export default About;
