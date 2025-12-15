import { useLanguage } from '@/contexts/LanguageContext';
import communityLogo from '@/assets/community-logo.png';
import syrianEagle from '@/assets/syrian-eagle.webp';
import ryadahLogo from '@/assets/ryadah-academy-logo.png';

const OrganizersSection = () => {
  const { t, language } = useLanguage();
  
  // Organizer data based on language
  const organizers = language === 'ar' ? [
    {
      name: 'الجالية السورية في تركيا',
      description: 'تضم الجالية السورية مختلف الفئات الاجتماعية من أكاديميين وقانونيين وأطباء ومهندسين ورجال أعمال وطلاب ومهنيين في شتى القطاعات.',
      mission: 'تسعى الجالية من خلال مؤسساتها وروابطها المجتمعية إلى دعم أفرادها، وتمثيل مصالحهم والدفاع عن حقوقهم وتمكين الكفاءات السورية للمشاركة في التنمية الاقتصادية والاجتماعية وتعزيز اندماجهم الإيجابي في تركيا مع المحافظة على الهوية الوطنية السورية واحترام القوانين والأنظمة التركية.',
      activities: ['برامج تعليمية وثقافية', 'مبادرات اجتماعية وإنسانية وقانونية تخدم الجالية', 'بناء شراكات فعالة مع المؤسسات التركية الحكومية والمدنية'],
      workAreas: 'مجالات العمل:',
    },
    {
      name: 'أكاديمية الريادة للتنمية المستدامة',
      description: 'مؤسسة تنمية بشرية مستقلة غير حكومية وغير ربحية مسجلة في سلطنة عمان، وتعمل على تطوير الكوادر والمؤسسات بمشاركة المرأة والشباب عبر توفير برامج وفعاليات متنوعة وتوظيف التكنولوجيا الرقمية وتقنيات الميتافيرس لتحقيق تنمية مستدامة في مختلف مجالات الحياة.',
    },
  ] : language === 'en' ? [
    {
      name: 'Syrian Community in Turkey',
      description: 'The Syrian community includes various social groups including academics, lawyers, doctors, engineers, businesspeople, students, and professionals in various sectors.',
      mission: 'The community seeks through its institutions and social networks to support its members, represent their interests and defend their rights, empower Syrian talents to participate in economic and social development, and enhance their positive integration in Turkey while preserving Syrian national identity and respecting Turkish laws and regulations.',
      activities: ['Educational and cultural programs', 'Social, humanitarian and legal initiatives serving the community', 'Building effective partnerships with Turkish governmental and civil institutions'],
      workAreas: 'Work Areas:',
    },
    {
      name: 'Leadership Academy for Sustainable Development',
      description: 'An independent, non-governmental, non-profit human development institution registered in Oman, working on developing cadres and institutions with the participation of women and youth through providing various programs and activities and employing digital technology and metaverse techniques to achieve sustainable development in various areas of life.',
    },
  ] : [
    {
      name: "Türkiye'deki Suriye Topluluğu",
      description: 'Suriye topluluğu, akademisyenler, avukatlar, doktorlar, mühendisler, iş insanları, öğrenciler ve çeşitli sektörlerdeki profesyoneller dahil olmak üzere çeşitli sosyal grupları içerir.',
      mission: 'Topluluk, kurumları ve sosyal ağları aracılığıyla üyelerini desteklemeyi, çıkarlarını temsil etmeyi ve haklarını savunmayı, Suriyeli yetenekleri ekonomik ve sosyal kalkınmaya katılmaya teşvik etmeyi ve Suriye ulusal kimliğini korurken ve Türk yasalarına saygı duyarken Türkiye\'deki olumlu entegrasyonlarını artırmayı amaçlamaktadır.',
      activities: ['Eğitim ve kültür programları', 'Topluluğa hizmet eden sosyal, insani ve hukuki girişimler', 'Türk devlet ve sivil kurumlarıyla etkili ortaklıklar kurma'],
      workAreas: 'Çalışma Alanları:',
    },
    {
      name: 'Sürdürülebilir Kalkınma için Liderlik Akademisi',
      description: 'Umman\'da kayıtlı bağımsız, hükümet dışı, kar amacı gütmeyen bir insan geliştirme kurumu olup, kadınların ve gençlerin katılımıyla kadro ve kurumları geliştirmek, çeşitli programlar ve etkinlikler sunmak ve dijital teknolojiyi kullanarak yaşamın çeşitli alanlarında sürdürülebilir kalkınma sağlamak için çalışmaktadır.',
    },
  ];
  
  return (
    <section id="organizers" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img src={syrianEagle} alt="" className="absolute top-10 right-10 w-40 h-40" />
        <img src={syrianEagle} alt="" className="absolute bottom-10 left-10 w-40 h-40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">🏛️</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('organizers.title')}
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Syrian Community */}
          <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-xl border border-border hover:border-syrian-green/50 transition-colors">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={communityLogo} 
                  alt={organizers[0].name} 
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                />
              </div>
              
              <div className="text-center md:text-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {organizers[0].name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {organizers[0].description}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {organizers[0].mission}
                </p>
                
                {/* Activities */}
                <div className="mt-6">
                  <h4 className="font-bold text-foreground mb-3">{organizers[0].workAreas}</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {organizers[0].activities?.map((activity, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-syrian-green hover:text-primary-foreground transition-colors"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Academy */}
          <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-xl border border-border hover:border-syrian-green/50 transition-colors">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={ryadahLogo} 
                  alt={organizers[1].name} 
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                />
              </div>
              
              <div className="text-center md:text-start">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {organizers[1].name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {organizers[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;