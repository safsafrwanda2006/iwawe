import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // We have image0 to image7 available based on research
  const images = [
    "/images/image0.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
    "/images/image7.webp"
  ];

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Our Work in Action</h2>
          <p className="section-subtitle">
            See the Iwawe difference. Browse our gallery to witness the exceptional quality and pristine results our team delivers.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              className="gallery-item reveal" 
              key={index}
              onClick={() => setSelectedImg(img)}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <img src={img} alt={`Iwawe Cleaning ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <ZoomIn size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
            <X size={32} />
          </button>
          <img src={selectedImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
