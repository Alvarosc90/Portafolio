import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../styles/CallToActionBtn.css';

const CallToActionBtn: React.FC<{ scrollToContact: () => void }> = ({ scrollToContact }) => {
  const handleDownloadClick = () => {
    console.log('Descargando CV...');
    // Puedes agregar más lógica aquí si es necesario antes de descargar el CV
  };

  return (
    <>
      <div className='Name'>
        <h1>Alvaro Rodrigo Franco Soria Casali</h1>
        <p>Analista de datos - Desarrollador FrontEnd - Diseñador Gráfico</p>
      </div>
      <a href="#ContactForm">
        <button className="cta-button" onClick={scrollToContact}>
          <FontAwesomeIcon icon={faHandshake} style={{ marginRight: '5px' }} />
          Contacto
        </button>
      </a>
      <a href="https://drive.google.com/file/d/1C_U0-HF89_8jXNXUDWy127URbctENiGB/view?usp=sharing" download="CV-Alvaro-Soria.pdf">
        <button className="cta-button1" onClick={handleDownloadClick}>
          <FontAwesomeIcon icon={faFileDownload} style={{ marginRight: '5px' }} />
          Descargar CV
        </button>
      </a>
    </>
  );
};

export default CallToActionBtn;
