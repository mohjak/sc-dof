import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventData } from '@/data/eventData';
import syrianFlag from '@/assets/syrian-flag.png';

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 sm:py-24 gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Flag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <img src={syrianFlag} alt="" className="w-96 blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📍</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            تفاصيل الحفل
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Date Card */}
          <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">التاريخ</h3>
            <p className="text-2xl font-bold text-accent">{eventData.dateFormatted}</p>
            <p className="text-primary-foreground/70 mt-1">{eventData.dayName}</p>
          </div>
          
          {/* Time Card */}
          <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">الوقت</h3>
            <p className="text-2xl font-bold text-accent">{eventData.time}</p>
            <p className="text-primary-foreground/70 mt-1">مساءً</p>
          </div>
          
          {/* Location Card */}
          <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">المكان</h3>
            <p className="text-xl font-bold text-accent">{eventData.venue.name}</p>
            <p className="text-primary-foreground/70 mt-1">{eventData.venue.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
