import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MealCategory.css';

const categories = [
  {
    name: 'SALADS',
    image: './image/09.png',
    bg: '#fdb63b'
  },
  {
    name: 'BREAKFAST',
    image: '/image/12.png',
    bg: '#f9c8cb'
  },
  {
    name: 'SANDWICHES',
    image: '/image/11.png',
    bg: '#e7e1de'
  },
  {
    name: 'BOWLS',
    image: '/image/10.png',
    bg: '#fcd47c'
  }
];

const MealCategories = () => {
  return (
    <div className="meal-categories-container container text-center py-5">
      <h2 className="fw-bold fst-italic mb-5">
        Chef-crafted meals, prepared and chopped daily
      </h2>
      <div className="row justify-content-center">
        {categories.map((cat, idx) => (
          <div key={idx} className="col-6 col-md-3 mb-4">
            <div
              className="category-card p-3 rounded"
              style={{ backgroundColor: cat.bg }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid category-img mb-3"
              />
              <div className="fw-bold">{cat.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-success browse-btn mt-4">
        BROWSE MENU
      </button>
    </div>
  );
};

export default MealCategories;
