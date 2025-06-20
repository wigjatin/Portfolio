
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

interface AutoCursorProps {
  isVisible: boolean;
  position: { x: number; y: number };
  isClicking?: boolean;
}

const AutoCursor: React.FC<AutoCursorProps> = ({ isVisible, position, isClicking = false }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: position.x,
            y: position.y
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 400,
            x: { type: "spring", damping: 30, stiffness: 300 },
            y: { type: "spring", damping: 30, stiffness: 300 }
          }}
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <motion.div
            animate={isClicking ? { scale: 0.8 } : { scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <MousePointer2 
              className={`w-6 h-6 ${isClicking ? 'text-brand-vivid-purple' : 'text-brand-purple'}`}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            />
          </motion.div>
          {isClicking && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-brand-vivid-purple rounded-full -translate-x-1/2 -translate-y-1/2"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutoCursor;
