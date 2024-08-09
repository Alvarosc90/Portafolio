import React, { useEffect } from 'react';
import Header from '../components/Header';
import PersonalSection from '../components/profileStyles';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import LogoHeader from '../components/Welcome';
import CallToActionBtn from '../components/CallToActionBtn';
import Portfolio from '../components/Portfolio';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ContactForm from '../components/ContactForm';
//import Projects2 from '../components/projects2';


import '../styles/home.css'; // Importa tu archivo de estilos CSS para Home

const Home: React.FC = () => {
  const handleContratameClick = () => {
    console.log('¡Has hecho clic en Contrátame!');
    // Aquí podrías agregar más lógica, como abrir un formulario de contacto o redirigir a una página específica
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section-container');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Ajusta según quieras activar la animación
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []); // Asegúrate de ajustar dependencias según necesites

  return (
    <>
      <BackgroundAnimation />
      <LogoHeader />
      <Header />
      <Portfolio />
      <section id="personalSection" className="section-container">
        <PersonalSection />
        <CallToActionBtn scrollToContact={handleContratameClick} />
      </section>
      <section id="about" className="section-container">
        <About />
      </section>
      <section id="skills" className="section-container">
        <Skills />
      </section>
      <section id="projects" className="section-container">
        <Projects />
      </section>
      <section id="ContactForm" className="section-container">
      <ContactForm />
      </section>
      <section id="footer">
      <Footer />
      </section>
      
    </>
  );
};

export default Home;
