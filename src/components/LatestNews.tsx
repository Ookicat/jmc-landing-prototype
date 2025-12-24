import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import koiChan from '../assets/te-ca.png'; // Import your koi-chan image

export function LatestNews() {
  const { t } = useLanguage();

  useEffect(() => {
    // Ensure Facebook SDK parses the new XFBML when component mounts
    // @ts-ignore
    if (window.FB) {
      // @ts-ignore
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section id="latest-news" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-12 text-maid-cafe-primary font-extrabold text-3xl">{t('news.title')}</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-maid-cafe-bg-light rounded-2xl p-8 text-center relative">
            <p className="text-gray-600 mb-4">{t('news.followUs')}</p>

            <div className="flex justify-center">
              {/* Added wrapper with explicit width to prevent flexbox collapse */}
              <div className="w-full max-w-[500px] overflow-hidden">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/clbJSC"
                  data-tabs="timeline"
                  data-width="500"
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote cite="https://www.facebook.com/clbJSC" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/clbJSC">JSC Maid Cafe</a>
                  </blockquote>
                </div>
              </div>
            </div>

            <img 
              src={koiChan} 
              alt="Koi-chan decoration" 
              className="koi-decoration"
              style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-50px',
                width: '200px',
                height: 'auto',
                objectFit: 'contain',
                pointerEvents: 'none',
                transform: 'scaleX(-1)'
              }}
            />
            <style>{`
              @media (min-width: 1024px) {
                .koi-decoration {
                  width: 370px !important;
                  bottom: -60px !important;
                  right: -155px !important;
                }
              }

              @media (min-width: 768px) and (max-width: 1023px) {
                .koi-decoration {
                  width: 300px !important;
                  bottom: -40px !important;
                  right: -130px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
