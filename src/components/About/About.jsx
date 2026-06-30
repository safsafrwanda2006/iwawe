import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
import './About.css';

const About = () => {
  const features = [
    "Highly Trained & Professional Staff",
    "100% Satisfaction Guarantee",
    "Eco-Friendly Cleaning Products",
    "Safe & Insured Practices",
    "Flexible Scheduling",
    "Attention to Every Detail"
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container about-container">
        <div className="about-image-wrapper reveal slide-left">
          <BeforeAfterSlider
            beforeSrc="/images/frames/before.png"
            afterSrc="/images/frames/after.png"
            beforeAlt="Space before Iwawe cleaning"
            afterAlt="Space after Iwawe cleaning"
          />
          <div className="experience-badge">
            <span className="years">Premium</span>
            <span className="text">Quality Service</span>
          </div>
        </div>
        
        <div className="about-content reveal slide-right">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Excellence in Every Detail
          </h2>
          <p className="about-description">
            At Iwawe Cleaning Services, we believe that a clean environment is the foundation of a healthy and productive life. Operating in the heart of Kigali, we deliver top-tier, reliable, and professional cleaning solutions tailored to your unique needs.
          </p>
          <p className="about-description">
            Our team of dedicated professionals wears their deep royal blue uniforms with pride, representing our commitment to trust, cleanliness, and unmatched quality. Whether it's your home, office, or commercial space, we ensure it looks spotless.
          </p>
          
          <ul className="about-features">
            {features.map((feature, index) => (
              <li key={index}>
                <CheckCircle2 className="feature-icon" size={24} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <a href="#about-more" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
