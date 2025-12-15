const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🇸🇾</span>
          <span className="font-bold text-lg">ذكرى التحرير</span>
        </div>
        
        <p className="text-background/70 text-sm mb-4">
          نحتفل معاً بحرية سوريا ومستقبلها المشرق
        </p>
        
        <div className="flex items-center justify-center gap-2 text-xs text-background/50">
          <span>© {currentYear}</span>
          <span>•</span>
          <span>الجالية السورية</span>
          <span>•</span>
          <span>جميع الحقوق محفوظة</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
