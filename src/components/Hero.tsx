import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '../assets/key-visual-mobile-up.png';

export function Hero() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Change event countdown date
  useEffect(() => {
    const targetDate = new Date('2026-07-04T00:00:00').getTime();

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
                <h1 className="text-5xl lg:text-6xl text-maid-cafe-primary mb-4 font-extrabold text-outline-white">{t('hero.title')}</h1>
                <p className="text-maid-cafe-primary font-bold">{t('hero.headline')}</p>
                <div className="w-full h-2 bg-black mb-6 my-8"></div>
              </div>
              <div className="space-y-2 text-[25px]">
                <p className="font-bold">{t('hero.date')}</p>
                <p className="text-black font-bold">{t('hero.location')}</p>
              </div>
              <button 
                onClick={scrollToMenu}
                className="bg-maid-cafe-primary text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
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
              src={heroImage}
              alt="JSC Maid Cafe Key Visual"
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: '40% 10%', 
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative h-[500px] overflow-hidden">
          <img 
            src={heroImage}
            alt="JSC Maid Cafe Key Visual"
            className="w-full h-full object-cover"
            style={{ 
              transform: 'translateY(18%)', 
              maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-between px-4 text-maid-cafe-primary" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
            <div className="flex flex-col items-center text-center">
              <div className="">
                <h1 className="text-4xl text-maid-cafe-primary">{t('hero.title')}</h1>
                <p className="text-[14px] leading-relaxed text-maid-cafe-primary">{t('hero.headline')}</p>
              </div>

              <div
                className="text-maid-cafe-primary"
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '55%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  alignItems: 'flex-end'
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div className="text-3xl">{timeLeft.days}</div>
                  <div className="text-xs">{t('hero.days')}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="text-3xl">{timeLeft.hours}</div>
                  <div className="text-xs">{t('hero.hours')}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="text-3xl">{timeLeft.minutes}</div>
                  <div className="text-xs">{t('hero.minutes')}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="text-3xl">{timeLeft.seconds}</div>
                  <div className="text-xs">{t('hero.seconds')}</div>
                </div>
              </div>

            </div>
            <div className="flex justify-center">
                <button
                  onClick={scrollToMenu}
                  className="bg-maid-cafe-primary text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
                >
                  {t('hero.viewMenu')}
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Desktop Countdown Section */}
      <div className="hidden md:block">
        {/* Gradient Connector */}
        <div className="w-full h-24 bg-gradient-to-b from-maid-cafe-bg-light to-maid-cafe-primary"></div>

        {/* Countdown Timer Section */}
        <section className="w-full bg-maid-cafe-primary py-12">
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
