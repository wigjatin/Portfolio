
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Superpowers from '../components/Superpowers';
import WhyChooseMe from '../components/WhyChooseMe';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Volunteering from '../components/Volunteering';
import Education from '../components/Education';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AutoView from '../components/AutoView';

const HomePage = () => {
  const [showAutoTour, setShowAutoTour] = useState(false);

  const handleStartAutoTour = () => {
    setShowAutoTour(true);
  };

  const handleStopAutoTour = () => {
    setShowAutoTour(false);
  };

  return (
    <div className="min-h-screen">
      {showAutoTour && (
        <AutoView 
          showFullUI={true} 
          onTourComplete={handleStopAutoTour}
          onTourStop={handleStopAutoTour}
          autoStart={true}
        />
      )}
      <Header />
      <section id="hero">
        <Hero onStartAutoTour={handleStartAutoTour} />
      </section>
      <section id="superpowers">
        <Superpowers />
      </section>
      <section id="why-choose-me">
        <WhyChooseMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="publications">
        <Publications />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="volunteering">
        <Volunteering />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
