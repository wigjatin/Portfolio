
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from 'lucide-react';
import certificates from './CertificatesData';

interface CertificatesListProps {
  onCertificateSelect: (certificate: any) => void;
}

const CertificatesList = ({ onCertificateSelect }: CertificatesListProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Badge className="w-6 h-6 text-brand-purple" />
        <h3 className="text-2xl font-bold">Certificates</h3>
      </div>
      <div className="space-y-5">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className={`bg-white p-5 rounded-lg shadow-md border-l-4 ${
              cert.highlighted 
                ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-white ring-2 ring-yellow-200' 
                : 'border-brand-purple'
            }`}
            initial={{ opacity: 0, x: -20 }}
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
              boxShadow: cert.highlighted 
                ? "0 10px 15px -3px rgba(251, 191, 36, 0.3), 0 4px 6px -2px rgba(251, 191, 36, 0.1)"
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <div className="text-2xl">{cert.icon}</div>
                  )}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${cert.highlighted ? 'text-yellow-800' : ''}`}>
                    {cert.title}
                    {cert.highlighted && (
                      <span className="ml-2 px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded-full">
                        Featured
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <motion.button
                onClick={() => onCertificateSelect(cert)}
                className={`text-sm font-medium hover:underline ${
                  cert.highlighted ? 'text-yellow-700' : 'text-brand-purple'
                }`}
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

export default CertificatesList;
