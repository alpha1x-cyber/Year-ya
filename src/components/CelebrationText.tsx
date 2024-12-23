import { motion } from 'framer-motion';

export const CelebrationText = () => {
  return (
    <motion.div
      className="absolute top-4 left-0 right-0 text-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-yellow-400 mb-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        !كل عام وأنتم بخير
      </motion.h2>
      <p className="text-white text-xl">عام سعيد مليء بالنجاحات</p>
    </motion.div>
  );
};