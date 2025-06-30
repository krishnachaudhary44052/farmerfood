import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sms from '../components/sms';
import qrImage from '/image/download.svg'; 
import appStoreBadge from '/image/google.webp';
import playStoreBadge from '/image/apple.webp';

const menuData = {
  Salads: [
    {
      name: 'Steakhouse Chopped Salad',
      saladCal: '340 Cal',
      dressingCal: '250 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Sonoma Salad',
      saladCal: '260 Cal',
      dressingCal: '140 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'High Protein Chicken Cobb Salad',
      saladCal: '490 Cal',
      dressingCal: '150 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Turkey cobb Salad',
      saladCal: '340 Cal',
      dressingCal: '150 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Apple Pecan Salad',
      saladCal: '370 Cal',
      dressingCal: '140 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Greek salad',
      saladCal: '340 Cal',
      dressingCal: '170 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Green Goddess Salad',
      saladCal: '490 Cal',
      dressingCal: '150 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Elote Salad',
      saladCal: '490 Cal',
      dressingCal: '150 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
  ],
  Breakfast: [
    {
      name: 'Berries & Granola Greek Yogurt',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Pineapple Coconut Greek Yogurt',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Fresh Fruit Cup',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Chicken Sausage Breakfast Burrito',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Chocolate chia Pudding',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Blueberry Chia Overnight Oats',
      Bowl: '230 Cal',
      Granola: '80 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
  ],
  Bowls: [
    {
      name: 'High Protein Chicken Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Pesto Pasta Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Burrito Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Thai Noodle Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Baja Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'High Protein Chimichurri Steak Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
  ],
  Protein_Bowls: [
    {
      name: 'High Protein Chicken Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'High Protein Chimichurri Steak Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'High Protein Chicken Bowl',
      Bowl: '230 Cal',
      Sauce: '280 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    
  ],
  Sandwiches: [
    {
      name: 'Smoked Turkey and White Cheddar Sandwich',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Chicken Sausage Beakfast Burrito',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Pesto Chicken Salad Wrap',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Smoked Turkey & Bacon Club Sandwich',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Italian Turkey Wrap',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },

  ],
  Snacks: [
    {
      name: 'Pineapple Coconut Chia Pudding',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Chips & Guac',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Fresh Fruit Cup',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Sweet Street Toffee Crunch Bar',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Dark Chocolate Trail Mix',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Food Should Taste Good Sweet Potato Chips',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'Chocolate Chia Pudding',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'Sweet Street Chewy Marshmallow Bar',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
  ],
  Proteins: [
    {
      name: 'Fire Braised Chicken',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Vital Farms Hard Boiled Eggs',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Large Grilled Chicken ',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'White Cheddar Cheese',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
    {
      name: 'Grilled chicken ',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },
  ],
  Drinks: [{
      name: 'LaCroix Lime',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'Spindrift Blood Orange Tangerine',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'La Colombe Oatmilk Vanilla Latte',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'LaCroix Pamplemousse',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },{
      name: 'La Colombe Triple Draft Latte',
      sandwich: '430 Cal',
      image: '/image/09.png',
      backImage: '/image/05.jpg'
    },],
};

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState('Salads');

  return (
    <>
    <Header />
    <div className="container py-4">
      <h2 className="mb-4">Menu</h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {menuData[activeCategory].map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.image} alt={item.name} className="img-fluid rounded" />
                </div>
                <div className="flip-card-back">
                  <img src={item.backImage || item.image} alt={item.name} className="img-fluid rounded" />
                </div>
              </div>
            </div>
            <div className="card-text-content">
              <h5>{item.name}</h5>
              {activeCategory === 'Salads' && (
                <>
                  <p>Salad: {item.saladCal}</p>
                  <p>Dressing: {item.dressingCal}</p>
                </>
              )}
              {activeCategory === 'Breakfast' && (<><p>Bowl: {item.Bowl}</p><p>Granola: {item.Granola}</p></>)}
              {activeCategory === 'Bowls' && (<><p>Bowl: {item.Bowl}<p>Sauce: {item.Sauce}</p></p></>)}
              {activeCategory === 'Protein_Bowls' && (<><p>Bowl: {item.Bowl}<p>Sauce: {item.Sauce}</p></p></>)}
              {activeCategory === 'Sandwiches' && <p> {item.sandwich}</p>}
              {activeCategory === 'Snacks' && <p>{item.sandwich}</p>}
              {activeCategory === 'Proteins' && <p>{item.sandwich}</p>}
              {activeCategory === 'Drinks' && <p>{item.sandwich}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div
  className="sms-app-section"
  style={{
    backgroundColor: '#004225',
    color: 'white',
    padding: '1rem 0',
  }}
>
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* Left Side - Image */}
      <div
        className="col-md-6"
        style={{
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <img
          src="/image/13.png"
          alt="Background"
          style={{
            width: '100%',
            height: '200px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            maxHeight: '800px',
            objectFit: 'Strectch',
          }}
        />
      </div>

      {/* Right Side - App Section */}
      <div
        className="col-md-6"
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h5 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Download our app
        </h5>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Download today to easily reserve items at the Fridge and earn rewards on Fridge purchases.
        </p>

        <div
          className="d-flex align-items-center gap-3 flex-wrap"
          style={{ gap: '1rem', flexWrap: 'wrap' }}
        >
          <img
            src={qrImage}
            alt="QR Code"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '0.5rem',
            }}
          />
          <img
            src={appStoreBadge}
            alt="App Store"
            style={{ height: '40px' }}
          />
          <img
            src={playStoreBadge}
            alt="Google Play"
            style={{ height: '40px' }}
          />
        </div>
      </div>
    </div>
  </div>
</div>

    <Sms/>
    <Footer />
    </>
  );
};

export default Menu;
