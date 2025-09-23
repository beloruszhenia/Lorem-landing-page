import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './components/styles-tailwind.css';
// import '.components/styles.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Add index-page class to body
    document.body.classList.add('index-page');

    // Handle scroll events for header
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('index-page', 'scrolled');
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Clients />
        <About />
        <WhyUs />
        <Skills />
        <Services />
        <Portfolio />
        <Team />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
