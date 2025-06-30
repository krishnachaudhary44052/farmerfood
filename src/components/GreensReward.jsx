import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/GreensReward.css';

const GreensReward = () => {
  return (
    <div className="greens-reward-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center">
            <img src="https://images.ctfassets.net/6icpdjijyrth/5lIiZEkekUhYsvQM3BJkxx/fb50e25e4bf48e8361340dcb88a9817b/App_Rewards_01.gif?w=800&h=800&q=50&fm=webp" alt="Rewards App" className="img-fluid reward-image" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold fst-italic">Are you earning your greens?</h2>
            <p className="mt-3">
              Don’t just eat your greens, earn them! For every $2 you spend, you earn 1 Green.
              Rack up 50 Greens, and you'll automatically score a $9 reward for your next purchase.
            </p>
            <button className="btn btn-outline-success mt-3 px-4 py-2">
              DOWNLOAD OUR APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreensReward;
