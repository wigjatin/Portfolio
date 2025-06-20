
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import achievements from './AchievementsData';

interface AchievementsListProps {
  onAchievementSelect: (achievement: any) => void;
}

const AchievementsList = ({ onAchievementSelect }: AchievementsListProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-brand-purple" />
        <h3 className="text-2xl font-bold">Achievements</h3>
      </div>
      <div className="space-y-5">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md border-l-4 border-brand-vivid-purple"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.organization} • {achievement.date}</p>
                </div>
              </div>
              <motion.button
                onClick={() => onAchievementSelect(achievement)}
                className="text-brand-purple text-sm font-medium hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
