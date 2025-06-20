
import React from 'react';
import Header from '../components/Header';
import Superpowers from '../components/Superpowers';
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My AI & ML Skills</h1>
        <p className="text-gray-600 text-xl mb-12">
          Explore my technical expertise and proficiency in various AI and machine learning domains.
        </p>
      </div>
      <Superpowers />
      <Footer />
    </div>
  );
};

export default SkillsPage;
