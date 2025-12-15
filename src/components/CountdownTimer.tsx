import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const { language } = useLanguage();
  const eventDate = new Date('2025-01-08T18:00:00');
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = eventDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const labels = {
    ar: { days: 'يوم', hours: 'ساعة', minutes: 'دقيقة', seconds: 'ثانية' },
    en: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    tr: { days: 'Gün', hours: 'Saat', minutes: 'Dakika', seconds: 'Saniye' },
  };
  
  const currentLabels = labels[language] || labels.ar;
  
  const timeUnits = [
    { value: timeLeft.days, label: currentLabels.days },
    { value: timeLeft.hours, label: currentLabels.hours },
    { value: timeLeft.minutes, label: currentLabels.minutes },
    { value: timeLeft.seconds, label: currentLabels.seconds },
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="group relative"
        >
          <div className="absolute inset-0 bg-syrian-green/20 rounded-2xl blur-xl group-hover:bg-syrian-green/30 transition-colors" />
          <div className="relative glass border border-border/50 rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-4xl font-bold text-foreground tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
