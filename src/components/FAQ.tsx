import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2', answerKey: 'faq.a2' },
    { questionKey: 'faq.q3', answerKey: 'faq.a3' },
    { questionKey: 'faq.q4', answerKey: 'faq.a4' },
    { questionKey: 'faq.q5', answerKey: 'faq.a5' },
    { questionKey: 'faq.q6', answerKey: 'faq.a6' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-[#f06292] font-extrabold text-3xl">{t('faq.title')}</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#f2f4f7] rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
                >
                  <span className="pr-4">{t(faq.questionKey)}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#f06292] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{t(faq.answerKey)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center p-6 bg-[#f06292] rounded-2xl text-white">
            <p className="font-bold">{t('faq.stillQuestions')}</p>
            <p className="text-sm mt-2">{t('faq.contactInfo')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
