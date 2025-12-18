import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LatestNews } from './components/LatestNews';
import { Activities } from './components/Activities';
import { Menu } from './components/Menu';
import { Rules } from './components/Rules';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { EventSchedule } from './components/info-pages/EventSchedule';
import { Floorplan } from './components/info-pages/Floorplan';
import { Gallery } from './components/info-pages/Gallery';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'schedule' | 'floorplan' | 'gallery'>('home');

  // Listen for page changes from Header
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const pageElement = document.querySelector('[data-current-page]');
      if (pageElement) {
        const page = pageElement.getAttribute('data-current-page') as 'home' | 'schedule' | 'floorplan' | 'gallery';
        if (page) setCurrentPage(page);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['data-current-page']
    });

    return () => observer.disconnect();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <EventSchedule />;
      case 'floorplan':
        return <Floorplan />;
      case 'gallery':
        return <Gallery />;
      default:
        return (
          <main>
            <Hero />
            <LatestNews />
            <Activities />
            <Menu />
            <Rules />
            <FAQ />
          </main>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f2f4f7]">
        <Header />
        {renderPage()}
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}