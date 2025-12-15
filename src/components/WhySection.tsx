import { eventData } from '@/data/eventData';
import syrianEagle from '@/assets/syrian-eagle.webp';

const WhySection = () => {
  return (
    <section id="why" className="py-16 sm:py-24 bg-muted relative overflow-hidden">
      {/* Decorative Eagle */}
      <div className="absolute top-10 left-10 opacity-5">
        <img src={syrianEagle} alt="" className="w-64 h-64" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-5xl mb-6 animate-pulse-glow">🕊️</span>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            {eventData.whyCelebrate.title}
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
            {eventData.whyCelebrate.description}
          </p>
          
          {/* Syrian Flag Colors Divider */}
          <div className="flex h-2 rounded-full overflow-hidden max-w-md mx-auto shadow-lg">
            <div className="flex-1 bg-syrian-green" />
            <div className="flex-1 bg-card" />
            <div className="flex-1 bg-syrian-red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
