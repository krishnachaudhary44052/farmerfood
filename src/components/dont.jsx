import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dont.css';

const testimonials = [
  {
    name: "Carlos Roa",
    title: "Director of Dining Services at University of Houston",
    quote: "Something that got our attention was not only how user-friendly it was for the guest but also for the operator.",
    img: "https://images.ctfassets.net/6icpdjijyrth/1DGYZCFkJwzX33ufCymNcT/5e535058671c0bc34e846612862c6e11/FF_home1-08.png?w=1074&h=1074&q=50&fm=webp", // Replace with real paths
    
  },
  {
    name: "Gena Bilden",
    title: "Director of Campus Operations at Saint Mary’s University of Minnesota",
    quote: "The Fridge provided healthy, quick access for busy staff, faculty and students. No need to drive off campus to find the nearest fast food or overpriced restaurant for takeout!",
    img: "https://images.ctfassets.net/6icpdjijyrth/6CBVxwbciS6cBcABuWbqqs/6844519b0a82e8c573c8863b6224f88c/FF_home1-07.png?w=1074&h=1074&q=50&fm=webp",
    
  },
  {
    name: "Cristina Krukar",
    title: "HR Operations Lead at CARFAX",
    quote: "We have enjoyed all the variety of options at the tip of our fingers! Don’t even hesitate! Just do it.",
    img: "https://images.ctfassets.net/6icpdjijyrth/BJphevwpN7oOiROG5zMNc/7963f53ba3c30d07312c46b109ebae9b/FF_home1-09.png?w=1074&h=1074&q=50&fm=webp",
    
  },
];

const dont = () => {
  return (
    <section className="testimonial-section text-center py-5">
      <div className="container">
        <h2 className="section-title">Don’t Just Take Our Word For It</h2>
        <div className="row justify-content-center mt-5">
          {testimonials.map((t, idx) => (
            <div className="col-md-4 mb-5" key={idx}>
              <div className="testimonial-box">
                <div className="position-relative mb-4">
                  <img src={t.img} alt={t.name} className="img-fluid rounded-circle grayscale-img" />
    
                </div>
              
                <p className="quote-text">"{t.quote}"</p>
               
                <h5 className="testimonial-name">– <em>{t.name}</em></h5>
                <p className="testimonial-title">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-outline-success mt-3 px-4 py-2">READ MORE</button>
      </div>
    </section>
  );
};

export default dont;
