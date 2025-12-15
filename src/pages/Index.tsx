import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import GoalsSection from '@/components/GoalsSection';
import DetailsSection from '@/components/DetailsSection';
import AgendaSection from '@/components/AgendaSection';
import OrganizersSection from '@/components/OrganizersSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LanguageSwitcher />
      <HeroSection />
      <WhySection />
      <GoalsSection />
      <DetailsSection />
      <AgendaSection />
      <RegistrationSection />
      <OrganizersSection />
      <Footer />
    </main>
  );
};

export default Index;
