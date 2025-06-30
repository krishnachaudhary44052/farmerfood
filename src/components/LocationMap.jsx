import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/LocationMap.css';
import { FaSearch, FaLocationArrow, FaFilter } from 'react-icons/fa';

const LocationMap = () => {
  const centers = [
    "Citadel Center",
    "Wells Plaza",
    "Lakeview Hub",
    "Southport Commons",
    "Northside Towers",
    "Downtown Market",
    "Urban Eatery",
    "Garden Square",
    "Lakeside Place",
    "Metro Hall"
  ];

  const [showAccess, setShowAccess] = useState(false);
  const [showLocationType, setShowLocationType] = useState(false);
  const [showRetail, setShowRetail] = useState(false);

  return (
    <div className="container-fluid location-wrapper">
      <div className="container-fluid border-bottom py-2 px-3 bg-white">
        <div className="d-flex flex-wrap align-items-center gap-2">

          {/* Breadcrumb */}
          <span className="text-muted small me-3">Home / Locations</span>

          {/* Search Bar */}
          <div className="input-group" style={{ maxWidth: 300 }}>
            <span className="input-group-text"><FaSearch /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Address or Location"
            />
            <span className="input-group-text bg-white border-start-0">
              <FaLocationArrow className="text-success" />
            </span>
          </div>

          {/* Fridge Access */}
          <div className="position-relative">
            <button className="btn btn-white border dropdown-toggle"
              onClick={() => {
                setShowAccess(!showAccess);
                setShowLocationType(false);
                setShowRetail(false);
              }}
            >
              Fridge Access
            </button>
            {showAccess && (
              <div className="dropdown-menu show p-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="public" />
                  <label className="form-check-label" htmlFor="public">Public Fridge</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="private" />
                  <label className="form-check-label" htmlFor="private">Private Fridge</label>
                </div>
              </div>
            )}
          </div>

          {/* Fridge Location Type */}
          <div className="position-relative">
            <button className="btn btn-white border dropdown-toggle"
              onClick={() => {
                setShowLocationType(!showLocationType);
                setShowAccess(false);
                setShowRetail(false);
              }}
            >
              Fridge Location Type
            </button>
            {showLocationType && (
              <div className="dropdown-menu show p-2">
                {['Airports', 'Hospitals', 'Education', 'Office'].map((type, i) => (
                  <div className="form-check" key={i}>
                    <input className="form-check-input" type="checkbox" id={type} />
                    <label className="form-check-label" htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Retail Partners */}
          <div className="position-relative">
            <button className="btn btn-white border dropdown-toggle"
              onClick={() => {
                setShowRetail(!showRetail);
                setShowAccess(false);
                setShowLocationType(false);
              }}
            >
              Retail Partners
            </button>
            {showRetail && (
              <div className="dropdown-menu show p-2">
                {['Jewel', 'Amazons'].map((partner, i) => (
                  <div className="form-check" key={i}>
                    <input className="form-check-input" type="checkbox" id={partner} />
                    <label className="form-check-label" htmlFor={partner}>{partner}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* More Filters */}
          <button className="btn btn-link text-success">
            <FaFilter className="me-1" />
            MORE FILTERS
          </button>
        </div>
      </div>

      {/* Card + Map */}
      <div className="row">
        <div className="col-lg-5 location-left d-flex flex-column p-0">
          <div className="overflow-auto px-3 py-3" style={{ flex: 1, minHeight: 0 }}>
            <div className="d-flex flex-column gap-3">
              {centers.map((center, index) => (
                <div className="restaurant-card p-3 shadow rounded bg-white" key={index}>
                  <h3 className="location-title">{center}</h3>
                  <p className="location-address">{index + 100} S Main St.</p>
                  <p className="location-status">
                    Open til {7 + (index % 3)}pm <span className="distance">{(Math.random() * 5).toFixed(2)} mi</span>
                  </p>
                  <div className="d-flex gap-3 mb-3">
                    <div className="text-center">
                      <i className="bi bi-phone" />
                      <p>Mobile Ordering</p>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-building" />
                      <p>Public Fridge</p>
                    </div>
                  </div>
                  <button className="btn btn-outline-success w-100">VIEW MENU</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-7 p-0" style={{ height: '100vh' }}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11945.157652331583!2d-87.6297981!3d41.8781136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1719772159187!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
