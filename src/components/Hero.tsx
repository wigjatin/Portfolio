
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onStartAutoTour?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartAutoTour }) => {
  const handleExploreProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to resume section
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAutoTour = (e: React.MouseEvent) => {
    e.preventDefault();
    onStartAutoTour?.();
  };

  return (
    <section className="py-16 px-6 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Jatin — <span className="text-brand-purple">AI/ML Enthusiast</span> & <span className="text-brand-pink">Problem Solver</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Solving the world's problems with data and neurons.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button 
            onClick={handleExploreProjects}
            className="px-6 py-3 bg-brand-purple text-white rounded-md flex items-center justify-center gap-2 hover:bg-brand-vivid-purple transition-colors"
          >
            <span className="inline-block">🚀</span> Explore Projects
          </button>
          <button 
            onClick={handleDownloadResume}
            className="px-6 py-3 bg-white border border-gray-200 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <span className="inline-block">⬇️</span> Download Resume
          </button>
          <button 
            onClick={handleAutoTour}
            className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-vivid-purple text-white rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="inline-block">🎬</span> Auto Tour
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/lovable-uploads/d966cc57-e699-4c1e-9dd0-f30325e8eb1e.png" 
          alt="Jatin's Photo" 
          className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
