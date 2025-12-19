import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Activities() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1744390708891-be9464b9f086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2FmZSUyMGFjdGl2aXR5fGVufDF8fHx8MTc2NjA3NDM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      titleKey: 'activities.card1Title',
      descKey: 'activities.card1Desc'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      titleKey: 'activities.card2Title',
      descKey: 'activities.card2Desc'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      titleKey: 'activities.card3Title',
      descKey: 'activities.card3Desc'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section id="activities" className="py-16 bg-maid-cafe-bg-light">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-maid-cafe-primary font-extrabold text-3xl">{t('activities.title')}</h2>
        
        {/* Desktop View - 3 Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={activity.image} 
                alt={t(activity.titleKey)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-maid-cafe-primary text-lg font-bold">{t(activity.titleKey)}</h3>
                <p className="text-gray-600">{t(activity.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={activities[currentIndex].image} 
              alt={t(activities[currentIndex].titleKey)}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-3 text-maid-cafe-primary">{t(activities[currentIndex].titleKey)}</h3>
              <p className="text-gray-600">{t(activities[currentIndex].descKey)}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-maid-cafe-primary text-white p-3 rounded-full hover:bg-maid-cafe-secondary transition-colors shadow-lg"
              aria-label="Previous activity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-maid-cafe-primary text-white p-3 rounded-full hover:bg-maid-cafe-secondary transition-colors shadow-lg"
              aria-label="Next activity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-maid-cafe-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
