import { useLanguage } from '../../contexts/LanguageContext';

export function Floorplan() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-maid-cafe-bg-light pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-maid-cafe-primary mb-8">{t('floorplan.title')}</h1>
          <div className="bg-white rounded-2xl shadow-lg p-16">
            <div className="text-6xl mb-6">🗺️</div>
            <h2 className="text-gray-800 mb-4">{t('floorplan.comingSoon')}</h2>
            <p className="text-gray-600">
              {t('floorplan.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
