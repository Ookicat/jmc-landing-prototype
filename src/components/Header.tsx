import { useState } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'schedule' | 'floorplan' | 'gallery'>('home');

  const scrollToSection = (id: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (page: 'home' | 'schedule' | 'floorplan' | 'gallery') => {
    setCurrentPage(page);
    setIsInfoOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => navigateToPage('home')} className="flex-shrink-0">
            <div className="w-16 flex items-center justify-center">
              <img src={logo} alt="JSC Maid Cafe Logo" className="w-full h-auto" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <button onClick={() => scrollToSection('latest-news')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.latestNews')}
            </button>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 hover:text-maid-cafe-primary transition-colors"
                onMouseEnter={() => setIsInfoOpen(true)}
                onMouseLeave={() => setIsInfoOpen(false)}
              >
                {t('nav.info')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isInfoOpen && (
                <div 
                  className="absolute top-full left-0 pt-2"
                  onMouseEnter={() => setIsInfoOpen(true)}
                  onMouseLeave={() => setIsInfoOpen(false)}
                >
                  <div className="w-48 bg-white rounded-lg shadow-lg py-2">
                    <button onClick={() => navigateToPage('schedule')} className="block w-full text-left px-4 py-2 hover:bg-maid-cafe-bg-light transition-colors">
                      {t('nav.eventSchedule')}
                    </button>
                    <button onClick={() => navigateToPage('floorplan')} className="block w-full text-left px-4 py-2 hover:bg-maid-cafe-bg-light transition-colors">
                      {t('nav.floorplan')}
                    </button>
                    <button onClick={() => navigateToPage('gallery')} className="block w-full text-left px-4 py-2 hover:bg-maid-cafe-bg-light transition-colors">
                      {t('nav.gallery')}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('activities')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.activities')}
            </button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.menu')}
            </button>
            <button onClick={() => scrollToSection('rules')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.rules')}
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.faq')}
            </button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-maid-cafe-primary transition-colors">
              {t('nav.contactUs')}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-maid-cafe-bg-light hover:bg-maid-cafe-primary hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          {/* Desktop Event Info */}
          <div className="hidden lg:block text-right">
            <div className="text-maid-cafe-primary">{t('nav.eventName')}</div>
            <div className="text-sm">{t('nav.eventDate')}</div>
            <div className="text-xs text-gray-600">{t('nav.eventLocation')}</div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-maid-cafe-primary" /> : <Menu className="w-6 h-6 text-maid-cafe-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="text-maid-cafe-primary">{t('nav.eventName')}</div>
              <div className="text-sm">{t('nav.eventDate')}</div>
              <div className="text-xs text-gray-600">{t('nav.eventLocation')}</div>
              
              {/* Mobile Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-maid-cafe-bg-light hover:bg-maid-cafe-primary hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>
            </div>
            
            <div className="space-y-2">
              <button onClick={() => scrollToSection('latest-news')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.latestNews')}
              </button>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 hover:text-maid-cafe-primary transition-colors"
                  onClick={() => setIsInfoOpen(!isInfoOpen)}
                >
                  {t('nav.info')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isInfoOpen ? 'rotate-180' : ''}`} />
                </button>
                {isInfoOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <button onClick={() => navigateToPage('schedule')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                      {t('nav.eventSchedule')}
                    </button>
                    <button onClick={() => navigateToPage('floorplan')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                      {t('nav.floorplan')}
                    </button>
                    <button onClick={() => navigateToPage('gallery')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                      {t('nav.gallery')}
                    </button>
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('activities')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.activities')}
              </button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.menu')}
              </button>
              <button onClick={() => scrollToSection('rules')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.rules')}
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.faq')}
              </button>
              <button onClick={() => scrollToSection('footer')} className="block w-full text-left py-2 hover:text-maid-cafe-primary transition-colors">
                {t('nav.contactUs')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Pass the current page to parent via data attribute */}
      <div data-current-page={currentPage} style={{ display: 'none' }}></div>
    </header>
  );
}


export type PageType = 'home' | 'schedule' | 'floorplan' | 'gallery';
