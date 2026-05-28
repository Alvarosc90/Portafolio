import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import cvFile from '../images/CV - Alvaro Soria.pdf';
import '../styles/CallToActionBtn.css';

const CallToActionBtn = () => {
  return (
    <div className="cta-actions" aria-label="Acciones principales">
      <motion.a href="#contact" className="cta-button cta-button--primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
        <span>Conversemos</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.a>
      <motion.a href={cvFile} className="cta-button cta-button--secondary" download="CV-Alvaro-Soria.pdf" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
        <FontAwesomeIcon icon={faFileDownload} />
        <span>Descargar CV</span>
      </motion.a>
    </div>
  );
};

export default CallToActionBtn;
