import { differenceInSeconds, format } from 'date-fns';

export const getNewYearCountdown = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  const newYearDate = new Date(nextYear, 0, 1);
  
  const secondsLeft = differenceInSeconds(newYearDate, now);
  
  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
  const seconds = secondsLeft % 60;
  
  return { days, hours, minutes, seconds, nextYear };
};