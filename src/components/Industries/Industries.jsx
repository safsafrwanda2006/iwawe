import React from 'react';
import { Building, Building2, Store, School, Stethoscope, Utensils, Home, Briefcase } from 'lucide-react';
import './Industries.css';

const Industries = () => {
  const industries = [
    { name: "Homes & Apartments", icon: <Home size={32} /> },
    { name: "Corporate Offices", icon: <Briefcase size={32} /> },
    { name: "Hotels & Hospitality", icon: <Building size={32} /> },
    { name: "Restaurants & Cafes", icon: <Utensils size={32} /> },
    { name: "Retail Stores", icon: <Store size={32} /> },
    { name: "Schools & Universities", icon: <School size={32} /> },
    { name: "Clinics & Healthcare", icon: <Stethoscope size={32} /> },
    { name: "Apartment Buildings", icon: <Building2 size={32} /> }
  ];

  return (
    <section className="industries section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            From residential homes to commercial facilities, we have the expertise and equipment to handle cleaning for various sectors.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              className="industry-card reveal slide-up" 
              key={index}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h4 className="industry-name">{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
