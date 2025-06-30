
import Header from "../components/Header";
import Sms from "../components/sms";
import Footer from "../components/Footer";
import './AppPage.css';

const AppPage = () => {
    return (
        <div className="min-h-screen bg-white">

            <Header />

            <div className="hero-container">
                <img src="https://images.ctfassets.net/6icpdjijyrth/3hkrXCAHtLCXvqp1ThKwqk/153ece2de4cd95d235a6e19b40a66694/Hero_Video.gif?w=1920&h=1080&q=75&fm=webp" alt="" />
            </div>

            <div className="rewards-section text-center text-white py-5">
                <div className="container">
                    <h1 className="fw-bold mb-4">Welcome to the Farmer's Fridge Rewards Program</h1>
                    <p className="lead mb-4">
                        We've designed our app to best serve you – think rewards toward free food with every purchase,
                        live menu availability, mobile pay capabilities – and much more.
                    </p>
                    <a href="#" className="btn btn-light download-btn">
                        DOWNLOAD OUR APP <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </a>
                </div>
            </div>

            <div className="container-fluid rewards-info">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 order-md-1 text-center">
                            <h4 className="fw-semibold">Surprise Rewards</h4>
                            <p className="text-muted">
                                We love to surprise our customers! Make sure you opt in to hear from our friendly marketing folks by
                                allowing us to send you push notifications, texts, and emails (we promise we won't spam you).
                            </p>
                        </div>
                        <div className="col-md-6 order-md-2 text-center">
                            <img
                                src="https://res.cloudinary.com/fftech/image/upload/f_gif,h_800,w_800,c_fill,g_auto,q_auto/v1/Brand/Videos/Contentful/UI_VIDEO_1080x1080_02?_a=AXAJcUZ0%20800w"
                                alt="Rewards Screenshot"
                                className="img-fluid rounded shadow reward-img"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center flex-md-row-reverse">
                        <div className="col-md-6 text-center">
                            <h4 className="fw-semibold">Earn Greens with Every Purchase</h4>
                            <p className="text-muted">
                                Greens are the Farmer’s Fridge currency. Earn 1 Green for every $2 you spend. When you earn 50 Greens,
                                you’ll automatically get a $9 reward to use on your next purchase.
                            </p>
                            <a href="#" className="btn btn-outline-success rounded-pill px-4">
                                START EARNING GREENS <i className="bi bi-box-arrow-up-right ms-2"></i>
                            </a>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src="https://images.ctfassets.net/6icpdjijyrth/5lIiZEkekUhYsvQM3BJkxx/fb50e25e4bf48e8361340dcb88a9817b/App_Rewards_01.gif?w=800&h=800&q=50&fm=gif"
                                alt="Greens Reward"
                                className="img-fluid rounded shadow reward-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="reserve-section py-5">
                <div className="container text-center">
                    <h2 className="fw-semibold section-title">
                        <em>Skip the Line by Reserving Your Food</em>
                    </h2>

                    <div className="row align-items-center mt-5">
                        <div className="col-md-6 text-md-end text-center mb-4 mb-md-0">
                            <h4 className="fw-bold">Browse the Menu</h4>
                            <p className="text-muted">
                                Plan which meal you’ll go for in advance, and view all nutritional and allergen information via the app.
                                Browse the available menu at the Fridge you plan on visiting and plan a meal to satisfy your cravings.
                            </p>
                            <a href="#" className="btn btn-outline-success px-4 rounded-pill mt-2">
                                BROWSE APP MENU <i className="bi bi-box-arrow-up-right ms-2"></i>
                            </a>
                        </div>

                        <div className="col-md-6 text-center">
                            <img
                                src="https://images.ctfassets.net/6icpdjijyrth/19xxmbjQvvqFoiHmWniQOG/f694f4dcf69bed266a028ebe39984708/App_Browse_Menu.jpg?w=2000&h=2000&q=50&fm=webp"
                                alt="App Screenshot"
                                className="img-fluid reserve-img"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center mt-5">
                        <div className="col-md-6 text-center">
                            <img
                                src="https://images.ctfassets.net/6icpdjijyrth/6t634ZogApBck1dDEbowvZ/e74088176d6839a8dff211c4af3f64a8/Image_Aspect_Ratios11.png?w=1000&h=667&q=50&fm=webp"
                                alt="Payment Icons"
                                className="img-fluid reserve-img mb-4"
                            />
                        </div>

                        <div className="col-md-6 text-md-start text-center">
                            <h5 className="fw-bold">Checkout Without Your Card</h5>
                            <p className="text-muted mb-4">
                                No wallet, no problem. Use Apple Pay, Google Pay, or even PayPal.
                            </p>
                            <h5 className="fw-bold">Secure the Jars When you Want</h5>
                            <p className="text-muted">
                                Claim your favorite meal before others do. Reserve your item in advance and pick it up any time that day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="easy-ordering-section py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold section-title mb-3"><em>Easy Ordering</em></h2>
                    <p className="mb-4">
                        We offer multiple ways to quickly order your favorite items or try new items from our Fridges
                    </p>
                    <a href="#" className="btn btn-outline-success mb-5 px-4 rounded-pill">
                        ORDER ON THE APP <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </a>

                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="https://images.ctfassets.net/6icpdjijyrth/4nXlHGJmFvV39mPIYKuGAt/7afd1bb53882a94bbd535dbf6da21ef7/App__Quick_Reorder.jpg?w=2000&h=2000&q=50&fm=webp"
                                alt="Quick Reorder"
                                className="img-fluid ordering-img"
                            />
                        </div>
                        <div className="col-md-6 text-md-start text-center">
                            <h4 className="fw-semibold">Fridge Quick Reorder</h4>
                            <p className="text-muted">
                                Quick re-order is a feature that allows customers to quickly and easily re-order products they have
                                previously purchased without having to search and add them to their cart again.
                                It is a useful feature for customers who regularly purchase the same products
                                as it saves time and hassle.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-6 order-md-2 text-center mb-4 mb-md-0">
                            <img
                                src="https://images.ctfassets.net/6icpdjijyrth/4Sl1OOFVEQbUm4En6lt0a5/649f4bf9f24e0126cd95e974e9e864d2/App_Homepage_FFFN_1.png?w=1000&h=1000&q=50&fm=webp"
                                alt="Fan Favorites"
                                className="img-fluid ordering-img"
                            />
                        </div>
                        <div className="col-md-6 text-md-start text-center">
                            <h4 className="fw-semibold">Fan Favorites Nearby</h4>
                            <p className="text-muted">
                                Pro tip: Our Fridge Fan Favorite section is the easiest way to get recommendations
                                on menu items our customers are loving at Fridges near you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid find-fridges-section py-5">
                <div className="text-center mb-4">
                    <h2><strong><em>Find Fridges Near You</em></strong></h2>
                    <p>Location services that will help you locate fresh food near you</p>
                    <a href="#" className="btn btn-success">
                        FIND FRIDGES ON THE APP <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>

                <div className="row text-center align-items-center justify-content-center">
                    <div className="col-md-4 mb-4">
                        <img src="https://images.ctfassets.net/6icpdjijyrth/7wRuZOSZtkjqOfRfxZeaCy/c747f846668c6c621953364e4887d8dc/App_Start_an_Order.jpg?w=2000&h=2000&q=50&fm=webp" alt="App Screenshot 1" className="img-fluid phone-img" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Start a Fridge Order</h5>
                        <p>
                            Not sure where to find us? Easily find Fridges near you based on your ZIP code or current location.
                        </p>
                    </div>
                </div>

                <div className="row text-center align-items-center justify-content-center mt-4">
                    <div className="col-md-4 mb-4 order-md-2">
                        <img src="https://images.ctfassets.net/6icpdjijyrth/68w5muvIw2qlEW1QAs6tUX/03ab83333be6b35004c098bab5858708/App_Map_View_02.gif?w=800&h=800&q=50&fm=gif" alt="App Screenshot 2" className="img-fluid phone-img" />
                    </div>
                    <div className="col-md-4 mb-4 order-md-1">
                        <h5>Search for a Location</h5>
                        <p>
                            Search for a location on an app by entering the desired address or name of the place into the app’s search field.
                            The app will then show the location on a map and provide directions to the user.
                        </p>
                    </div>
                </div>
            </div>

            <Sms />
            <Footer />

        </div>
    );
};

export default AppPage;
