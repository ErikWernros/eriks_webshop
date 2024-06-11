import React, { useState } from 'react';
import './checkout.css';

export const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="checkout-form">
      <h2>Uppgifter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Adress:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Telefonnummer:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Beställ</button>
      </form>
      {isSubmitted && <p className="thank-you-message">Tack för din beställning!</p>}
    </div>
  );
};
