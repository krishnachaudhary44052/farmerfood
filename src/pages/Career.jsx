import React, { useState } from "react";
import Header from "../components/Header";
import Sms from "../components/sms";
import Footer from "../components/Footer";
import './Career.css';

const Career = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const departments = [
        {
            title: "MANUFACTURING",
            openPositions: 2,
            jobs: [
                {
                    title: "Food Safety and Compliance Specialist",
                    type: "Full Time - Chicago, IL",
                },
                {
                    title: "Production Supervisor - Night Shift",
                    type: "Full Time - Chicago, IL",
                },
            ],
        },
        {
            title: "TECHNOLOGY",
            openPositions: 1,
            jobs: [],
        },
        {
            title: "SALES",
            openPositions: 5,
            jobs: [],
        },
        {
            title: "MENU",
            openPositions: 1,
            jobs: [],
        },
        {
            title: "REVENUE",
            openPositions: 1,
            jobs: [],
        },
        {
            title: "OPERATIONS (HOURLY)",
            openPositions: 3,
            jobs: [],
        },
        {
            title: "DISTRIBUTION (HOURLY)",
            openPositions: 11,
            jobs: [],
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="hero-container">
                <img src="/image/10.png" alt="Careers Hero" />
                <div className="hero-overlay">
                    <div className="text-center text-white">
                        <h1 className="fw-bold fst-italic">We're Hiring</h1>
                        <h3 className="fw-bold fst-italic">
                            Join our team and help us build a new kind of food system
                        </h3>
                    </div>
                </div>
            </div>

           <div className="container-fluid py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 job-accordion py-5">
        <div className="mb-4 text-center">
          <h3>
            <strong>
              <em>Why work with us?</em>
            </strong>
          </h3>
          <p>
            At Farmer’s Fridge, we’re on a mission to make healthier (and
            delicious) meals on the go...
          </p>
        </div>

        {departments.map((dept, index) => (
          <div className="accordion-item mb-2" key={index}>
            <div
              className="accordion-header d-flex justify-content-between align-items-center border-bottom py-2"
              onClick={() => toggleAccordion(index)}
              role="button"
            >
              <div>
                <h6 className="mb-0">
                  <strong>
                    <em>{dept.title}</em>
                  </strong>
                </h6>
                <small>
                  {dept.openPositions} Open Position
                  {dept.openPositions > 1 ? "s" : ""}
                </small>
              </div>
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="accordion-body p-3">
                {dept.jobs.length > 0 ? (
                  dept.jobs.map((job, i) => (
                    <div key={i} className="mb-2">
                      <strong>
                        <em className="text-success">{job.title}</em>
                      </strong>
                      <br />
                      <small>{job.type}</small>
                    </div>
                  ))
                ) : (
                  <em>No detailed job listings available.</em>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



            <Sms />
            <Footer />
        </div>
    );
};

export default Career;
