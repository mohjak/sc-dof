import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.why': 'لماذا؟',
    'nav.goals': 'الأهداف',
    'nav.details': 'التفاصيل',
    'nav.agenda': 'البرنامج',
    'nav.speakers': 'المتحدثون',
    'nav.organizers': 'المنظمون',
    'nav.register': 'التسجيل',
    
    // Hero
    'hero.title': 'ذكرى التحرير',
    'hero.subtitle': 'ذكرى لا تموت',
    'hero.tagline': 'احتفال بذكرى تحرير سوريا، لنعيد الفرح ونجدد العهد ونكمل المسيرة',
    'hero.discoverMore': 'اكتشف المزيد',
    'hero.date': '20 ديسمبر 2025',
    'hero.day': 'الأحد',
    
    // Details
    'details.title': 'تفاصيل الحفل',
    'details.date': 'التاريخ',
    'details.time': 'الوقت',
    'details.location': 'المكان',
    'details.evening': 'مساءً',
    'details.viewMap': 'عرض الخريطة',
    'event.time': '4:00 - 7:00 مساءً',
    
    // Why
    'why.title': 'لماذا الاحتفال؟',
    'why.description': 'نحيي ذكرى يوم انتظرناه عمراً، يوم زال فيه الطغيان، وحلّ الأمان، فحُقّ لنا أن نجعله عيداً.',
    
    // Goals
    'goals.title': 'أهداف الحفل',
    'goals.1.title': 'التذكير بالماضي',
    'goals.1.description': 'التذكير بأفعال الأسد ليدرك الناس أهمية الثورة وسبب قيامها',
    'goals.2.title': 'تبيان التحول',
    'goals.2.description': 'تبيان حال سوريا قبل وبعد (اقتصادياً، سياسياً، دينياً، واجتماعياً)',
    'goals.3.title': 'إحياء الذكرى',
    'goals.3.description': 'التذكير بالشهداء والمعتقلين والأيتام',
    'goals.4.title': 'مواصلة المسيرة',
    'goals.4.description': 'الحث على مواصلة المسيرة حتى تعود سوريا لمقود الحضارة',
    
    // Agenda
    'agenda.title': 'برنامج الحفل',
    'agenda.subtitle': 'فقرات متنوعة تحيي ذكرى التحرير',
    'agenda.1.time': 'الفقرة 1',
    'agenda.1.title': 'فيديوهات توثيقية',
    'agenda.1.description': 'فيديوهات توثق حقبة الأسد حتى يوم التحرير',
    'agenda.2.time': 'الفقرة 2',
    'agenda.2.title': 'مواقف تمثيلية',
    'agenda.2.description': 'مواقف تمثيلية (كوميدية وتراجيدية) تجسد واقع سوريا',
    'agenda.3.time': 'الفقرة 3',
    'agenda.3.title': 'فرقة موسيقية',
    'agenda.3.description': 'فرقة موسيقية وغناء حي لأناشيد وطنية',
    'agenda.4.time': 'الفقرة 4',
    'agenda.4.title': 'لقاء مميز',
    'agenda.4.description': 'لقاء مع مجاهد ومعتقل',
    'agenda.5.time': 'الفقرة 5',
    'agenda.5.title': 'عراضة وأهازيج',
    'agenda.5.description': 'عراضة وأهازيج الثورة',
    'agenda.6.time': 'الفقرة 6',
    'agenda.6.title': 'أغاني الانتصار',
    'agenda.6.description': 'أغاني الانتصار والفرح',
    
    // Speakers
    'speakers.title': 'المتحدثون والمشاركون',
    'speakers.subtitle': 'نخبة من الشخصيات المميزة تشارك في إحياء هذه الذكرى',
    
    // Organizers
    'organizers.title': 'المنظمون',
    'organizers.subtitle': 'الجهات المنظمة للحفل',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.madeWith': 'صنع بـ ❤️ للجالية السورية',
    
    // Venue
    'venue.name': 'Gökkuşağı Tesisleri',
    'venue.address': 'Başak, 34480 Başakşehir/İstanbul',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.why': 'Why?',
    'nav.goals': 'Goals',
    'nav.details': 'Details',
    'nav.agenda': 'Program',
    'nav.speakers': 'Speakers',
    'nav.organizers': 'Organizers',
    'nav.register': 'Register',
    
    // Hero
    'hero.title': 'Liberation Day',
    'hero.subtitle': 'A Memory That Never Dies',
    'hero.tagline': "Celebrating Syria's liberation, renewing our commitment and continuing the journey",
    'hero.discoverMore': 'Discover More',
    'hero.date': 'December 20, 2025',
    'hero.day': 'Sunday',
    
    // Details
    'details.title': 'Event Details',
    'details.date': 'Date',
    'details.time': 'Time',
    'details.location': 'Location',
    'details.evening': 'Evening',
    'details.viewMap': 'View Map',
    'event.time': '4:00 PM - 7:00 PM',
    
    // Why
    'why.title': 'Why Celebrate?',
    'why.description': 'We commemorate a day we waited a lifetime for, a day when tyranny ended and peace prevailed - it deserves to be a celebration.',
    
    // Goals
    'goals.title': 'Event Goals',
    'goals.1.title': 'Remembering the Past',
    'goals.1.description': "Remembering Assad's actions so people understand the importance of the revolution",
    'goals.2.title': 'Showing Transformation',
    'goals.2.description': 'Showing Syria before and after (economically, politically, religiously, and socially)',
    'goals.3.title': 'Honoring Memories',
    'goals.3.description': 'Remembering the martyrs, detainees, and orphans',
    'goals.4.title': 'Continuing the Journey',
    'goals.4.description': 'Encouraging the continuation of the path until Syria leads civilization again',
    
    // Agenda
    'agenda.title': 'Event Program',
    'agenda.subtitle': 'Various segments celebrating Liberation Day',
    'agenda.1.time': 'Segment 1',
    'agenda.1.title': 'Documentary Videos',
    'agenda.1.description': 'Videos documenting the Assad era until Liberation Day',
    'agenda.2.time': 'Segment 2',
    'agenda.2.title': 'Theatrical Performances',
    'agenda.2.description': "Comedy and tragedy performances depicting Syria's reality",
    'agenda.3.time': 'Segment 3',
    'agenda.3.title': 'Musical Band',
    'agenda.3.description': 'Live music and national songs',
    'agenda.4.time': 'Segment 4',
    'agenda.4.title': 'Special Interview',
    'agenda.4.description': 'Interview with a freedom fighter and former detainee',
    'agenda.5.time': 'Segment 5',
    'agenda.5.title': 'Traditional Dances',
    'agenda.5.description': 'Revolutionary chants and traditional dances',
    'agenda.6.time': 'Segment 6',
    'agenda.6.title': 'Victory Songs',
    'agenda.6.description': 'Songs of victory and celebration',
    
    // Speakers
    'speakers.title': 'Speakers & Participants',
    'speakers.subtitle': 'Distinguished personalities participating in this commemoration',
    
    // Organizers
    'organizers.title': 'Organizers',
    'organizers.subtitle': 'Event organizing bodies',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.madeWith': 'Made with ❤️ for the Syrian Community',
    
    // Venue
    'venue.name': 'Gökkuşağı Tesisleri',
    'venue.address': 'Başak, 34480 Başakşehir/İstanbul',
  },
  tr: {
    // Nav
    'nav.home': 'Ana Sayfa',
    'nav.why': 'Neden?',
    'nav.goals': 'Hedefler',
    'nav.details': 'Detaylar',
    'nav.agenda': 'Program',
    'nav.speakers': 'Konuşmacılar',
    'nav.organizers': 'Organizatörler',
    'nav.register': 'Kayıt',
    
    // Hero
    'hero.title': 'Kurtuluş Günü',
    'hero.subtitle': 'Asla Ölmeyen Bir Anı',
    'hero.tagline': "Suriye'nin kurtuluşunu kutluyoruz, taahhüdümüzü yeniliyoruz ve yolculuğa devam ediyoruz",
    'hero.discoverMore': 'Daha Fazlasını Keşfet',
    'hero.date': '20 Aralık 2025',
    'hero.day': 'Pazar',
    
    // Details
    'details.title': 'Etkinlik Detayları',
    'details.date': 'Tarih',
    'details.time': 'Saat',
    'details.location': 'Konum',
    'details.evening': 'Akşam',
    'details.viewMap': 'Haritayı Görüntüle',
    'event.time': '16:00 - 19:00',
    
    // Why
    'why.title': 'Neden Kutluyoruz?',
    'why.description': 'Ömür boyu beklediğimiz bir günü anıyoruz, zulmün sona erdiği ve barışın hüküm sürdüğü bir gün - kutlanmayı hak ediyor.',
    
    // Goals
    'goals.title': 'Etkinlik Hedefleri',
    'goals.1.title': 'Geçmişi Hatırlamak',
    'goals.1.description': "İnsanların devrimin önemini anlaması için Esad'ın eylemlerini hatırlatmak",
    'goals.2.title': 'Dönüşümü Göstermek',
    'goals.2.description': "Suriye'nin öncesi ve sonrasını göstermek (ekonomik, politik, dini ve sosyal olarak)",
    'goals.3.title': 'Anıları Onurlandırmak',
    'goals.3.description': 'Şehitleri, tutukluları ve yetimleri anmak',
    'goals.4.title': 'Yolculuğa Devam',
    'goals.4.description': 'Suriye tekrar medeniyete liderlik edene kadar yolculuğa devam etmeyi teşvik etmek',
    
    // Agenda
    'agenda.title': 'Etkinlik Programı',
    'agenda.subtitle': 'Kurtuluş Gününü kutlayan çeşitli bölümler',
    'agenda.1.time': 'Bölüm 1',
    'agenda.1.title': 'Belgesel Videolar',
    'agenda.1.description': 'Esad döneminden Kurtuluş Gününe kadar olan belgesel videolar',
    'agenda.2.time': 'Bölüm 2',
    'agenda.2.title': 'Tiyatro Gösterileri',
    'agenda.2.description': "Suriye'nin gerçekliğini anlatan komedi ve trajedi gösterileri",
    'agenda.3.time': 'Bölüm 3',
    'agenda.3.title': 'Müzik Grubu',
    'agenda.3.description': 'Canlı müzik ve milli şarkılar',
    'agenda.4.time': 'Bölüm 4',
    'agenda.4.title': 'Özel Röportaj',
    'agenda.4.description': 'Özgürlük savaşçısı ve eski tutuklu ile röportaj',
    'agenda.5.time': 'Bölüm 5',
    'agenda.5.title': 'Geleneksel Danslar',
    'agenda.5.description': 'Devrim sloganları ve geleneksel danslar',
    'agenda.6.time': 'Bölüm 6',
    'agenda.6.title': 'Zafer Şarkıları',
    'agenda.6.description': 'Zafer ve kutlama şarkıları',
    
    // Speakers
    'speakers.title': 'Konuşmacılar ve Katılımcılar',
    'speakers.subtitle': 'Bu anmaya katılan seçkin kişilikler',
    
    // Organizers
    'organizers.title': 'Organizatörler',
    'organizers.subtitle': 'Etkinlik düzenleyicileri',
    
    // Footer
    'footer.rights': 'Tüm Hakları Saklıdır',
    'footer.madeWith': 'Suriye Topluluğu için ❤️ ile yapıldı',
    
    // Venue
    'venue.name': 'Gökkuşağı Tesisleri',
    'venue.address': 'Başak, 34480 Başakşehir/İstanbul',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
