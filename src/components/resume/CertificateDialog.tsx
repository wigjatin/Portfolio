
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CertificateDialogProps {
  certificate: any;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateDialog = ({ certificate, isOpen, onClose }: CertificateDialogProps) => {
  if (!certificate) return null;
  
  const handleVerifyCredential = () => {
    if (certificate.credential) {
      window.open(certificate.credential, '_blank');
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {certificate.logo ? (
              <img 
                src={certificate.logo} 
                alt={`${certificate.issuer} logo`} 
                className="w-6 h-6 object-contain"
              />
            ) : (
              <span className="text-xl">{certificate.icon}</span>
            )}
            {certificate.title}
            {certificate.highlighted && (
              <span className="ml-2 px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded-full">
                Featured
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Issuer</h4>
            <p>{certificate.issuer}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Date Issued</h4>
            <p>{certificate.date}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Description</h4>
            <p>{certificate.description}</p>
          </div>
          <div className="flex justify-end">
            <Button 
              className="mt-4"
              onClick={handleVerifyCredential}
            >
              View Credential
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateDialog;
