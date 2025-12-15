import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REGISTRATION_URL = 'https://forms.gle/KLR8cQNfihUMxGK38';

const RegistrationSection = () => {
  const { t, language } = useLanguage();
  
  const title = language === 'ar' 
    ? 'سجّل حضورك' 
    : language === 'en' 
    ? 'Register Now' 
    : 'Şimdi Kayıt Ol';
    
  const subtitle = language === 'ar'
    ? 'امسح الكود أو اضغط على الرابط للتسجيل'
    : language === 'en'
    ? 'Scan the code or click the link to register'
    : 'Kayıt olmak için kodu tarayın veya bağlantıya tıklayın';
    
  const buttonText = language === 'ar'
    ? 'سجّل الآن'
    : language === 'en'
    ? 'Register Now'
    : 'Şimdi Kayıt Ol';

  return (
    <section id="registration" className="py-16 md:py-24 bg-gradient-to-br from-syrian-green/10 via-background to-syrian-green/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-syrian-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-syrian-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 bg-syrian-green/20 text-syrian-green px-4 py-2 rounded-full mb-6">
            <UserPlus className="w-5 h-5" />
            <span className="font-semibold">{title}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground mb-10">
            {subtitle}
          </p>
          
          {/* QR Code Card */}
          <div className="relative mx-auto w-fit">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-syrian-green/30 blur-2xl rounded-3xl scale-110" />
            
            {/* Card */}
            <div className="relative bg-card border-2 border-syrian-green/30 rounded-3xl p-8 shadow-2xl">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-syrian-green rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-syrian-green rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-syrian-green rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-syrian-green rounded-br-2xl" />
              
              {/* QR Code */}
              <div className="bg-white p-4 rounded-2xl shadow-inner">
                <QRCodeSVG 
                  value={REGISTRATION_URL}
                  size={200}
                  level="H"
                  includeMargin={false}
                  fgColor="#086562"
                  bgColor="#ffffff"
                />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-1 border border-syrian-green/20 rounded-3xl pointer-events-none" />
            </div>
          </div>
          
          {/* Button */}
          <div className="mt-10">
            <Button 
              asChild
              size="lg"
              className="bg-syrian-green hover:bg-syrian-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-syrian-green/30 transition-all hover:shadow-xl hover:shadow-syrian-green/40 hover:scale-105"
            >
              <a 
                href={REGISTRATION_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <span>{buttonText}</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
