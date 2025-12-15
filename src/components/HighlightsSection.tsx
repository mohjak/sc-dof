import { Users, Heart, Star } from 'lucide-react';
import { eventData } from '@/data/eventData';

const iconMap = {
  Users: Users,
  Heart: Heart,
  Star: Star,
};

const HighlightsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">✨</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            لماذا تحضر؟
          </h2>
          <p className="text-muted-foreground">
            ما يميز هذا الاحتفال عن غيره
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {eventData.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap];
            const gradients = ['gradient-hero', 'gradient-gold', 'gradient-green'];
            
            return (
              <div 
                key={index}
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 rounded-2xl ${gradients[index]} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
