
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificatesList from './CertificatesList';
import AchievementsList from './AchievementsList';
import CertificateDialog from './CertificateDialog';
import AchievementDialog from './AchievementDialog';

const CertificatesAndAchievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, type: "spring", damping: 12 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-brand-purple text-center">
        Certificates & Achievements
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Certificates */}
        <CertificatesList onCertificateSelect={setSelectedCertificate} />

        {/* Achievements */}
        <AchievementsList onAchievementSelect={setSelectedAchievement} />
      </div>

      {/* Certificate Details Dialog */}
      <CertificateDialog 
        certificate={selectedCertificate} 
        isOpen={!!selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />

      {/* Achievement Details Dialog */}
      <AchievementDialog
        achievement={selectedAchievement}
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </motion.div>
  );
};

export default CertificatesAndAchievements;
