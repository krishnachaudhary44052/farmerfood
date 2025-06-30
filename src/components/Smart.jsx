import React from 'react';
import '../style/smart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Smart = () => {
  return (
    <div className="smart-fridges">
      <div className="text-center py-4">
        <h2 className="section-title">
          <em>What Makes Our Fridges So Smart?</em>
        </h2>
      </div>

      <div className="container-fluid py-4 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src="/image/08.jpg" alt="Fridge Safety" className="img-fluid fridge-image" />
          </div>
          <div className="col-md-3">
            <h5 className="feature-title">FOOD SAFETY IS #1 IN OUR BOOK</h5>
            <p className="feature-text">
              The built-in thermometer scans the Fridge temperature every 5 minutes and if it loses its chill – even for a few minutes – it will automatically alert a technician to come check it out, and locks it, so it will not vend.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-custom py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h5 className="feature-title">PROPRIETARY STOCKING ALGORITHM</h5>
              <p className="feature-text">
                Stocked just right through an algorithm that minimizes food waste and learns your employee’s preferences, allowing our drivers to deliver more of what you want.
              </p>
            </div>
            <div className='col-md-2'></div>
            <div className="col-md-6 text-center">
              <img src="/image/08.jpg" alt="Stocking Algorithm" className="img-fluid fridge-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src="/image/08.jpg" alt="Fridge Safety" className="img-fluid fridge-image" />
          </div>
          <div className="col-md-3">
            <h5 className="feature-title">CHECKOUT AT THE FRIDGE</h5>
            <p className="feature-text">
             Safe and secure checkouts with a credit card directly at the Fridge — no cashier required.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-custom py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h5 className="feature-title">MINIMIZE WASTE RIGHT AT THE FRIDGE</h5>
              <p className="feature-text">
               Jar recycling slots are built right into the front of the machine. </p>
            </div>
            <div className='col-md-2'></div>
            <div className="col-md-6 text-center">
              <img src="/image/08.jpg" alt="Stocking Algorithm" className="img-fluid fridge-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
