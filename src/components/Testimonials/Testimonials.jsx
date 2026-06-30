import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean Paul N.",
      role: "Homeowner in Nyarutarama",
      text: "Iwawe Cleaning Services completely transformed my apartment. Their attention to detail is unmatched, and the team was incredibly professional and polite. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Office Manager, Kigali Heights",
      text: "We hired Iwawe for daily office cleaning, and the difference is night and day. The workspace is always pristine, which has genuinely boosted our team's morale.",
      rating: 5
    },
    {
      name: "David K.",
      role: "Restaurant Owner",
      text: "Finding reliable cleaners who understand commercial kitchen hygiene is tough. Iwawe exceeded our expectations. They are punctual, thorough, and use safe products.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Read how we've helped homeowners and businesses across Kigali maintain spotless environments.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div 
              className="testimonial-card reveal slide-up" 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{t.name}</h4>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
