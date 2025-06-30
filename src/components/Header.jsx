import { useState } from "react";
import {
    Phone, Mail, Twitter, Facebook, Instagram, Github,
    Search, User, ShoppingCart, Menu,MapPin, X
} from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Header.css"; 

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showMealPlan, setShowMealPlan] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="position-relative  z-3">
            {showSearch && (
                <div className="search-overlay">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control search-input"
                    />
                    <button onClick={() => setShowSearch(false)} className="btn-close ms-3" />
                </div>
            )}

            {/* Main Header */}
            <header className="main_header shadow-sm py-3 px-3 position-relative">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <div className="d-flex align-items-center">
                        <div className="fs-3 fw-bold text-dark">
                            <Link to="/" className="text-decoration-none text-primary1">Farmer Fridge</Link><span className="text-info">.</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="d-none d-md-flex align-items-center gap-4">
                        <Link to="/Menu" className=" text-white text-decoration-none pb-1">Menu</Link>
                        <div
                            className="position-relative"
                            onMouseEnter={() => setShowMealPlan(true)}
                            onMouseLeave={() => setShowMealPlan(false)}
                        >
                            <button className="btn btn-link text-white p-0 d-flex text-decoration-none align-items-center">
                                About us
                                <svg className="ms-1" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {showMealPlan && (
                                <div className="dropdown-menu-custom">
                                    <ul className="list-unstyled mb-0">
                                        <li><Link to="/Story" className="dropdown-item-custom">Our Story</Link></li>
                                        <li><Link to="/app" className="dropdown-item-custom">Our App </Link></li>
                                        <li><Link to="/career" className="dropdown-item-custom">Careers</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link to="/location" className="text-white text-decoration-none">Location</Link>
                        <Link to="/getfridge" className="text-white text-decoration-none">Get Location</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="d-flex d-md-none align-items-center gap-3">
                        <button className="btn p-0" onClick={() => setShowSearch(true)}>
                            <Search className="text-secondary" />
                        </button>
                        <button className="btn p-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="text-dark" /> : <Menu className="text-dark" />}
                        </button>
                    </div>

                    {/* Desktop Icons */}
                    <div className="d-none d-md-flex align-items-center gap-3">
                        <button className="btn p-0" onClick={() => setShowSearch(true)}>
                            <Search className="text-secondary" />
                        </button>
                        <MapPin className="text-secondary" />
                        <div className="d-flex text-white align-items-center gap-2">
                           <h6>Find a Fridge</h6>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="d-md-none mt-3 bg-white border-top border-secondary  position-absolute top-100 start-0 w-100 z-3 p-3 shadow">
                        <Link to="/Menu" className="d-block mb-2 text-decoration-none">Menu</Link>
                        <button
                            onClick={() => setShowMealPlan(!showMealPlan)}
                            className="btn btn-link d-flex justify-content-between text-decoration-none w-100 p-0"
                        >
                        About us
                            <svg className={`${showMealPlan ? "rotate-180" : ""}`} width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {showMealPlan && (
                            <div className="ms-3">
                                <li><Link to="/Story" className="text-decoration-none" >Our Story</Link></li>
                                <li><Link to="/app" className="text-decoration-none" >Our App </Link></li>
                                <li><Link to="/career" className="text-decoration-none" >Careers</Link></li>

                            </div>
                        )}
                        <Link to="/location" className="d-block mt-2 text-decoration-none">Location</Link>
                        <Link to="/getfridge" className="d-block text-decoration-none">Get Fridge</Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
