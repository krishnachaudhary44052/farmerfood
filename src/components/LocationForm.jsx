import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/LocationForm.css';

const LocationForm = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    // Step 1: Address form state
    const [addressData, setAddressData] = useState({
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const [addressErrors, setAddressErrors] = useState({});

    // Step 2: Contact form state
    const [contactData, setContactData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
    });

    const [contactErrors, setContactErrors] = useState({});

    // Handle input change for both forms
    const handleInputChange = (e, setData) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    // Validate address form
    const validateAddressForm = () => {
        const errors = {};
        if (!addressData.address.trim()) errors.address = 'Address is required.';
        if (!addressData.city.trim()) errors.city = 'City is required.';
        if (!addressData.state.trim()) errors.state = 'State is required.';
        if (!addressData.zip.trim()) errors.zip = 'Zip code is required.';
        if (!addressData.country.trim()) errors.country = 'Country is required.';
        return errors;
    };

    // Validate contact form
    const validateContactForm = () => {
        const errors = {};
        if (!contactData.firstName.trim()) errors.firstName = 'First name is required.';
        if (!contactData.lastName.trim()) errors.lastName = 'Last name is required.';
        if (!/^\d{10,15}$/.test(contactData.phone.replace(/\D/g, '')))
            errors.phone = 'Valid phone number is required.';
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactData.email))
            errors.email = 'Valid email is required.';
        if (!contactData.company.trim()) errors.company = 'Company is required.';
        return errors;
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        const errors = validateAddressForm();
        setAddressErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowContactForm(true);
        }
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const errors = validateContactForm();
        setContactErrors(errors);
        if (Object.keys(errors).length === 0) {
            alert('Form submitted successfully!');
            console.log('Address Info:', addressData);
            console.log('Contact Info:', contactData);
        }
    };

    return (
        <div className="container location-form my-5">

            {!showContactForm ? (
                <>
                    <div className="d-flex align-items-center">
                        <div className="fs-3 fw-bold text-dark">
                            <h1 className="text-decoration-none text-black">Farmer Fridge</h1><span className="text-info"></span>
                        </div>
                    </div>
                    <h3 className="mb-4 text-success">Where do you want the Fridge to go?</h3>
                    <p className="text-muted">We’ll need the address of your location.</p>
                    <form onSubmit={handleAddressSubmit}>
                        <div className="row g-3">
                            {['address', 'address2', 'city', 'state', 'zip', 'country'].map((field, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <label className="form-label">
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${addressErrors[field] ? 'is-invalid' : ''}`}
                                        name={field}
                                        value={addressData[field]}
                                        onChange={(e) => handleInputChange(e, setAddressData)}
                                        placeholder={`Enter ${field}`}
                                    />
                                    {addressErrors[field] && (
                                        <div className="invalid-feedback">{addressErrors[field]}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-success">OK</button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <div className="d-flex align-items-center">
                        <div className="fs-3 fw-bold text-dark">
                            <h1 className="text-decoration-none text-black">Farmer Fridge</h1><span className="text-info"></span>
                        </div>
                    </div>
                    <h4 className="text-success mb-3">
                        Great! Next, we'll need your <strong>Contact Information</strong>.
                    </h4>
                    <p className="text-muted fst-italic">
                        Please only fill this out if you are the person who will make the decision to place a fridge in your space.
                    </p>
                    <form onSubmit={handleContactSubmit}>
                        <div className="row g-3">
                            {['firstName', 'lastName', 'phone', 'email', 'company'].map((field, idx) => (
                                <div className={`col-md-${field === 'company' ? '12' : '6'}`} key={idx}>
                                    <label className="form-label">
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                        className={`form-control ${contactErrors[field] ? 'is-invalid' : ''}`}
                                        name={field}
                                        value={contactData[field]}
                                        onChange={(e) => handleInputChange(e, setContactData)}
                                        placeholder={`Enter ${field}`}
                                    />
                                    {contactErrors[field] && (
                                        <div className="invalid-feedback">{contactErrors[field]}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default LocationForm;
