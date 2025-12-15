import { eventData } from '@/data/eventData';

const MapSection = () => {
  const { lat, lng } = eventData.venue.coordinates;
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  
  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📍</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            موقع الحفل
          </h2>
          <p className="text-muted-foreground">
            {eventData.venue.name} - {eventData.venue.address}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-card">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="موقع الحفل"
            />
            
            {/* Overlay with venue info */}
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-primary-foreground">
                  <h3 className="text-xl font-bold">{eventData.venue.name}</h3>
                  <p className="text-primary-foreground/80">{eventData.venue.details}</p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-accent-foreground font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <span>الاتجاهات</span>
                  <span>🧭</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
