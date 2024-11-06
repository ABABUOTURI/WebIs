import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to create this file for the styling

function ContactForm() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ phone: '', email: '', address: '', regNumber: '' });
  const [searchRegNumber, setSearchRegNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // Handle input change for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((prevContacts) => [...prevContacts, form]);
    setForm({ phone: '', email: '', address: '', regNumber: '' }); // Clear form after submission
  };

  // Handle search
  const handleSearch = () => {
    const result = contacts.find(contact => contact.regNumber === searchRegNumber);
    setSearchResult(result || 'Contact not found');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Search Section */}
        <div className="search-section">
          <label>Search by Registration Number:</label>
          <div className="search-input">
            <input
              type="text"
              placeholder="Enter registration number"
              value={searchRegNumber}
              onChange={(e) => setSearchRegNumber(e.target.value)}
              className="input-field"
            />
            <button type="button" onClick={handleSearch} className="search-btn">Search</button>
          </div>
        </div>

        {/* Contact Form Inputs */}
        <div className="form-group">
          <label>Mobile Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Registration Number:</label>
          <input
            type="text"
            name="regNumber"
            value={form.regNumber}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-btn">Save Contact</button>
      </form>

      {/* Search Result */}
      {searchResult && (
        <div className="search-result">
          <h3>Search Result:</h3>
          {typeof searchResult === 'string' ? (
            <p>{searchResult}</p>
          ) : (
            <div>
              <p><strong>Phone:</strong> {searchResult.phone}</p>
              <p><strong>Email:</strong> {searchResult.email}</p>
              <p><strong>Address:</strong> {searchResult.address}</p>
              <p><strong>Registration Number:</strong> {searchResult.regNumber}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContactForm;

