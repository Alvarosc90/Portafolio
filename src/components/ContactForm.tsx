import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyzgyvpp");

  if (state.succeeded) {
    return <p className='mensaje'>¡Gracias por contactarme!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <p className='contacto'>Contacto</p>
      <div className="form-group">
        <label htmlFor="email">Dirección de correo electrónico:</label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button className="submit-button" type="submit" disabled={state.submitting}>
        {state.submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
