
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionHighlightProps {
  isVisible: boolean;
  title: string;
  description: string;
}

const sectionDescriptions: Record<string, string> = {
  'Home': 'Meet Jatin - AI/ML Enthusiast & Problem Solver',
  'Skills': 'Technical superpowers and expertise areas',
  'Why Choose Me': 'What makes me unique as a developer',
  'Projects Overview': 'Innovative projects and technical achievements',
  'Sentiment Analysis Engine': 'Deep learning model with 92% accuracy for sentiment classification',
  'Object Detection API': 'Real-time object detection using YOLO architecture',
  'AI Chatbot Assistant': 'Conversational AI with natural language understanding',
  'Weather Prediction App': 'ML-powered forecasting with 85% accuracy',
  'Simple Image Classifier': 'Beginner-friendly CNN for cats and dogs classification',
  'Stock Price Predictor': 'LSTM neural networks with sentiment analysis integration',
  'Research & Publications': 'Academic contributions and research work',
  'Experience': 'Professional journey and virtual internships',
  'Volunteering': 'Community involvement and social impact',
  'Education': 'Academic background and learning foundation',
  'Resume': 'Complete professional profile and achievements',
  'Contact': 'Let\'s connect and collaborate'
};

const SectionHighlight: React.FC<SectionHighlightProps> = ({ isVisible, title, description }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            duration: 0.6
          }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 max-w-md"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 p-6 text-center">
            <motion.h3 
              className="text-xl font-bold text-gray-800 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="mt-3 h-1 bg-gradient-to-r from-brand-purple to-brand-vivid-purple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { SectionHighlight, sectionDescriptions };
