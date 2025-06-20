
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AchievementDialogProps {
  achievement: any;
  isOpen: boolean;
  onClose: () => void;
}

const AchievementDialog = ({ achievement, isOpen, onClose }: AchievementDialogProps) => {
  if (!achievement) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-xl">{achievement.icon}</span>
            {achievement.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Organization</h4>
            <p>{achievement.organization}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Date</h4>
            <p>{achievement.date}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Achievement Details</h4>
            <p>{achievement.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AchievementDialog;
