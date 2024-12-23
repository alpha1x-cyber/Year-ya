import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const AboutSection = () => {
  return (
    <motion.div 
      className="absolute bottom-4 left-0 right-0 text-center text-white"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center justify-center mb-2">
        <Info className="w-4 h-4 mr-2" />
        <span className="text-sm">حول البرنامج</span>
      </div>
      <p className="text-xs text-gray-300 mb-1">
        تم تطوير هذا البرنامج بواسطة المهندس ياسين
      </p>
      <SocialLinks />
      <p className="text-xs text-gray-400 mt-2">
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </p>
    </motion.div>
  );
};