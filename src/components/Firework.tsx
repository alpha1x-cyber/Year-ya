import { motion } from 'framer-motion';

interface FireworkProps {
  color: string;
  delay: number;
}

export const Firework = ({ color, delay }: FireworkProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 1.2, 1],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
      }}
      className={`absolute w-4 h-4 rounded-full ${color}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};