import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Testimonials.css';

const testimonials = [
  {
    name: 'TERESA',
    text: `"A salad from a vending machine? GET IT. I was really impressed with the ingredients. Everything tasted fresh and amazing."`,
  },
  {
    name: 'JOSH',
    text: `"Just tried the Pesto Chicken wrap. Damn good food!"`,
  },
  {
    name: 'LAILA',
    text: `"I am eternally grateful and consistently blown away by the quality of your products!"`,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section py-5 text-white text-center">
      <h2 className="fw-bold fst-italic mb-5">More than 25 million meals later, the verdict is clear</h2>
      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className={`testimonial-box testimonial-${index}`}>
                <div className="stars mb-2">⭐⭐⭐⭐⭐</div>
                <h5 className="fw-bold">{t.name}</h5>
                <p className="mb-0">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
