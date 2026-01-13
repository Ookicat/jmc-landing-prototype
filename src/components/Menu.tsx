import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CountdownOverlay = ({ timeLeft }: { timeLeft: { days: number; hours: number; minutes: number; seconds: number } }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
    <div className="absolute inset-0 bg-maid-cafe-primary opacity-70"></div>
    <div className="relative z-10 text-center">
      <div className="text-lg font-bold mb-1 uppercase tracking-wider drop-shadow-sm">Countdown</div>
      <div className="text-3xl font-extrabold tabular-nums drop-shadow-md">
        {String(timeLeft.days).padStart(2, '0')}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
      </div>
    </div>
  </div>
);

export function Menu() {
  const { t } = useLanguage();
  
  const calculateTimeLeft = () => {
    // Target date: Feb 15, 2026
    const difference = +new Date(2026, 1, 15) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-maid-cafe-primary font-extrabold text-3xl">{t('menu.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-maid-cafe-bg-light rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1652432751749-4d6085441aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtZW51JTIwYm9hcmR8ZW58MXx8fHwxNzY1OTYyNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="JSC Maid Cafe Menu"
              className="w-full h-[500px] object-cover"
            />
            <div className="p-8 text-center">
              <p className="text-gray-600">{t('menu.tba')}</p>
            </div>
            <CountdownOverlay timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    </section>
  );
}
