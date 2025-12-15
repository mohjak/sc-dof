import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventData } from '@/data/eventData';

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📋</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            تفاصيل الحفل
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {eventData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Date Card */}
          <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
            <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">التاريخ</h3>
            <p className="text-2xl font-bold text-primary mb-1">{eventData.dateFormatted}</p>
            <p className="text-muted-foreground">{eventData.dayName}</p>
          </div>
          
          {/* Time Card */}
          <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
            <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">الوقت</h3>
            <p className="text-2xl font-bold text-accent mb-1">{eventData.time}</p>
            <p className="text-muted-foreground">مساءً بتوقيت برلين</p>
          </div>
          
          {/* Location Card */}
          <div className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
            <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">المكان</h3>
            <p className="text-lg font-bold text-secondary mb-1">{eventData.venue.name}</p>
            <p className="text-muted-foreground">{eventData.venue.address}</p>
            <p className="text-sm text-muted-foreground mt-1">{eventData.venue.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
