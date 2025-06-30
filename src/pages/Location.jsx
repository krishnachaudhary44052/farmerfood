
import Header from "../components/Header";
import Sms from "../components/sms";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";

import './Location.css';

const Location = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <LocationMap />
      
      <Sms />
      <Footer />

    </div>
  );
};

export default Location;
