
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FindFridge from "../components/FindFridge";
import MealCategories from "../components/MealCategory";
import Slider from "../components/slider";
import MealProcess from "../components/MealProcess";
import Testimonials from "../components/Testimonials";
import GreensReward from "../components/GreensReward";
import Sms from "../components/sms";
import Footer from "../components/Footer";
import Herosec from "../components/Hero_sec";
import './Home.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <HeroSection />
      <FindFridge />
      <MealCategories />
      <Slider />
      <MealProcess />
      <Testimonials />
      <GreensReward />
      <Herosec />
      <Sms />
      <Footer />

    </div>
  );
};

export default Index;
