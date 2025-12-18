import { useLanguage } from '../../contexts/LanguageContext';

export function Gallery() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#f2f4f7] pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#f06292] mb-8">{t('gallery.title')}</h1>
          <div className="bg-white rounded-2xl shadow-lg p-16">
            <div className="text-6xl mb-6">📸</div>
            <h2 className="text-gray-800 mb-4">{t('gallery.comingSoon')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
