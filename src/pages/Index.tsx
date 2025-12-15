import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import AgendaSection from '@/components/AgendaSection';
import HighlightsSection from '@/components/HighlightsSection';
import MapSection from '@/components/MapSection';
import OrganizerSection from '@/components/OrganizerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <DetailsSection />
      <AgendaSection />
      <HighlightsSection />
      <MapSection />
      <OrganizerSection />
      <Footer />
    </main>
  );
};

export default Index;
