import { motion } from 'framer-motion';

interface CountdownUnitProps {
  value: number;
  label: string;
}

export const CountdownUnit = ({ value, label }: CountdownUnitProps) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center p-4"
    >
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 mb-2">
        <span className="text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-sm text-gray-200">{label}</span>
    </motion.div>
  );
};