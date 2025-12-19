import { useLanguage } from '../contexts/LanguageContext';

export function Menu() {
  const { t } = useLanguage();
  
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-maid-cafe-primary font-extrabold text-3xl">{t('menu.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-maid-cafe-bg-light rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1652432751749-4d6085441aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtZW51JTIwYm9hcmR8ZW58MXx8fHwxNzY1OTYyNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="JSC Maid Cafe Menu"
              className="w-full h-[500px] object-cover"
            />
            <div className="p-8 text-center">
              <p className="text-gray-600">{t('menu.tba')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
