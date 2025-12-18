import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImagePc from '../assets/key-visual-pc.png';
import heroImageMobile from '../assets/key-visual-mobile.png';

export function Hero() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-16T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section id="hero" className="relative">
        {/* Desktop View */}
        <div className="hidden md:flex h-[600px]">
          {/* Left Section - Text */}
          <div className="w-1/2 flex items-center">
            <div className="container ml-auto px-4 lg:px-8 space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl text-[#f06292] mb-4 font-extrabold">{t('hero.title')}</h1>
                <div className="w-full h-2 bg-black mb-6 my-8"></div>
              </div>
              <div className="space-y-2 text-[25px]">
                <p className="text-black font-bold">{t('hero.headline')}</p>
                <p className="font-bold">{t('hero.date')}</p>
                <p className="text-black font-bold">{t('hero.location')}</p>
              </div>
              <button 
                onClick={scrollToMenu}
                className="bg-[#f06292] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
              >
                {t('hero.viewMenu')}
              </button>
            </div>
          </div>

          {/* Border between sections */}
          <div className="w-0.5"></div>

          {/* Right Section - Image  mask-b-from-20% mask-b-to-80%*/}
          <div className="w-1/2 h-full">
            <img 
              src={heroImageMobile}
              alt="JSC Maid Cafe Key Visual"
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: '50% 10%', 
                maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative h-[700px]">
          <img 
            src={heroImageMobile}
            alt="JSC Maid Cafe Key Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col justify-center items-center text-white px-4">
            <div className="mb-4">
              <h1 className="text-4xl text-white mb-3 text-center">{t('hero.title')}</h1>
              <div className="w-full h-1 bg-white"></div>
            </div>
            <div className="space-y-2 text-center mb-6 text-[14px]">
              <p className="font-bold">{t('hero.headline')}</p>
              <p className="font-bold">{t('hero.date')}</p>
              <p className="font-bold">{t('hero.location')}</p>
            </div>
            <button 
              onClick={scrollToMenu}
              className="bg-[#f06292] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow mb-8"
            >
              {t('hero.viewMenu')}
            </button>

            {/* Countdown Timer in Mobile View */}
            <div className="grid grid-cols-4 gap-2 w-full max-w-md">
              <div className="text-center">
                <div className="text-3xl text-white mb-1">{timeLeft.days}</div>
                <div className="text-xs text-white/90">{t('hero.days')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-white mb-1">{timeLeft.hours}</div>
                <div className="text-xs text-white/90">{t('hero.hours')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-white mb-1">{timeLeft.minutes}</div>
                <div className="text-xs text-white/90">{t('hero.minutes')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-white mb-1">{timeLeft.seconds}</div>
                <div className="text-xs text-white/90">{t('hero.seconds')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Countdown Section */}
      <div className="hidden md:block">
        {/* Gradient Connector */}
        <div className="w-full h-24 bg-gradient-to-b from-[#f2f4f7] to-[#f06292]"></div>

        {/* Countdown Timer Section */}
        <section className="w-full bg-[#f06292] py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl text-white mb-2">{timeLeft.days}</div>
                <div className="text-sm lg:text-base text-white/90">{t('hero.days')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl text-white mb-2">{timeLeft.hours}</div>
                <div className="text-sm lg:text-base text-white/90">{t('hero.hours')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl text-white mb-2">{timeLeft.minutes}</div>
                <div className="text-sm lg:text-base text-white/90">{t('hero.minutes')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl text-white mb-2">{timeLeft.seconds}</div>
                <div className="text-sm lg:text-base text-white/90">{t('hero.seconds')}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
