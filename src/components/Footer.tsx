import { useLanguage } from '@/contexts/LanguageContext';
import syrianEagle from '@/assets/syrian-eagle.webp';
import syrianFlag from '@/assets/syrian-flag.png';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const subtitle = language === 'ar' 
    ? 'ذكرى لا تموت • نحتفل معاً بحرية سوريا'
    : language === 'en'
    ? 'A Memory That Never Dies • Celebrating Syria\'s Freedom Together'
    : 'Asla Ölmeyen Bir Anı • Suriye\'nin Özgürlüğünü Birlikte Kutluyoruz';
  
  const organizers = language === 'ar'
    ? 'الجالية السورية في تركيا • أكاديمية الريادة للتنمية المستدامة'
    : language === 'en'
    ? 'Syrian Community in Turkey • Leadership Academy for Sustainable Development'
    : "Türkiye'deki Suriye Topluluğu • Sürdürülebilir Kalkınma için Liderlik Akademisi";
  
  return (
    <footer className="py-10 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-syrian-green" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-black" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Eagle & Flag */}
          <div className="flex items-center gap-6">
            <img src={syrianEagle} alt="العقاب السوري" className="w-16 h-16 opacity-80" />
            <img src={syrianFlag} alt="علم سوريا" className="w-20 rounded shadow-lg" />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{t('hero.title')}</h3>
            <p className="text-background/70 text-sm mb-4">
              {subtitle}
            </p>
          </div>
          
          {/* Social/Contact hint */}
          <p className="text-background/50 text-xs">
            {organizers}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-background/40 pt-4 border-t border-background/10 w-full max-w-md">
            <span>© {currentYear}</span>
            <span>•</span>
            <span>{t('footer.rights')}</span>
            <span>•</span>
            <a 
              href="https://mohjak.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-syrian-green transition-colors"
            >
              Mohjak.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;