import { Phone, Mail, ExternalLink } from 'lucide-react';
import { eventData } from '@/data/eventData';

const OrganizerSection = () => {
  return (
    <section className="py-16 sm:py-24 gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-current" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-current" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-current" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">🏛️</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            الجهة المنظمة
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {eventData.organizer.name}
          </h3>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            {eventData.organizer.description}
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href={`tel:${eventData.organizer.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">{eventData.organizer.phone}</span>
            </a>
            
            <a 
              href={`mailto:${eventData.organizer.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{eventData.organizer.email}</span>
            </a>
            
            <a 
              href={`https://${eventData.organizer.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{eventData.organizer.website}</span>
            </a>
          </div>
          
          {/* Syrian Flag Colors Bar */}
          <div className="flex h-2 rounded-full overflow-hidden max-w-md mx-auto shadow-lg">
            <div className="flex-1 bg-syrian-red" />
            <div className="flex-1 bg-primary-foreground" />
            <div className="flex-1 bg-syrian-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
