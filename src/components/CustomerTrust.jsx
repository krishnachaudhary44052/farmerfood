import React from 'react';
import '../style/CustomerTrust.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerTrust = () => {
    return (
        <div className="customer-trust-section d-flex align-items-center justify-content-center text-center">
            <div className="content-box text-white">
                <div className='centered-content'>
                    <h2><em>Still On the Fence?</em></h2>
                    <p className="lead">
                        TAKE IT FROM OUR 1,500+ HAPPY CUSTOMERS
                        <span className="stars ms-2">⭐️⭐️⭐️⭐️⭐️</span>
                    </p>
                    <button className="btn btn-success mt-3">
                        VIEW 2K+ LOCATIONS
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CustomerTrust;
