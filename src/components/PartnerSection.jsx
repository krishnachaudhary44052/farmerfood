import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PartnerSection.css';

const PartnersSection = () => {
  return (
    <div className="partners-section container text-center my-5">
      <h3 className="mb-4 fw-bold">Hundreds of Proven Corporate Partners</h3>

      {/* Logos */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        <img src="/image/costco.png" alt="Costco" className="partner-logo" />
        <img src="/image/hca.png" alt="Hudson" className="partner-logo" />
        <img src="/image/hudson.png" alt="Amazon" className="partner-logo" />
        <img src="/image/costco.png" alt="LAX" className="partner-logo" />
        <img src="/image/Lax.png" alt="HCA" className="partner-logo" />
         </div>

      {/* Images */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <img src="/image/07.jpg" className="img-fluid rounded shadow-sm" alt="Fridge Outside" />
        </div>
        <div className="col-md-4">
          <img src="/image/05.jpg" className="img-fluid rounded shadow-sm" alt="Healthy Bowl" />
        </div>
        <div className="col-md-4">
          <img src="/image/09.png" className="img-fluid rounded shadow-sm" alt="Meeting Fridge" />
        </div>
      </div>

      {/* Stats */}
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <h2 className="stat-number">1,500+</h2>
          <p className="stat-label">FRIDGES</p>
        </div>
        <div className="col-md-4 mb-3">
          <h2 className="stat-number">13M+</h2>
          <p className="stat-label">MEALS SERVED</p>
        </div>
        <div className="col-md-4 mb-3">
          <h2 className="stat-number">3M+</h2>
          <p className="stat-label">HAPPY CUSTOMERS</p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
