
import React from 'react';
import HomePage from './HomePage';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-white via-gray-50 to-brand-light-purple/20"
    >
      <HomePage />
    </motion.div>
  );
};

export default Index;
