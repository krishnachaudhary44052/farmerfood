import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <div className="row">

          {/* Our Company */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Our Company</h6>
            <ul className="list-unstyled">
              <li><a href="#">Get a Fridge</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Merch Store</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">312.229.0099</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 mb-4">
            <h6 className="footer-heading">Join our Newsletter</h6>
            <p className="text-muted">Join our mailing list to get exclusive promos, new menu updates, and much more!</p>
            <form className="newsletter-form d-flex">
              <input type="email" className="form-control" placeholder="Email Address" />
              <button type="submit" className="btn btn-outline-light ms-2 px-3">
                <span>&#10148;</span>
              </button>
            </form>
            <small className="text-muted d-block mt-2">See our <a href="#" className="text-light text-decoration-underline">Privacy Policy</a></small>

            <h6 className="footer-heading mt-4">Let’s Stay in Touch</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="#"><FaInstagram className="footer-icon" /></a>
              <a href="#"><FaTiktok className="footer-icon" /></a>
              <a href="#"><FaFacebookF className="footer-icon" /></a>
              <a href="#"><FaTimes className="footer-icon" /></a>
            </div>
          </div>

        </div>

        <hr className="bg-secondary" />

        <div className="row mt-3">
          <div className="col-md-8">
            <small className="text-muted">
              Our items are handcrafted in our kitchen that also makes items using peanuts, wheat, milk, tree nuts, shellfish, fish, egg, soy, and sesame. <br />
              2000 calories a day is used from general nutrition advice, but calorie needs vary. Additional nutritional information available upon request.
            </small>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <a href="#" className="text-light me-3 text-decoration-none">Terms & Conditions</a>
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
            <div><small>© 2025, Farmer's Fridge</small></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
