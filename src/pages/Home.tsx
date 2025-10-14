import { lazy, Suspense, type ComponentType } from "react";
import { useInView } from "react-intersection-observer";

import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/Home/Hero";

const Services = lazy(() => import("../components/Home/Services"));
const Clients = lazy(() => import("../components/Home/Clients"));
const Finance = lazy(() => import("../components/Home/Finance"));
const Plan = lazy(() => import("../components/Home/Plan"));

const ProfessionalFallback = () => (
  <div className="flex justify-center items-center min-h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

interface LazySectionProps {
  component: ComponentType;
}

const LazySection = ({ component: Component }: LazySectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<ProfessionalFallback />}>
          <Component />
        </Suspense>
      ) : (
        <ProfessionalFallback />
      )}
    </div>
  );
};

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="bg-[var(--Background4)]">
        <LazySection component={Services} />
        <LazySection component={Clients} />
        <LazySection component={Finance} />
        <LazySection component={Plan} />
      </div>
    </MainLayout>
  );
};

export default Home;
