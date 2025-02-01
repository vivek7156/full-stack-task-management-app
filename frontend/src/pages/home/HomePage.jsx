import HeroSection from '../../pages/home/components/HeroSection';
import CarouselSection from '../../pages/home/components/CarouselSection';
import FeatureSection from '../../pages/home/components/FeatureSection';
import CategorySection from '../../pages/home/components/CategorySection';
import AppSection from '../../pages/home/components/AppSection';
import Footer from '../../pages/home/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CarouselSection />
      <FeatureSection />
      <CategorySection />
      <AppSection />
      <Footer />
    </div>
  );
};

export default HomePage;