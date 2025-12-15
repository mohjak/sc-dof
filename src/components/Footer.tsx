import { useLanguage } from '@/contexts/LanguageContext';
import syrianEagle from '@/assets/syrian-eagle.webp';
import syrianFlag from '@/assets/syrian-flag.png';
import communityLogo from '@/assets/community-logo-white.png';
import { Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const subtitle = language === 'ar' 
    ? 'ذكرى لا تموت • نحتفل معاً بحرية سوريا'
    : language === 'en'
    ? 'A Memory That Never Dies • Celebrating Syria\'s Freedom Together'
    : 'Asla Ölmeyen Bir Anı • Suriye\'nin Özgürlüğünü Birlikte Kutluyoruz';
  
  const followUs = language === 'ar' ? 'تابعونا' : language === 'en' ? 'Follow Us' : 'Bizi Takip Edin';
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];
  
  return (
    <footer className="py-12 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-syrian-green" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-black" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          
          {/* Left: Info & Social */}
          <div className="text-center md:text-start order-2 md:order-1">
            <h3 className="text-xl font-bold mb-3">{t('hero.title')}</h3>
            <p className="text-background/70 text-sm mb-4">{subtitle}</p>
            
            {/* Social Links */}
            <div className="mt-4">
              <p className="text-background/50 text-xs mb-3">{followUs}</p>
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-syrian-green hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center: Eagle & Flag */}
          <div className="flex flex-col items-center gap-4 order-1 md:order-2">
            <div className="flex items-center gap-4">
              <img src={syrianEagle} alt="العقاب السوري" className="w-14 h-14 opacity-80" />
              <img src={syrianFlag} alt="علم سوريا" className="w-16 rounded shadow-lg" />
            </div>
          </div>
          
          {/* Right: Community Logo */}
          <div className="flex justify-center md:justify-end order-3">
            <img 
              src={communityLogo} 
              alt="الجالية السورية" 
              className="h-36 md:h-44 object-contain" 
            />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-background/40 pt-6 border-t border-background/10">
          <span>© {currentYear}</span>
          <span className="hidden sm:inline">•</span>
          <span>{t('footer.rights')}</span>
          <span className="hidden sm:inline">•</span>
          <a 
            href="https://mohjak.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-syrian-green transition-colors font-roboto"
          >
            Mohjak.com
          </a>
          <span className="hidden sm:inline">•</span>
          <a 
            href="https://github.com/mohjak/sc-dof" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-syrian-green transition-colors font-roboto"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;