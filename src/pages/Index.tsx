import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import GoalsSection from '@/components/GoalsSection';
import DetailsSection from '@/components/DetailsSection';
import AgendaSection from '@/components/AgendaSection';
import OrganizersSection from '@/components/OrganizersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <GoalsSection />
      <DetailsSection />
      <AgendaSection />
      <OrganizersSection />
      <Footer />
    </main>
  );
};

export default Index;
