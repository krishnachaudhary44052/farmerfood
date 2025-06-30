import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MealProcess.css';

const mealSteps = [
  {
    title: 'INGREDIENTS FIRST',
    desc: 'Our dedicated sourcing team searches high and low for the freshest produce.',
    img: 'https://images.ctfassets.net/6icpdjijyrth/3Y16Jy1ydk6SkrgphHUR4d/ff0cb7e0e2910bcb7a85a1a84579bd03/Journey-211.gif?w=720&h=720&q=50&fm=webp'
  },
  {
    title: 'CHEF CRAFTED',
    desc: 'Real people hand-make and pack thousands of chef-designed meals every single day from our Chicago kitchen.',
    img: 'https://images.ctfassets.net/6icpdjijyrth/23bRb1Q1OGYXpa7e8AkUDf/40a22d2f4a05a7bf24bd0f6b0583bd95/Journey-22A.gif?w=720&h=720&q=50&fm=webp'
  },
  {
    title: 'DELIVERED DAILY',
    desc: 'As soon as our meals are packed and ready, our own team of drivers delivers them to our network of Fridges and at select retail stores.',
    img: 'https://images.ctfassets.net/6icpdjijyrth/5OyEySQuDY4JEO6yRE1bor/2a3590bd107cc519c71b5366e046bac9/Journey-23.gif?w=600&h=600&q=50&fm=webp'
  },
  {
    title: 'ANYWHERE, EVERYWHERE',
    desc: 'Wherever you are — airports, offices, hospitals, education, and more — we’re stocked and ready when you need us most.',
    img: 'https://images.ctfassets.net/6icpdjijyrth/4CF5G9juiMsZSLNtVYZaTm/3504a84430d4a3183e068d5930e2a3a3/FF_Smart_01.jpg?w=1074&h=1074&q=50&fm=webp'
  }
];

const MealProcess = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="section-title">How the meals get made</h2>
      <div className="row justify-content-center">
        {mealSteps.map((step, index) => (
          <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
            <div className="meal-step">
              <img
                src={step.img}
                alt={step.title}
                className=" rounded mb-3"
              />
              <h5 className="fw-bold">{step.title}</h5>
              <p className="small">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-success mt-3 px-4 py-2">LEARN MORE</button>
    </div>
  );
};

export default MealProcess;
