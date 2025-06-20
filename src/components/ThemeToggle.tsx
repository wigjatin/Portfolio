
import React from 'react';
import { Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { Toggle } from '@/components/ui/toggle';

export const ThemeToggle = () => {
  const { theme } = useTheme();

  // This is now just a decorative component since we removed dark mode
  return (
    <Toggle 
      aria-label="Light mode" 
      className="ml-2"
    >
      <motion.div>
        <Sun size={18} />
      </motion.div>
    </Toggle>
  );
};
