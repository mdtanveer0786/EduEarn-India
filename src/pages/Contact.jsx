import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Have questions or want to collaborate? We'd love to hear from you.</p>
        </div>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              {!submitted ? (
                <>
                  <h2>Send us a Message</h2>
                  <p>Our educational team is here to help you with your doubts and questions.</p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="e.g., Rohan Sharma" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="e.g., rohan@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        required 
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration / Partnership</option>
                        <option value="feedback">Feedback / Suggestion</option>
                        <option value="report">Report a Concern</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        placeholder="How can we help you?" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div className="form-disclaimer">
                      <p><strong>Note:</strong> We do not provide financial advice, trading tips, or guaranteed income claims through our contact form. Any such inquiries will be ignored.</p>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-large btn-block">Send Message</button>
                  </form>
                </>
              ) : (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out, {formData.name.split(' ')[0]}. We've received your message and will get back to you within 48-72 hours.</p>
                  <button className="btn btn-secondary mt-3" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              )}
            </div>

            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div className="info-content">
                  <h3>Email Support</h3>
                  <p>General inquiries: support@eduearnindia.in</p>
                  <p>Educational support: learn@eduearnindia.in</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-clock"></i></div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 10:00 AM - 6:00 PM IST</p>
                  <p>Response time: 48-72 Hours</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-content">
                  <h3>Our Location</h3>
                  <p>Digital Education Hub</p>
                  <p>New Delhi, India - 110001</p>
                </div>
              </div>

              <div className="faq-preview mt-5">
                <h3>Common Questions</h3>
                <div className="faq-item">
                  <h4>Do you offer paid courses?</h4>
                  <p>Currently, all our primary educational resources are free to access for Indian learners.</p>
                </div>
                <div className="faq-item mt-3">
                  <h4>Can I write for EduEarn India?</h4>
                  <p>We are always looking for experts to contribute educational guides. Please select 'Collaboration' in the subject.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
