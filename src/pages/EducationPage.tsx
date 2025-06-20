
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Education from '../components/Education';
import Footer from '../components/Footer';

const EducationPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-r from-white via-gray-50 to-brand-light-purple/20"
    >
      <Header />
      <Education />
      <Footer />
    </motion.div>
  );
};

export default EducationPage;
