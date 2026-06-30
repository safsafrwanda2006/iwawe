import React from 'react';
import { Home, Briefcase, Sparkles, Building2, PaintBucket, Sofa, Stethoscope, Construction } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home spotless and comfortable with our thorough and reliable residential cleaning services.",
      icon: <Home size={32} />
    },
    {
      title: "Commercial Cleaning",
      description: "Maintain a professional image and healthy workspace with our tailored commercial cleaning solutions.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Office Cleaning",
      description: "Boost productivity in a pristine environment. We handle daily, weekly, or custom office cleaning schedules.",
      icon: <Building2 size={32} />
    },
    {
      title: "Deep Cleaning",
      description: "Intensive cleaning that reaches every hidden corner, perfect for a seasonal refresh or special occasions.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Move-In / Move-Out",
      description: "Ensure your new or old space is immaculate. We take the stress out of moving with specialized cleaning.",
      icon: <Sofa size={32} />
    },
    {
      title: "Post-Construction",
      description: "We remove dust, debris, and leftover materials so your newly constructed space is ready to use.",
      icon: <Construction size={32} />
    },
    {
      title: "Sanitization Services",
      description: "Advanced disinfection to eliminate germs and viruses, ensuring a safe environment for everyone.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Industrial Cleaning",
      description: "Heavy-duty cleaning for warehouses and factories using specialized equipment and safety protocols.",
      icon: <PaintBucket size={32} />
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            We provide a comprehensive range of professional cleaning solutions designed to meet the highest standards of hygiene and presentation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card reveal" 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Request Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
