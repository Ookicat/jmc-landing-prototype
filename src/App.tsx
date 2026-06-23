import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';
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

// Home page component
function HomePage() {
  return (
    <main>
      <Hero />
      <LatestNews />
      <Activities />
      <Menu />
      {/* <Rules /> */}
      <FAQ />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-maid-cafe-bg-light">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<EventSchedule />} />
          <Route path="/floorplan" element={<Floorplan />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}