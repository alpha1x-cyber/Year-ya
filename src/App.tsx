import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CountdownUnit } from './components/CountdownUnit';
import { Firework } from './components/Firework';
import { Confetti } from './components/Confetti';
import { StarField } from './components/StarField';
import { CelebrationText } from './components/CelebrationText';
import { AboutSection } from './components/AboutSection';
import { getNewYearCountdown } from './utils/dateUtils';

function App() {
  const [countdown, setCountdown] = useState(getNewYearCountdown());
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdown = getNewYearCountdown();
      setCountdown(newCountdown);
      
      // Check if it's New Year
      setIsNewYear(
        newCountdown.days === 0 &&
        newCountdown.hours === 0 &&
        newCountdown.minutes === 0 &&
        newCountdown.seconds === 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <StarField />
      
      {isNewYear && <Confetti />}
      
      <Firework color="bg-yellow-400" delay={0} />
      <Firework color="bg-pink-500" delay={0.5} />
      <Firework color="bg-blue-500" delay={1} />
      <Firework color="bg-green-500" delay={1.5} />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center z-10"
      >
        <CelebrationText />
        
        <div className="flex items-center justify-center mb-8 mt-20">
          <Sparkles className="text-yellow-400 w-8 h-8 mr-2" />
          <h1 className="text-4xl font-bold text-white">
            {isNewYear ? 'Happy New Year!' : `New Year ${countdown.nextYear} Countdown`}
          </h1>
          <Sparkles className="text-yellow-400 w-8 h-8 ml-2" />
        </div>

        <div className="flex space-x-4">
          <CountdownUnit value={countdown.days} label="أيام" />
          <CountdownUnit value={countdown.hours} label="ساعات" />
          <CountdownUnit value={countdown.minutes} label="دقائق" />
          <CountdownUnit value={countdown.seconds} label="ثواني" />
        </div>

        {isNewYear && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-8 text-2xl text-yellow-400 font-bold"
          >
            🎉 عام جديد سعيد! 🎊
          </motion.div>
        )}
      </motion.div>

      <AboutSection />
    </div>
  );
}

export default App;