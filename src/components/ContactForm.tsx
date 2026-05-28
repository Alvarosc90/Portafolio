import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyzgyvpp");

  if (state.succeeded) {
    return (
      <motion.div className="contact-success" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <strong>Gracias por escribirme.</strong>
        <p>Te respondo apenas pueda revisar el mensaje con contexto.</p>
      </motion.div>
    );
  }

  return (
    <motion.div className="contact-shell" whileHover={{ y: -4 }}>
      <div className="contact-copy">
        <span>Contacto</span>
        <h2>Hablemos de procesos, datos o soluciones internas.</h2>
        <p>
          Si hay un circuito que ordenar, un tablero que automatizar o una herramienta
          interna que construir, ese es el tipo de desafío donde mejor puedo aportar.
        </p>
        <div className="contact-links">
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Formulario
          </a>
          <a href="https://www.linkedin.com/in/alvaro-rodrigo-soria-casali-60422a135/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a href="https://github.com/Alvarosc90" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" name="name" placeholder="Tu nombre" required />
          <ValidationError prefix="Nombre" field="name" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="tu@email.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" placeholder="Contame brevemente el contexto" required />
          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
        </div>

        <button className="submit-button" type="submit" disabled={state.submitting}>
          <span>{state.submitting ? 'Enviando...' : 'Enviar mensaje'}</span>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
