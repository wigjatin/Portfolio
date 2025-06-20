
import React from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Professional Experience</h1>
        <p className="text-gray-600 text-xl mb-12">
          My journey through the AI and machine learning industry, solving real business problems.
        </p>
      </div>
      <Experience />
      <Footer />
    </div>
  );
};

export default ExperiencePage;
