import { eventData } from '@/data/eventData';
import { Target, Eye, Heart, Compass } from 'lucide-react';

const icons = [Target, Eye, Heart, Compass];

const GoalsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">🎯</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            أهداف الحفل
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {eventData.goals.map((goal, index) => {
            const Icon = icons[index];
            const gradients = ['gradient-hero', 'gradient-gold', 'gradient-green', 'bg-syrian-black'];
            
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border text-center"
              >
                <div className={`w-16 h-16 rounded-xl ${gradients[index]} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
