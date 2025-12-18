import { useLanguage } from '../contexts/LanguageContext';

export function Rules() {
  const { t } = useLanguage();
  
  const rules = [
    'rules.rule1',
    'rules.rule2',
    'rules.rule3',
    'rules.rule4',
    'rules.rule5',
    'rules.rule6',
    'rules.rule7',
    'rules.rule8',
  ];

  return (
    <section id="rules" className="py-16 bg-[#f2f4f7]">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-[#f06292] font-extrabold text-3xl">{t('rules.title')}</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center">
              {t('rules.intro')}
            </p>
            
            <div className="space-y-4">
              {rules.map((ruleKey, index) => (
                <div key={index} className="flex gap-4 p-4 bg-[#f2f4f7] rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f06292] rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{t(ruleKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-pink-50 border-l-4 border-[#f06292] rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> {t('rules.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
