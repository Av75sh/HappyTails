import { useState } from 'react'
import './Front.css'

function Front() {
  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
  }

  return (
    <div className="container">
      <div className="header-text">
        <h1>Unwavering Pet Care</h1>
        <h1>For Your Furry Friend</h1>
        <h1>Everyday, All Day!</h1>
      </div>

      <div className="actions">
        <button className="read-more-btn">Read More</button>
        <a href="#" className="watch-video" onClick={handleWatchVideo}>
          <span className="youtube-icon">▶</span>
          Watch Video
        </a>
      </div>

      <div className="dog-images">
        <div className="pet-image">
          <img 
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600"
            alt="Cool cat with sunglasses"
          />
        </div>
        <div className="pet-image o">
          <img 
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600"
            alt="Dog with pink glasses"
          />
        </div>
        <div className="pet-image">
          <img 
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600"
            alt="Cat with glasses"
          />
        </div>
      </div>
    </div>
  )
}

export default Front