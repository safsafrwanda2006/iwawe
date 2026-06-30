import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to experience the best cleaning service in Kigali? Contact us today for a free quote or to schedule your first cleaning.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-panel reveal slide-right">
            <h3 className="contact-panel-title">Contact Information</h3>
            <p className="contact-panel-desc">
              We're available 24/7 to answer your questions and book your cleaning services.
            </p>

            <ul className="contact-details">
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="contact-detail-text">
                  <strong>Call Us</strong>
                  <span>+250 784 033 917</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="contact-detail-text">
                  <strong>Email Us</strong>
                  <span>info@iwawecleaning.rw</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <span>KG 8 Ave, Kigali, Rwanda</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Clock size={24} />
                </div>
                <div className="contact-detail-text">
                  <strong>Business Hours</strong>
                  <span>Open 24 Hours / 7 Days</span>
                </div>
              </li>
            </ul>

            <div className="contact-actions">
              <a href="https://wa.me/250784033917" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="contact-form-panel reveal slide-left">
            <h3 className="contact-panel-title">Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+250 78X XXX XXX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" required>
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="map-container reveal slide-up">
          <iframe 
            title="Iwawe Cleaning Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.999602058444!2d30.0886!3d-1.954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a3b2b8e3a5%3A0x6b2b7b8b8b8b8b8b!2sKG%208%20Ave%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
