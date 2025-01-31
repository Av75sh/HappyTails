import { useState } from 'react';
import './Appointment.css';
import S5 from '../aa-image/assets-service/service5.png';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    applicationType: '',
    appointmentDate: '',
    appointmentTime: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showDialog, setShowDialog] = useState(false);

  const applicationTypes = [
    'General Consultation',
    'Pet Fitness',
    'Grooming Treatments',
    'Medical Test',
    'Vaccination'
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const citiesByState = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Roing", "Ziro"],
    Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
    Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    Haryana: ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    Manipur: ["Imphal", "Thoubal", "Bishnupur", "Ukhrul", "Churachandpur"],
    Meghalaya: ["Shillong", "Tura", "Jowai", "Nongstoin", "Baghmara"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai", "Saiha", "Serchhip"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
    Punjab: ["Jalandhar", "Ludhiana", "Amritsar", "Phagwara", "Patiala"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    Sikkim: ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Rangpo"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
    "Uttar Pradesh": ["Lucknow", "Prayagraj", "Banaras", "Agra", "Kanpur"],
    Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital"],
    "West Bengal": ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Howrah"],
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.applicationType) {
      newErrors.applicationType = 'Please select an application type';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select a date';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select a time';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }

    if (!formData.city) {
      newErrors.city = 'Please select a city';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowDialog(true);
      setTimeout(() => {
        setShowDialog(false);
        window.location.reload();
      }, 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'state') {
      setFormData(prev => ({
        ...prev,
        city: ''
      }));
    }
  };

  return (
    <div className="appointment-container">
      <div className="image-section">
        <img 
          src= {S5}
          alt="Medical Office"
        />
      </div>
      
      <div className="form-section">
        <h1>Book An Appointment</h1>
        <p className="subtitle">Fill out the form below to schedule your appointment</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Application Type</label>
            <select
              name="applicationType"
              value={formData.applicationType}
              onChange={handleInputChange}
              className={errors.applicationType ? 'error' : ''}
            >
              <option value="">Select Application Type</option>
              {applicationTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.applicationType && <span className="error-message">{errors.applicationType}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                className={errors.appointmentDate ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.appointmentDate && <span className="error-message">{errors.appointmentDate}</span>}
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleInputChange}
                className={errors.appointmentTime ? 'error' : ''}
              />
              {errors.appointmentTime && <span className="error-message">{errors.appointmentTime}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'error' : ''}
                placeholder="10-digit number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={errors.state ? 'error' : ''}
              >
                <option value="">Select State</option>
                {indianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <span className="error-message">{errors.state}</span>}
            </div>

            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={errors.city ? 'error' : ''}
                disabled={!formData.state}
              >
                <option value="">Select City</option>
                {formData.state && citiesByState[formData.state]?.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={errors.address ? 'error' : ''}
              rows="2"
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Please describe the reason for your appointment..."
            />
          </div>

          <div className="captcha-container">
            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
          </div>

          <button type="submit" className="submit-button">
            Book Appointment
          </button>
        </form>

        {showDialog && (
          <div className="dialog">
            <div className="dialog-content">
              <h2>Success!</h2>
              <p>Your appointment has been scheduled successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;