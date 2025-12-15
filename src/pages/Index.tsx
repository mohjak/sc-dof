import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import GoalsSection from '@/components/GoalsSection';
import DetailsSection from '@/components/DetailsSection';
import AgendaSection from '@/components/AgendaSection';
import SpeakersSection from '@/components/SpeakersSection';
import OrganizersSection from '@/components/OrganizersSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhySection />
      <GoalsSection />
      <DetailsSection />
      <AgendaSection />
      <SpeakersSection />
      <RegistrationSection />
      <OrganizersSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
