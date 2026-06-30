import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a cleaning service?",
      answer: "Booking is easy! You can call us directly at +250 784 033 917, send a WhatsApp message, or fill out the contact form below. We'll get back to you immediately to confirm."
    },
    {
      question: "Do you bring your own cleaning equipment and supplies?",
      answer: "Yes, our team arrives fully equipped with professional-grade cleaning tools and eco-friendly products. You don't need to provide anything."
    },
    {
      question: "How much does the cleaning cost?",
      answer: "Pricing depends on the size of the space and the specific type of cleaning required. We provide free, transparent quotes before starting any work."
    },
    {
      question: "Are your cleaners trained and trustworthy?",
      answer: "Absolutely. All our staff undergo rigorous background checks, extensive training, and are fully insured to ensure your peace of mind and safety."
    },
    {
      question: "Do you work on weekends or holidays?",
      answer: "Yes, we operate 24 hours a day, 7 days a week, including weekends and public holidays, to ensure we meet your schedule."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers. Here are some of the most common inquiries about our cleaning services.
          </p>
        </div>

        <div className="faq-container reveal slide-up">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <ChevronDown className="faq-icon" size={24} />
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: activeIndex === index ? '200px' : '0',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
