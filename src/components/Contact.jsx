import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Placeholder API endpoint - replace with actual backend URL when implemented
    const scriptURL = process.env.NEXT_PUBLIC_CONTACTSAVER_SHEET_API;
    
    try {
      // Simulate API call
      console.log('Sending data to backend:', formData);
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Follow Me on Social Media</h3>
                <p className="footer-text mb-0">Shivam</p>
                <p>
                  <a href="mailto:sk0551460@gmail.com?subject=Let meet up&body=Dear Shivam %0D%0A%0D%0AI hope this email finds you well. I would like to invite you to_________ %0D%0A%0D%0AThank you,%0D%0A[Your Name]">
                    shivam.hireme@gmail.com
                  </a>
                </p>
              </div>
              <ul className="social-links">
                <li>
                  <a href="https://github.com/Shivam-Shane" target="_blank" rel="noopener noreferrer">
                    <Icon icon="simple-icons:github" width="50" height="50" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shivam-2641081a0/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="entypo-social:linkedin-with-circle" width="50" height="50" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@sk0551460" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ant-design:medium-circle-filled" width="50" height="50" />
                  </a>
                </li>
                <li>
                  <a href="https://buymeacoffee.com/shivamshane" target="_blank" rel="noopener noreferrer">
                    <Icon icon="simple-icons:buymeacoffee" width="50" height="50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk</h2>
              <h2>Contact me at!</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Champ, what's your name?"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your_email@gmail.com"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone (e.g, +91-999999999.)"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="^\+?[1-9]\d{1,14}$"
                      title="Please enter a valid phone number"
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Company (optional)"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      placeholder="Tell me about your project or question..."
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-control"
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                    >
                      <option value="email">Prefer Email Contact</option>
                      <option value="phone">Prefer Phone Contact</option>
                      <option value="either">Either is fine</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {submitStatus === 'success' && (
                      <p className="success-message">Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="error-message">Error sending message. Please try again.</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Integrated Here */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="copyright-text">
                  Copyright © {new Date().getFullYear()}. All rights reserved
                </h2>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;