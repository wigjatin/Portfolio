
import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-brand-light-purple/20 dark:to-brand-purple/5">
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 px-6 max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple dark:from-gray-300 dark:to-brand-light-purple">
          Get In Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xl mb-12">
          Have a project or opportunity? Let's discuss how we can work together.
        </p>
      </motion.div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
