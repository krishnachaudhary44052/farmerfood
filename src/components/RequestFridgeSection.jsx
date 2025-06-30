import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/RequestFridgeSection.css';
import { FaLeaf } from 'react-icons/fa';

const FridgeTabsSection = () => {
  const [activeTab, setActiveTab] = useState('start');

  return (
    <div className="fridge-tabs text-white">
      <div className="container py-5">
        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4 border-bottom-white">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'start' ? 'active' : ''}`} onClick={() => setActiveTab('start')}>HOW TO GET STARTED</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'meal' ? 'active' : ''}`} onClick={() => setActiveTab('meal')}>EXPLORE MEAL PROGRAMS</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'logistics' ? 'active' : ''}`} onClick={() => setActiveTab('logistics')}>LOGISTICS OF GETTING A FRIDGE</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'way' ? 'active' : ''}`} onClick={() => setActiveTab('way')}>THE FARMER'S FRIDGE WAY</button>
          </li>
        </ul>

        {/* Tab Contents */}
        <div className="row align-items-start">
          <div className="col-md-7">
            {activeTab === 'start' && (
              <>
                <p>Make sure you have considered all of the following things to make the Fridge request process as seamless as possible:</p>
                <ul className="list-unstyled mt-3">
                  <li><FaLeaf className="icon" /> Do I have a highly trafficked, visible area where my Fridge will always be seen?</li>
                  <li><FaLeaf className="icon" /> Is there an accessible, flat surface in my desired location with:</li>
                  <ul>
                    <li><FaLeaf className="icon" /> 14 square feet of space</li>
                    <li><FaLeaf className="icon" /> Access to a standard 110v outlet</li>
                    <li><FaLeaf className="icon" /> A 5G wireless connection</li>
                  </ul>
                  <li><FaLeaf className="icon" /> Do I have a budget to support a Fridge in my location?</li>
                </ul>
              </>
            )}

            {activeTab === 'meal' && (
              <>
                <p>What type of meal benefit do you plan to offer?</p>
                <ul className="list-unstyled mt-3">
                  <li><FaLeaf className="icon" /> <strong>A Guaranteed Fridge</strong><br />
                    A Fridge where all meals are purchased directly by the end customer at full price
                  </li>
                  <li><FaLeaf className="icon" /> <strong>A Fully or Partially-Subsidized Fridge</strong><br />
                    A Fridge that is completely or partially paid for by your company or organization with minimal or zero cost to the end customer
                    <em> (usually for private offices)</em>
                  </li>
                  <li><FaLeaf className="icon" /> <strong>A Meal Per Diem Program</strong><br />
                    A Fridge that is connected to our Farmer’s Fridge app and allows you to give daily food credits in the form of discount codes for users to enjoy
                    <em> (usually for places that have an employee meal offering included in their compensation package)</em>
                  </li>
                </ul>
              </>
            )}

            {activeTab === 'logistics' && (
              <>
                <p>Here’s what we need from you to install a Smart Fridge:</p>
                <ul className="list-unstyled mt-3">
                  <li><FaLeaf className="icon" /> <strong>Fill out our Fridge Request Form Below</strong><br />
                   Believe it or not, there's a lot that goes into finding a perfect Fridge match. We want every Fridge to be as successful as possible and serve you at the highest level. Our team will get in touch after reviewing your Fridge Request.
                  </li>
                  <li><FaLeaf className="icon" /> <strong>Host the Farmer’s Fridge team for a site survey</strong><br />
                  This is where our representatives come out and help investigate your space to find the perfect location for your Fridge. 
                  </li>
                  <li><FaLeaf className="icon" /> <strong>Decide what type of meal benefit you want to offer</strong><br />
                    We can help provide a fully or partially subsidized food offering or daily meal per diem credit packages. If you aren’t looking to fund the Fridge, we can help calculate daily purchase requirements to install a Fridge in your space.
                  </li>
                   <li><FaLeaf className="icon" /> <strong>Work with our Customer Success team to install and promote your Fridge</strong><br />
                    Once you’ve signed your agreement, our team of success partners will help you schedule installation, food stocking schedule, and share resources and marketing assets on how to announce and excite users about Farmer’s Fridge coming to your space. 
                  </li>
                   <li><FaLeaf className="icon" /> <strong>Keep in touch</strong><br />
                   We do the heavy lifting to get the Fridge setup, but we love to hear from our partners! Got a success story? Need promotional materials? We're here for you.
                  </li>
                </ul>
              </>
            )}

            {activeTab === 'way' && (
              <>
                <p>What type of meal benefit do you plan to offer?</p>
                <ul className="list-unstyled mt-3">
                  <li><FaLeaf className="icon" /> <strong>We won’t compromise on food safety</strong><br />                  </li>
                  <li><FaLeaf className="icon" /> <strong>We will continue to champion sustainable practices like jar recycling, composting, unsold food donations, and more, wherever possible</strong><br />                  </li>
                  <li><FaLeaf className="icon" /> <strong>We will protect your user’s privacy with safe data practices</strong><br />                  </li>
                  
                </ul>
              </>
            )}
          </div>

          <div className="col-md-5 text-center">
            {activeTab === 'start' && (
              <img src="/image/07.jpg" className="img-fluid shadow rounded" alt="Checklist" />
            )}
            {activeTab === 'meal' && (
              <img src="/image/07.jpg" className="img-fluid shadow rounded" alt="Meal Jar" />
            )}
            {activeTab === 'way' && (
              <img src="/image/07.jpg" className="img-fluid shadow rounded" alt="Meal Jar" />
            )}
            {activeTab === 'logistics' && (
              <img src="/image/07.jpg" className="img-fluid shadow rounded" alt="Meal Jar" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FridgeTabsSection;
