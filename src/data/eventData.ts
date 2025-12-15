import { Calendar, Clock, MapPin, Users, Star, Heart, Phone, Mail, ExternalLink } from 'lucide-react';

export const eventData = {
  title: "ذكرى التحرير",
  subtitle: "الجالية السورية",
  englishTitle: "Liberation Day",
  englishSubtitle: "Syrian Community",
  
  date: "2025-01-08",
  dateFormatted: "8 يناير 2025",
  dayName: "الأربعاء",
  time: "18:00 - 22:00",
  
  venue: {
    name: "قاعة الاحتفالات الكبرى",
    address: "برلين، ألمانيا",
    details: "القاعة الرئيسية - الطابق الأول",
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    }
  },
  
  description: `نحتفل معاً بذكرى التحرير، هذه المناسبة التاريخية العظيمة التي تمثل انتصار إرادة الشعب السوري. 
  ندعوكم للانضمام إلينا في هذا الاحتفال المميز الذي يجمع أبناء الجالية السورية في أجواء من الفرح والأمل.`,
  
  agenda: [
    { time: "18:00", title: "الاستقبال والترحيب", description: "استقبال الضيوف وتقديم المشروبات" },
    { time: "18:30", title: "كلمة الافتتاح", description: "كلمة رئيس الجالية السورية" },
    { time: "19:00", title: "عرض فني", description: "فقرات موسيقية وفنية تراثية" },
    { time: "20:00", title: "مائدة العشاء", description: "عشاء سوري تقليدي" },
    { time: "21:00", title: "فقرة حرة", description: "أمسية اجتماعية مع الأصدقاء" },
    { time: "22:00", title: "الختام", description: "كلمة الشكر والوداع" },
  ],
  
  organizer: {
    name: "الجالية السورية في ألمانيا",
    description: "نعمل على تعزيز الروابط بين أبناء الجالية السورية والحفاظ على تراثنا وهويتنا",
    phone: "+49 123 456 789",
    email: "info@syrian-community.de",
    website: "www.syrian-community.de"
  },
  
  highlights: [
    { icon: "Users", title: "لقاء مجتمعي", description: "فرصة للتواصل مع الجالية" },
    { icon: "Heart", title: "أجواء عائلية", description: "مناسب لجميع الأعمار" },
    { icon: "Star", title: "برنامج متنوع", description: "فعاليات فنية وثقافية" },
  ]
};
