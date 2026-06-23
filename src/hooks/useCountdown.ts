import { useEffect, useState } from 'react';

export type CountdownTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const DEFAULT_TARGET_DATE = '2026-07-04T00:00:00';

const getTimeLeft = (targetDate: string): CountdownTimeLeft => {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  };
};

export function useCountdown(targetDate: string = DEFAULT_TARGET_DATE) {
  const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(targetDate));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}