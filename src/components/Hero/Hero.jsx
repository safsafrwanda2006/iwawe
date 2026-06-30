import React from 'react';
import { ArrowRight, PhoneCall, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background Watermark */}
      <div className="hero-watermark">IWAWE</div>
      
      <div className="container hero-container">
        <div className="hero-content reveal">
          <div className="hero-badge">
            <Star size={16} fill="currentColor" />
            <span>Kigali's Premier Cleaning Service</span>
          </div>
          
          <h1 className="hero-title">
            Exceptional Cleaning. Spaces You Can <span>Trust</span>.
          </h1>
          
          <p className="hero-subtitle reveal active" style={{ transitionDelay: '100ms' }}>
            Elevating the standard of hygiene for homes and businesses across Rwanda. We deliver meticulous, reliable, and premium cleaning solutions tailored to your exacting standards.
          </p>
          
          <div className="hero-actions reveal active" style={{ transitionDelay: '200ms' }}>
            <a href="#contact" className="btn btn-primary btn-glow">
              Book Your Service <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="tel:+250784033917" className="btn btn-outline btn-hover-fill">
              <PhoneCall size={20} /> +250 784 033 917
            </a>
          </div>
        </div>

        <div className="hero-visual reveal slide-left active">
          <div className="image-wrapper">
            <div className="image-decoration"></div>
            <img 
              src="/images/image0.webp" 
              alt="Iwawe Professional Cleaning Staff" 
              className="hero-image"
            />
            
            <div className="floating-card trust-card">
              <div className="trust-avatar">
                <Star size={24} fill="#FFB800" color="#FFB800" />
              </div>
              <div className="trust-text">
                <strong>Certified Quality</strong>
                <span>Eco-Friendly Products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats reveal active" style={{ transitionDelay: '300ms' }}>
          <div className="stat-item">
            <strong>24/7</strong>
            <span>Availability</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Satisfaction</span>
          </div>
          <div className="stat-item">
            <strong>Top</strong>
            <span>Rated Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
