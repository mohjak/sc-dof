import { useLanguage } from '@/contexts/LanguageContext';

// Import speaker images
import fatihHababaImg from '@/assets/speakers/fatih-hababa.jpeg';
import hassanAljjajaImg from '@/assets/speakers/hassan-aljaja.jpeg';
import mustafaTitImg from '@/assets/speakers/mustafa-tit.jpeg';
import safwanKhabbazImg from '@/assets/speakers/safwan-khabbaz.jpeg';
import mohammadRamadanImg from '@/assets/speakers/mohammad-ramadan.jpeg';
import mahmoudRamadanImg from '@/assets/speakers/mahmoud-ramadan.jpeg';
import nemrNabhanImg from '@/assets/speakers/nemr-nabhan.jpeg';
import saadAldaliImg from '@/assets/speakers/saad-aldali.jpeg';
import mohammadAlbeikImg from '@/assets/speakers/mohammad-albeik.jpeg';
import ahmadRamadanImg from '@/assets/speakers/ahmad-ramadan.jpeg';

interface Speaker {
  id: number;
  name: string;
  nameEn: string;
  nameTr: string;
  role: string;
  roleEn: string;
  roleTr: string;
  image?: string;
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
    image: fatihHababaImg,
  },
  {
    id: 2,
    name: 'د. أحمد رمضان',
    nameEn: 'Dr. Ahmad Ramadan',
    nameTr: 'Dr. Ahmad Ramadan',
    role: 'رئيس حركة العمل الوطني ورئيس مؤسسة مدى للرؤية الاستراتيجية',
    roleEn: 'President of National Action Movement & Mada Strategic Vision Foundation',
    roleTr: 'Ulusal Eylem Hareketi ve Mada Stratejik Vizyon Vakfı Başkanı',
    image: ahmadRamadanImg,
  },
  {
    id: 3,
    name: 'أ. مصطفى تيت',
    nameEn: 'Mustafa Tit',
    nameTr: 'Mustafa Tit',
    role: 'فنان تشكيلي',
    roleEn: 'Visual Artist',
    roleTr: 'Görsel Sanatçı',
    image: mustafaTitImg,
  },
  {
    id: 4,
    name: 'م. صفوان خباز',
    nameEn: 'Eng. Safwan Khabbaz',
    nameTr: 'Müh. Safwan Khabbaz',
    role: 'مهندس ميكانيك - عضو المجلس الاستشاري في الجالية السورية',
    roleEn: 'Mechanical Engineer - Advisory Council Member of Syrian Community',
    roleTr: 'Makine Mühendisi - Suriye Topluluğu Danışma Kurulu Üyesi',
    image: safwanKhabbazImg,
  },
  {
    id: 5,
    name: 'أ. حسان الجاجة',
    nameEn: 'Hassan Al-Jaja',
    nameTr: 'Hassan Al-Jaja',
    role: 'شاعر سوري',
    roleEn: 'Syrian Poet',
    roleTr: 'Suriyeli Şair',
    image: hassanAljjajaImg,
  },
  {
    id: 6,
    name: 'د. محمد رمضان',
    nameEn: 'Dr. Mohammad Ramadan',
    nameTr: 'Dr. Mohammad Ramadan',
    role: 'محامٍ ورئيس مجلس إدارة الجالية السورية',
    roleEn: 'Lawyer & Chairman of Syrian Community Board',
    roleTr: 'Avukat ve Suriye Topluluğu Yönetim Kurulu Başkanı',
    image: mohammadRamadanImg,
  },
  {
    id: 7,
    name: 'م. محمود رمضان',
    nameEn: 'Eng. Mahmoud Ramadan',
    nameTr: 'Müh. Mahmoud Ramadan',
    role: 'مهندس ميكاترونيك واقتصادي - نائب رئيس الجالية السورية',
    roleEn: 'Mechatronics Engineer & Economist - Vice President of Syrian Community',
    roleTr: 'Mekatronik Mühendisi ve Ekonomist - Suriye Topluluğu Başkan Yardımcısı',
    image: mahmoudRamadanImg,
  },
  {
    id: 8,
    name: 'أ. محمد البيك',
    nameEn: 'Mohammad Al-Beik',
    nameTr: 'Mohammad Al-Beik',
    role: 'قناة تلفزيون سوريا',
    roleEn: 'Syria TV Channel',
    roleTr: 'Suriye TV Kanalı',
    image: mohammadAlbeikImg,
  },
  {
    id: 9,
    name: 'نمر نبهان',
    nameEn: 'Nemr Nabhan',
    nameTr: 'Nemr Nabhan',
    role: 'مؤسس أكاديمية بوليفارد للتمثيل',
    roleEn: 'Founder of Boulevard Acting Academy',
    roleTr: 'Boulevard Oyunculuk Akademisi Kurucusu',
    image: nemrNabhanImg,
  },
  {
    id: 10,
    name: 'سعد الدالي',
    nameEn: 'Saad Al-Dali',
    nameTr: 'Saad Al-Dali',
    role: 'فنان ورئيس فرقة موسيقية',
    roleEn: 'Artist & Music Band Leader',
    roleTr: 'Sanatçı ve Müzik Grubu Lideri',
    image: saadAldaliImg,
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
            return (
              <div
                key={speaker.id}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={getName(speaker)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl text-primary">👤</span>
                      </div>
                    )}
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
