import { motion } from 'framer-motion';

interface StarProps {
  size: number;
  top: number;
  left: number;
  delay: number;
}

const Star = ({ size, top, left, delay }: StarProps) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: size,
      height: size,
      top: `${top}%`,
      left: `${left}%`,
    }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
    }}
  />
);

export const StarField = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </div>
  );
};