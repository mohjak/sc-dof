import { eventData } from '@/data/eventData';

const AgendaSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📋</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            برنامج الحفل
          </h2>
          <p className="text-muted-foreground">
            فقرات متنوعة تحيي ذكرى التحرير
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eventData.agenda.map((item, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {item.time}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
