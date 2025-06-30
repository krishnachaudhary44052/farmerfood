import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/FindFridge.css';

const FindFridge = () => {
  return (
    <>
    <div className=' find-fridge-container container-fluid '>

    
    <div className=" container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h2 className="fridge-heading fw-bold fst-italic">
            Find a Farmer’s Fridge<br />near you!
          </h2>
          <p className="text-muted">
            With over 2,000 locations nationwide – inside airports, offices,
            hospitals, universities, and select retail – tastier, healthier meals
            are always within reach.
          </p>
          <button className="btn btn-outline-success fw-bold mt-3">
            FIND A FRIDGE
          </button>
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="/image/08.jpg" 
            alt="Farmer’s Fridge"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default FindFridge;
