
import React from 'react';
import { motion } from 'framer-motion';
import ResumeDownload from './resume/ResumeDownload';
import ToolsSection from './resume/ToolsSection';
import FunFactsCarousel from './resume/FunFactsCarousel';
import CertificatesAndAchievements from './resume/CertificatesAndAchievements';

const Resume = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", damping: 15 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple">Resume & Credentials</h2>
            <p className="text-gray-600 mb-8">
              Get a complete overview of my professional journey, education, and certifications.
            </p>
            
            <ResumeDownload />
            <ToolsSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", damping: 15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple">Fun Facts</h2>
            <FunFactsCarousel />
          </motion.div>
        </div>

        <CertificatesAndAchievements />
      </div>
    </section>
  );
};

export default Resume;
