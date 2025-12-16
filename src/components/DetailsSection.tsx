import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import syrianFlag from '@/assets/syrian-flag.png';

const DetailsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="details" className="py-16 sm:py-24 bg-syrian-green text-primary-foreground relative overflow-hidden">
      {/* Decorative Flag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <img src={syrianFlag} alt="" className="w-96 blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📍</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('details.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Date Card */}
          <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">{t('details.date')}</h3>
            <p className="text-2xl font-bold text-yellow-300">{t('hero.date')}</p>
            <p className="text-primary-foreground/70 mt-1">{t('hero.day')}</p>
          </div>
          
          {/* Time Card */}
          <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">{t('details.time')}</h3>
            <p className="text-2xl font-bold text-yellow-300">{t('event.time')}</p>
            <p className="text-primary-foreground/70 mt-1">{t('details.evening')}</p>
          </div>
          
          {/* Location Card */}
          <a 
            href="https://maps.app.goo.gl/rUKx2mjTGYrHpPi89" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">{t('details.location')}</h3>
            <p className="text-xl font-bold text-yellow-300 font-roboto">{t('venue.name')}</p>
            <p className="text-primary-foreground/70 mt-1 font-roboto">{t('venue.address')}</p>
            <p className="text-sm text-yellow-300 mt-2 underline">{t('details.viewMap')}</p>
          </a>
        </div>
        
        {/* Embedded Map */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-primary-foreground/20 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.5446033892003!2d28.8088594!3d41.1007957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf0bde370313%3A0x434f2122d5ad81ba!2sBasaksehir%20Cinar%20College%20Campus!5e0!3m2!1sen!2str!4v1765871116608!5m2!1sen!2str" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;