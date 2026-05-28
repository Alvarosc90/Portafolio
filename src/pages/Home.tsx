import { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';

import '../styles/home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-container');
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12,
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

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <main className="portfolio-page">
      <Header />

      <section id="inicio" className="section-container section-container--hero visible">
        <Portfolio />
      </section>

      <section id="about" className="section-container page-section">
        <About />
      </section>

      <section id="projects" className="section-container page-section">
        <Projects />
      </section>

      <section id="skills" className="section-container page-section">
        <Skills />
      </section>

      <section id="contact" className="section-container page-section page-section--contact">
        <ContactForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
