'use client'
import React from 'react'
import '../app/styles/testimonial.css'

export default function Testimonial() {
  const testimonial = {
    description: `Maecenas dignissim justo eget nulla rutrum molestie.Maecenas lobortis sem dui, vel rutrum risus 
    tincidunt ullamcorper.Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
    enim.Nullam ut molestie arcu, at hendrerit elit.Morbi laoreet elit at ligula molestie 
    nec molestie mi blandit.Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.Suspendisse eget lorem eu turpis vestibulum pretium.Suspendisse 
    potenti.Quisque malesuada enim sapien, 
    vitae placerat ante feugiat eget.Quisque vulputate odio neque, eget efficitur libero condimentum id.Curabitur id nibh id sem dignissim finibus ac sit amet magna.`,
    name: 'Tim Smith',
    role: 'British Dragon Boat Racing Association',
    logos: [
      '/images/Logo (8).png',
      '/images/Logo (1).png',
      '/images/Logo (2).png',
      '/images/Logo (3).png',
      '/images/Logo (4).png',
      '/images/Logo (5).png'
    ]
  }

  return (
    <section className="testimonial">
      <div className="container">
        <div className="test-grid">

          
          <div className="test-image">
            <img src="/images/image 9.png" alt={testimonial.name} />
          </div>

         
          <div className="test-text">

        
            <p className="description">
              {testimonial.description}
            </p>

            
            <h4>{testimonial.name}</h4>

            
            <p className="sub">{testimonial.role}</p>

            
            <div className="logo-row-container">
              <div className="logo-row">
                {testimonial.logos.map((logo, i) => (
                  <div key={i} className="logo-box">
                    <img src={logo} alt={`Client ${i + 1}`} />
                  </div>
                ))}
              </div>

              <a href="#" className="btn meet-btn">
                Meet all customers <span className="arrow">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
