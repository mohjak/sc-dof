import syrianEagle from '@/assets/syrian-eagle.webp';
import syrianFlag from '@/assets/syrian-flag.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-syrian-green" />
        <div className="flex-1 bg-card" />
        <div className="flex-1 bg-syrian-red" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Eagle & Flag */}
          <div className="flex items-center gap-6">
            <img src={syrianEagle} alt="العقاب السوري" className="w-16 h-16 opacity-80" />
            <img src={syrianFlag} alt="علم سوريا" className="w-20 rounded shadow-lg" />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">ذكرى التحرير</h3>
            <p className="text-background/70 text-sm mb-4">
              ذكرى لا تموت • نحتفل معاً بحرية سوريا
            </p>
          </div>
          
          {/* Social/Contact hint */}
          <p className="text-background/50 text-xs">
            الجالية السورية في تركيا • أكاديمية الريادة للتنمية المستدامة
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-background/40 pt-4 border-t border-background/10 w-full max-w-md">
            <span>© {currentYear}</span>
            <span>•</span>
            <span>جميع الحقوق محفوظة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
