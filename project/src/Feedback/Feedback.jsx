import React from 'react';
import './feedback.css';

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Petro',
      location: 'Jakarta, Indonesia',
      image: 'https://i.pravatar.cc/150?img=1',
      text: '"I can\'t thank Petopia enough for the wonderful care they provided to my dog, Max. The moment we walked in, it was clear that this place is special. The staff treated Max like family, and the updates they sent during his stay kept my heart at ease. He came back happy and well-cared-for."'
    },
    {
      id: 2,
      name: 'Jason M',
      location: 'Bandung, Indonesia',
      image: 'https://i.pravatar.cc/150?img=2',
      text: '"Leaving my cat, Luna, behind used to fill me with worry. But after experiencing Petopia\'s services, my concerns have vanished. Luna was pampered, and I was kept in the loop about her activities."'
    },
    {
      id: 3,
      name: 'Sarah',
      location: 'Solo, Indonesia',
      image: 'https://i.pravatar.cc/150?img=3',
      text: '"As a frequent traveler, finding a pet hotel I could trust was a challenge. But Petopia exceeded all my expectations. My dog, Rocky, has stayed multiple times, and each time, he returns content and healthy. The staff\'s dedication, the clean facilities, and Rocky\'s excitement to visit again speak volumes about Petopia\'s excellence."'
    }
  ];

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <div className="testimonial-tag">OUR TESTIMONIAL</div>
        <h1 className="feedback-title">
          Pawsitive Feedback from<br />
          Our <span className="highlight">Petopia Families</span>
        </h1>
        <p className="feedback-subtitle">
          Read the heartfelt experiences shared by our satisfied pet parents.
        </p>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="profile-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.location}</p>
            </div>
            <div className="leaf-decoration"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;