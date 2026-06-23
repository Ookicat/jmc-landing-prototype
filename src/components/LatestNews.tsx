import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import koiChan from '../assets/te-ca.webp';

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

        <div className="news-container max-w-4xl mx-auto">
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
                width: '100px',
                height: 'auto',
                objectFit: 'contain',
                pointerEvents: 'none',
                transform: 'scaleX(-1)'
              }}
            />
            <style>{`
              /* 1. Mobile/Smallest screens first */
              @media (min-width: 320px) and (max-width: 376px) {
                .koi-decoration {
                  width: 80px !important;
                  bottom: -30px !important;
                  right: -10px !important;
                }
              }

              /* 2. Next size up */
              @media (min-width: 425px) {
                .koi-decoration {
                  width: 80px !important;
                  bottom: -30px !important;
                  right: -10px !important;
                }
              }

              /* 3. Tablets */
              @media (min-width: 768px) {
                .koi-decoration {
                  width: 120px !important;
                  bottom: -30px !important;
                  right: -70px !important;
                }
                .news-container {
                  width: 38rem ;
                }
              }

              /* 4. Large Tablets / Small Laptops */
              @media (min-width: 769px) and (max-width: 1023px) {
                .koi-decoration {
                  width: 150px !important;
                  bottom: -40px !important;
                  right: -90px !important;
                }
              }

              /* 5. Laptops */
              @media (min-width: 1024px) {
                .koi-decoration {
                  width: 150px !important;
                  bottom: -30px !important;
                  right: -65px !important;
                }
                .news-container {
                  width: 48rem ;
                }
              }

              /* 5. Desktops */
              @media (min-width: 1440px) {
                .koi-decoration {
                  width: 150px !important;
                  bottom: -30px !important;
                  right: -65px !important;
                }
                .news-container {
                  width: 58rem !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
