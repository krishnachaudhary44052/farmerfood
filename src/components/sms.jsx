import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/sms.css';
import qrImage from '/image/download.svg'; 
import appStoreBadge from '/image/google.webp';
import playStoreBadge from '/image/apple.webp';

const SmsAndAppDownload = () => {
  return (
    <div className="sms-app-section">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side - Sign Up for Texts */}
          <div className="col-md-6 py-5 px-4 sms-section">
            <h5>Sign Up for Texts</h5>
            <p className="text-muted">
              Join our SMS list to be the first to find out about flash promos, new menu drops, giveaways, and more. P.S. We promise we won’t reach out too often, only for the big stuff.
            </p>

            <form className="row g-2 align-items-center">
              <div className="col-sm-5">
                <input type="tel" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="col-sm-4">
                <select className="form-select">
                  <option value="">State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  {/* Add more states as needed */}
                </select>
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-secondary w-100">JOIN</button>
              </div>
            </form>

            <small className="text-muted d-block mt-2">
              See our <a href="#" className="text-success text-decoration-none">Terms and Conditions</a>
            </small>
          </div>

          {/* Right Side - App Download */}
          <div className="col-md-6 py-5 px-4 text-white app-section">
            <h5>Download our app</h5>
            <p>Download today to easily reserve items at the Fridge and earn rewards on Fridge purchases.</p>

            <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
              <img src={qrImage} alt="QR Code" className="qr-img" />
              <img src={appStoreBadge} alt="App Store" className="store-badge" />
              <img src={playStoreBadge} alt="Google Play" className="store-badge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsAndAppDownload;
