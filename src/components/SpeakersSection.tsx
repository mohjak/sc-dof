import { Mic, Music, Palette, BookOpen, Building2, Scale, Clapperboard, Tv } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Speaker {
  id: number;
  name: string;
  nameEn: string;
  nameTr: string;
  role: string;
  roleEn: string;
  roleTr: string;
  icon: React.ElementType;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'أ. فاتح حبابة',
    nameEn: 'Fatih Hababa',
    nameTr: 'Fatih Hababa',
    role: 'العريف - مذيع في القناة التاسعة',
    roleEn: 'Host - TV Presenter at Channel 9',
    roleTr: 'Sunucu - Kanal 9 TV Sunucusu',
    icon: Tv,
  },
  {
    id: 2,
    name: 'يحيى حوا',
    nameEn: 'Yahya Hawa',
    nameTr: 'Yahya Hawa',
    role: 'القرآن الكريم',
    roleEn: 'Quran Recitation',
    roleTr: 'Kuran Tilaveti',
    icon: BookOpen,
  },
  {
    id: 3,
    name: 'د. منال النجار',
    nameEn: 'Dr. Manal Al-Najjar',
    nameTr: 'Dr. Manal Al-Najjar',
    role: 'رئيس أكاديمية الريادة للتنمية المستدامة',
    roleEn: 'President of Al-Riada Academy for Sustainable Development',
    roleTr: 'Sürdürülebilir Kalkınma için Al-Riada Akademisi Başkanı',
    icon: Building2,
  },
  {
    id: 4,
    name: 'أ. مصطفى تيت',
    nameEn: 'Mustafa Tit',
    nameTr: 'Mustafa Tit',
    role: 'فنان تشكيلي',
    roleEn: 'Visual Artist',
    roleTr: 'Görsel Sanatçı',
    icon: Palette,
  },
  {
    id: 5,
    name: 'م. صفون خباز',
    nameEn: 'Eng. Safwan Khabbaz',
    nameTr: 'Müh. Safwan Khabbaz',
    role: 'مهندس ميكانيك - عضو المجلس الاستشاري في الجالية السورية',
    roleEn: 'Mechanical Engineer - Advisory Council Member of Syrian Community',
    roleTr: 'Makine Mühendisi - Suriye Topluluğu Danışma Kurulu Üyesi',
    icon: Building2,
  },
  {
    id: 6,
    name: 'أ. حسان الجاجة',
    nameEn: 'Hassan Al-Jaja',
    nameTr: 'Hassan Al-Jaja',
    role: 'شاعر سوري',
    roleEn: 'Syrian Poet',
    roleTr: 'Suriyeli Şair',
    icon: Mic,
  },
  {
    id: 7,
    name: 'د. محمد حيدر',
    nameEn: 'Dr. Mohammad Haidar',
    nameTr: 'Dr. Mohammad Haidar',
    role: 'رئيس مجلس إدارة شركة آدم القابضة',
    roleEn: 'Chairman of Adam Holding Company',
    roleTr: 'Adam Holding Şirketi Yönetim Kurulu Başkanı',
    icon: Building2,
  },
  {
    id: 8,
    name: 'د. محمد رمضان',
    nameEn: 'Dr. Mohammad Ramadan',
    nameTr: 'Dr. Mohammad Ramadan',
    role: 'محامٍ ورئيس مجلس إدارة الجالية السورية',
    roleEn: 'Lawyer & Chairman of Syrian Community Board',
    roleTr: 'Avukat ve Suriye Topluluğu Yönetim Kurulu Başkanı',
    icon: Scale,
  },
  {
    id: 9,
    name: 'أ. ممدوح الديري',
    nameEn: 'Mamdouh Al-Deiri',
    nameTr: 'Mamdouh Al-Deiri',
    role: 'مهندس مدني - رئيس المجلس الاستشاري للاتحاد العربي للأسر المنتجة ورئيس المجلس الاستشاري في الجالية السورية',
    roleEn: 'Civil Engineer - Chairman of Arab Union for Productive Families Advisory Council & Syrian Community Advisory Council',
    roleTr: 'İnşaat Mühendisi - Üretici Aileler Arap Birliği ve Suriye Topluluğu Danışma Kurulu Başkanı',
    icon: Building2,
  },
  {
    id: 10,
    name: 'م. محمود رمضان',
    nameEn: 'Eng. Mahmoud Ramadan',
    nameTr: 'Müh. Mahmoud Ramadan',
    role: 'مهندس ميكاترونيك واقتصادي - نائب رئيس الجالية السورية',
    roleEn: 'Mechatronics Engineer & Economist - Vice President of Syrian Community',
    roleTr: 'Mekatronik Mühendisi ve Ekonomist - Suriye Topluluğu Başkan Yardımcısı',
    icon: Building2,
  },
  {
    id: 11,
    name: 'عبد القادر السكري',
    nameEn: 'Abdulkader Al-Sukari',
    nameTr: 'Abdulkader Al-Sukari',
    role: 'رجل أعمال - عضو الهيئة الإدارية في الجالية السورية',
    roleEn: 'Businessman - Administrative Board Member of Syrian Community',
    roleTr: 'İş Adamı - Suriye Topluluğu İdari Kurul Üyesi',
    icon: Building2,
  },
  {
    id: 12,
    name: 'أ. محمد البيك',
    nameEn: 'Mohammad Al-Beik',
    nameTr: 'Mohammad Al-Beik',
    role: 'قناة تلفزيون سوريا',
    roleEn: 'Syria TV Channel',
    roleTr: 'Suriye TV Kanalı',
    icon: Tv,
  },
  {
    id: 13,
    name: 'نمر نبهان',
    nameEn: 'Nemr Nabhan',
    nameTr: 'Nemr Nabhan',
    role: 'مؤسس أكاديمية بوليفارد للتمثيل',
    roleEn: 'Founder of Boulevard Acting Academy',
    roleTr: 'Boulevard Oyunculuk Akademisi Kurucusu',
    icon: Clapperboard,
  },
  {
    id: 14,
    name: 'سعد الدالي',
    nameEn: 'Saad Al-Dali',
    nameTr: 'Saad Al-Dali',
    role: 'فنان ورئيس فرقة موسيقية',
    roleEn: 'Artist & Music Band Leader',
    roleTr: 'Sanatçı ve Müzik Grubu Lideri',
    icon: Music,
  },
];

const SpeakersSection = () => {
  const { t, language } = useLanguage();

  const getName = (speaker: Speaker) => {
    if (language === 'en') return speaker.nameEn;
    if (language === 'tr') return speaker.nameTr;
    return speaker.name;
  };

  const getRole = (speaker: Speaker) => {
    if (language === 'en') return speaker.roleEn;
    if (language === 'tr') return speaker.roleTr;
    return speaker.role;
  };

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">🎤</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            {t('speakers.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('speakers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => {
            const IconComponent = speaker.icon;
            return (
              <div
                key={speaker.id}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {getName(speaker)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {getRole(speaker)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
