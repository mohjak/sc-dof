import heroImage from '@/assets/hero-celebration.jpg';
import { eventData } from '@/data/eventData';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Star */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-accent/20 backdrop-blur-sm animate-pulse-glow">
          <span className="text-4xl">⭐</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-up">
          {eventData.title}
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent mb-6 animate-fade-up delay-100">
          {eventData.subtitle}
        </h2>
        
        {/* English Title */}
        <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 animate-fade-up delay-200">
          {eventData.englishTitle} - {eventData.englishSubtitle}
        </p>
        
        {/* Date Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-primary-foreground/20 animate-fade-up delay-300">
          <span className="text-2xl">🗓️</span>
          <div className="text-right">
            <p className="text-lg font-bold text-primary-foreground">{eventData.dateFormatted}</p>
            <p className="text-sm text-primary-foreground/80">{eventData.dayName} | {eventData.time}</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 animate-fade-up delay-400">
          <a 
            href="#details"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-accent-foreground font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 glow-gold"
          >
            <span>تفاصيل الحفل</span>
            <span className="text-xl">↓</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
