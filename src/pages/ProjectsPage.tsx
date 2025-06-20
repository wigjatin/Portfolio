
import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-brand-light-purple/20"
    >
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 px-6 max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple">
          My AI Projects Portfolio
        </h1>
        <p className="text-gray-600 text-xl mb-12">
          A collection of machine learning, deep learning, and AI projects I've worked on. Each project showcases different skills and technologies.
        </p>
      </motion.div>
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
