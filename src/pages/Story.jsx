
import Header from "../components/Header";

import Sms from "../components/sms";
import Footer from "../components/Footer";

import './Story.css';

const Story = () => {
    const articles = [
    {
      logo: '/image/20_logo.png',
      headline: 'You Had Me At Chia Pudding',
      link: '#'
    },
    {
      logo: '/image/21_logo.png',
      headline: 'Eating Planet Earth: The Future of Your Food',
      link: '#'
    },
    {
      logo: '/image/22_logo.png',
      headline: '“Farmer’s Fridge” is making healthy food available in vending machines',
      link: '#'
    }
  ];
  return (
    <div className="min-h-screen bg-white">

      <Header />
      {/* hero section */}
      <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/HERO_About_Page.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="text-center text-white">
          <h1 className="fw-bold fst-italic">Hii we are Farmers Fridge.</h1>
        </div>
      </div>
    </div>
    <div className="our-story-section text-center py-5">
      <div className="container">
        <h2><em>We started with a simple question —</em></h2>
        <h5 className="mt-2 mb-4">Why is it so hard to find fresh food on the go?</h5>

        <div className="row g-3 justify-content-center mb-4">
          <div className="col-6 col-md-3">
            <img src="/image/05.jpg" alt="Step 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-6 col-md-3">
            <img src="/image/06.jpg" alt="Step 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-6 col-md-3">
            <img src="/image/07.jpg" alt="Step 3" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-6 col-md-3">
            <img src="/image/04.jpg" alt="Step 4" className="img-fluid rounded shadow-sm" />
          </div>
        </div>

        <p className="description-text">
          We decided to solve that problem by creating a network of smart Fridges, designed to make finding fresh & healthy meals as simple as vending a candy bar.
          Today, we have more than 1,000 Fridges all over the country in <span className="highlight">airports</span>, hospitals, office buildings, universities and more.
        </p>
      </div>
    </div>
      
      <div className="container-fluid highlight-section text-center py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-white text-md-start mb-4 mb-md-0">
        <h1 className="display-5 fw-bold">Take a close look</h1>
        <p className="lead">
          Since 2013, we’ve grown from 1 Fridge to more than 1,000 – and sell to wholesale and retail partners like Target and Amazon Go, too.
        </p>
      </div>
      <div className="col-md-6">
        <img src="/image/08.jpg" alt="Growth" className="img-fluid rounded shadow" />
      </div>
    </div>
  </div>
</div>

<div className="about-section py-5">
      <div className="container">

        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img src="/image/15.png" alt="It All Started" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4><em>It all started</em></h4>
            <p>
              We launched ten years ago with a single vending machine that offered fresh, handmade meals, mostly packaged in jars; it’s since grown into a multi-city operation serving thousands of customers each month.
            </p>
            <p>
              The vision behind Farmer’s Fridge originated from our founder Luke’s experience as a traveling salesman. He struggled to find healthy and delicious food while on the road, and wanted to find a solution to that problem.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <img src="/image/15.png" alt="Our Mission" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4><em>Our mission</em></h4>
            <p>
              Our purpose is to make fruits and vegetables accessible and approachable for everyone.
            </p>
            <p>
              We’re committed to prioritizing food safety, supporting our employees, and making an overall positive impact. Learn more about our 
              <a href="#" className="brand-link"> brand values here.</a>
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src="/image/15.png" alt="All About the Food" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4><em>All about the food</em></h4>
            <p>
              We source the best ingredients and partner with ethical suppliers. Our meals are made from scratch with whole foods, delivering them to Fridges and customers fresh.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="fridge-info-section text-white py-5">
      <div className="container">
        {/* Top Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3><em>So, what’s a Fridge?</em></h3>
            <p>
              We call our refrigerated vending machines Fridges. Fridges are temperature-controlled, stocked with a wide variety of meals and snacks,
              and will not vend food that isn’t fresh.
            </p>
            <p>
              They’re a 24/7 food solution — and we do all the work for you. We have hundreds of Fridges around the country and are actively placing more each week!
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-light">FIND A FRIDGE</button>
              <button className="btn btn-outline-light">GET A FRIDGE <span>&#x2192;</span></button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src="/image/08.jpg" alt="Fridge Machine" className="img-fluid fridge-img" />
          </div>
        </div>

        {/* Bottom Section */}
        <h5 className="text-center mb-4">Want to learn more? This is what makes us unique:</h5>
        <div className="row text-center">
          {[
            { img: "./image/16.png", title: "How to use the Fridge" },
            { img: "/image/17.png", title: "How to use the app" },
            { img: "/image/18.png", title: "How we make the food" },
            { img: "/image/19.png", title: "How the food stays fresh" }
          ].map((item, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <img src={`${item.img}`} alt={item.title} className="img-fluid rounded shadow-sm mb-2" />
              <p>{item.title}</p>
              <button className="btn btn-light btn-sm">LEARN MORE</button>
            </div>
          ))}
        </div>
      </div>
    </div>

     <div className="press-mentions-section text-center py-5">
      <div className="container">
        <div className="row">
          {articles.map((item, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <img src={item.logo} alt={`logo-${index}`} className="img-fluid mb-3 press-logo" />
              <p className="mb-3">{item.headline}</p>
              <a href={item.link} className="btn btn-outline-success btn-sm">READ MORE</a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="customer-trust-section d-flex align-items-center justify-content-center text-center">
            <div className="content-box text-white">
                <div className='centered-content'>
                    <h2><em>Sound like your kind of place?</em></h2>
                    <p className="lead">
                        Join our team and help us build a new kind of food system.
                        
                    </p>
                    <button className="btn btn-success mt-3">
                        View Open Positions
                    </button>
                </div>

            </div>
        </div>

      <Sms />
      <Footer />

    </div>
  );
};

export default Story;
