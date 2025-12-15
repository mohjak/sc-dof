import { useLanguage } from '@/contexts/LanguageContext';
import revolutionFlag from '@/assets/revolution-flag.jpg';

const WhySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="why" className="py-16 sm:py-24 relative overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${revolutionFlag})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-5xl mb-6 animate-pulse-glow">🕊️</span>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t('why.title')}
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-12 drop-shadow-md">
            {t('why.description')}
          </p>
          
          {/* Syrian Flag Colors Divider */}
          <div className="flex h-2 rounded-full overflow-hidden max-w-md mx-auto shadow-lg">
            <div className="flex-1 bg-syrian-green" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;