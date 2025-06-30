
import Header from "../components/Header";
import Sms from "../components/sms";
import Footer from "../components/Footer";
import LocationForm from "../components/LocationForm";
import PartnersSection from "../components/PartnerSection";
import RequestFridgeSection from "../components/RequestFridgeSection";
import Dont from "../components/dont";
import Smart from "../components/Smart";
import CustomerTrust from "../components/CustomerTrust";

import './GetFridge.css';

const GetFridge = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <LocationForm />
      <PartnersSection />
      <RequestFridgeSection />
      <Dont />
      <Smart />
      <CustomerTrust />
      {/* Additional sections can be added here if needed */}
     
      <Sms />
      <Footer />

    </div>
  );
};

export default GetFridge;
