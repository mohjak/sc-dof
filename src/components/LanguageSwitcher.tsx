import { useLanguage, Language } from '@/contexts/LanguageContext';
import syrianFlag from '@/assets/syrian-flag.png';

const languages: { code: Language; label: string; flag: string | null }[] = [
  { code: 'ar', label: 'العربية', flag: null },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

interface LanguageSwitcherProps {
  variant?: 'floating' | 'navbar';
}

const LanguageSwitcher = ({ variant = 'floating' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  const isFloating = variant === 'floating';

  return (
    <div className={`flex gap-1 ${isFloating ? 'fixed top-4 left-4 z-50 bg-card/90 backdrop-blur-sm shadow-lg border border-border' : 'bg-transparent'} rounded-full p-1`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all ${
            language === lang.code
              ? 'bg-syrian-green text-primary-foreground'
              : 'hover:bg-syrian-green/20 text-foreground'
          }`}
        >
          {lang.flag ? (
            <span>{lang.flag}</span>
          ) : (
            <img src={syrianFlag} alt="علم سوريا الحرة" className="w-5 h-3 rounded-sm object-cover" />
          )}
          <span className={`hidden sm:inline ${lang.code !== 'ar' ? 'font-roboto' : ''}`}>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
