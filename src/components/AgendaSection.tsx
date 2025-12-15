import { eventData } from '@/data/eventData';

const AgendaSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📅</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            برنامج الحفل
          </h2>
          <p className="text-muted-foreground">
            جدول الفعاليات والأنشطة المخططة للاحتفال
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
            
            {/* Timeline Items */}
            <div className="space-y-6">
              {eventData.agenda.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-primary">{item.time}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-grow bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-border group hover:border-primary/30">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-2xl opacity-60">
                        {index === 0 && '🎉'}
                        {index === 1 && '🎤'}
                        {index === 2 && '🎵'}
                        {index === 3 && '🍽️'}
                        {index === 4 && '☕'}
                        {index === 5 && '👋'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
