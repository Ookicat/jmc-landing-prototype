import { Mail, Phone, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer id="footer" className="bg-gradient-to-br from-maid-cafe-primary to-maid-cafe-secondary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-white">{t('footer.eventName')}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:jsc.fptuhcm@gmail.com" className="hover:text-pink-100 transition-colors">
                  jsc.fptuhcm@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+84123456789" className="hover:text-pink-100 transition-colors">
                  +84 123 456 789
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/clbJSC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-100 transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                  <span>{t('footer.followFacebook')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Address and Map */}
          <div className="space-y-4">
            <div>
              <h4 className="text-white mb-3 font-semibold">{t('footer.location')}</h4>
              <div className="text-pink-100 text-sm space-y-1">
                <p>{t('footer.address1')}</p>
                <p>{t('footer.address2')}</p>
                <p>{t('footer.address3')}</p>
                <p>{t('footer.address4')}</p>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.80730807583831!3d10.84127285799443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1702920000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FPT University HCM Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pink-300/30 text-center text-sm text-pink-100">
          <div className="flex flex-col items-center gap-3">
            <img
              src={logo}
              alt="JSC Maid Cafe logo"
              className="h-8 w-auto opacity-95"
            />
            <div>
              <p>{t('footer.copyright')}</p>
              <p className="mt-2">{t('footer.organizer')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
