import React from 'react';
import { Clock, ShieldCheck, Leaf, ThumbsUp, CalendarClock, Target } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "24/7 Availability",
      description: "We work around your schedule, offering cleaning services day or night to minimize disruption.",
      icon: <Clock size={28} />
    },
    {
      title: "Experienced Team",
      description: "Our staff is rigorously trained, background-checked, and wears our signature uniform with pride.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Eco-Friendly Practices",
      description: "We use environmentally safe products that are tough on dirt but safe for your family and pets.",
      icon: <Leaf size={28} />
    },
    {
      title: "Customer Satisfaction",
      description: "We don't consider the job done until you are 100% satisfied with the pristine results.",
      icon: <ThumbsUp size={28} />
    },
    {
      title: "Reliable Scheduling",
      description: "Punctuality is our promise. We arrive on time, every time, ready to deliver excellence.",
      icon: <CalendarClock size={28} />
    },
    {
      title: "Attention to Detail",
      description: "From ceiling fans to baseboards, we meticulously clean every inch of your space.",
      icon: <Target size={28} />
    }
  ];

  return (
    <section className="why-choose-us section-padding">
      <div className="container">
        <div className="why-header reveal">
          <h2 className="section-title">Why Choose Iwawe</h2>
          <p className="section-subtitle">
            We don't just clean; we care. Experience the difference of a premium cleaning service dedicated to your peace of mind.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-item reveal slide-up" 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon-box">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
