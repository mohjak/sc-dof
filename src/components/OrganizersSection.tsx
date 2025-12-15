import { eventData } from '@/data/eventData';
import communityLogo from '@/assets/community-logo.png';
import syrianEagle from '@/assets/syrian-eagle.webp';

const OrganizersSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img src={syrianEagle} alt="" className="absolute top-10 right-10 w-40 h-40" />
        <img src={syrianEagle} alt="" className="absolute bottom-10 left-10 w-40 h-40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">🏛️</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            من نحن
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Syrian Community */}
          <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-xl border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={communityLogo} 
                  alt="الجالية السورية" 
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                />
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {eventData.organizers[0].name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {eventData.organizers[0].description}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {eventData.organizers[0].mission}
                </p>
                
                {/* Activities */}
                <div className="mt-6">
                  <h4 className="font-bold text-foreground mb-3">مجالات العمل:</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {eventData.organizers[0].activities?.map((activity, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
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
          <div className="bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl p-6 sm:p-8 border border-border">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl gradient-gold mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                {eventData.organizers[1].name}
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {eventData.organizers[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
