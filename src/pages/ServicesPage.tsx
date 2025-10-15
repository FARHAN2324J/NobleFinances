import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/Services/Hero";
import HowItWorks from "../components/Services/HowItsWorks";
import Past from "../components/Services/Past";

const ServicesPage = () => {
  return (
    <MainLayout>
      <div className="bg-[var(--Background4)]"></div>
      <Hero />
      <HowItWorks />
      <Past />
    </MainLayout>
  );
};

export default ServicesPage;
