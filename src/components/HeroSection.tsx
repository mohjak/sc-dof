import heroImage from '@/assets/hero-celebration.jpg';
import syrianEagle from '@/assets/syrian-eagle.webp';
import syrianFlag from '@/assets/syrian-flag.png';
import { eventData } from '@/data/eventData';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-syrian-green/90 via-background/70 to-syrian-red/90" />
      </div>
      
      {/* Animated Flag Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-syrian-green opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-syrian-red opacity-20" />
      
      {/* Decorative Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-40 animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? 'hsl(var(--syrian-red))' : i % 3 === 1 ? 'hsl(var(--syrian-green))' : 'hsl(var(--gold))',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Syrian Eagle Emblem */}
        <div className="mb-6 animate-fade-up">
          <img 
            src={syrianEagle} 
            alt="العقاب السوري" 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto drop-shadow-2xl animate-float"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-2 animate-fade-up drop-shadow-lg">
          {eventData.title}
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6 animate-fade-up delay-100">
          {eventData.subtitle}
        </h2>
        
        {/* Tagline */}
        <p className="text-lg sm:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-up delay-200 leading-relaxed">
          {eventData.tagline}
        </p>
        
        {/* Syrian Flag */}
        <div className="mb-8 animate-fade-up delay-300">
          <img 
            src={syrianFlag} 
            alt="علم سوريا الحرة" 
            className="w-40 sm:w-56 mx-auto rounded-lg shadow-xl border-2 border-card/50"
          />
        </div>
        
        {/* Date Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-border shadow-xl animate-fade-up delay-400">
          <span className="text-3xl">🗓️</span>
          <div className="text-right">
            <p className="text-xl sm:text-2xl font-bold text-foreground">{eventData.dateFormatted}</p>
            <p className="text-sm text-muted-foreground">{eventData.dayName} | {eventData.time}</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 animate-fade-up delay-500">
          <a 
            href="#why"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-accent-foreground font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300 glow-gold"
          >
            <span>اكتشف المزيد</span>
            <span className="text-xl">↓</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
