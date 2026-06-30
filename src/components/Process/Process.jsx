import React from 'react';
import { ClipboardList, CalendarDays, Sparkles, SearchCheck, ThumbsUp } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Inspection & Quote",
      description: "We assess your space and provide a transparent, customized cleaning plan and quote.",
      icon: <ClipboardList size={32} />
    },
    {
      id: 2,
      title: "Scheduling",
      description: "Choose a time that works best for you. We offer 24/7 flexible booking options.",
      icon: <CalendarDays size={32} />
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description: "Our professionals arrive equipped and execute the cleaning plan with meticulous care.",
      icon: <Sparkles size={32} />
    },
    {
      id: 4,
      title: "Quality Check",
      description: "A supervisor conducts a thorough inspection to ensure our high standards are met.",
      icon: <SearchCheck size={32} />
    },
    {
      id: 5,
      title: "Your Approval",
      description: "We walk you through the space to guarantee your 100% satisfaction.",
      icon: <ThumbsUp size={32} />
    }
  ];

  return (
    <section className="process section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Our Cleaning Process</h2>
          <p className="section-subtitle">
            A seamless, hassle-free experience from start to finish. We've perfected our workflow to guarantee exceptional results every time.
          </p>
        </div>

        <div className="timeline-container">
          {steps.map((step, index) => (
            <div 
              className={`timeline-item reveal ${index % 2 === 0 ? 'slide-right' : 'slide-left'}`} 
              key={step.id}
            >
              <div className="timeline-content">
                <div className="timeline-icon-mobile">
                  {step.icon}
                </div>
                <h3 className="timeline-title">
                  <span className="step-number">0{step.id}.</span> {step.title}
                </h3>
                <p className="timeline-description">{step.description}</p>
              </div>
              <div className="timeline-center">
                <div className="timeline-icon">
                  {step.icon}
                </div>
                {index !== steps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-empty"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
