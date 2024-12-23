import { motion } from 'framer-motion';

interface ConfettiPieceProps {
  color: string;
  x: number;
  delay: number;
}

const ConfettiPiece = ({ color, x, delay }: ConfettiPieceProps) => (
  <motion.div
    className={`absolute w-2 h-2 ${color}`}
    initial={{ y: -20, x }}
    animate={{
      y: ['0%', '100%'],
      rotate: [0, 360],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const Confetti = () => {
  const colors = [
    'bg-red-500',
    'bg-yellow-400',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {colors.map((color, i) => (
        <ConfettiPiece
          key={i}
          color={color}
          x={i * (window.innerWidth / colors.length)}
          delay={i * 0.2}
        />
      ))}
    </div>
  );
};