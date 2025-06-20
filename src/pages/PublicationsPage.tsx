
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Publications from '../components/Publications';
import Footer from '../components/Footer';

const PublicationsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-r from-white via-gray-50 to-brand-light-purple/20"
    >
      <Header />
      <Publications />
      <Footer />
    </motion.div>
  );
};

export default PublicationsPage;
