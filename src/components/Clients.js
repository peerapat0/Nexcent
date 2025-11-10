'use client'
import React from 'react'
import '../app/styles/clients.css'
import Image from 'next/image'

export default function Clients() {
  
  const logos = [
    '/images/Logo (7).png',
    '/images/Logo (1).png',
    '/images/Logo (2).png',
    '/images/Logo (3).png',
    '/images/Logo (4).png',
    '/images/Logo (5).png',
    '/images/Logo (6).png',
  ]

  return (
    <section className="clients">
      <div className="container text-center">
        <h3>Our Clients</h3>
        <p className="sub">We have been working with some Fortune 500+ clients</p>

       <div className="logos-row">
            {logos.map((logo, index) => (
                <div key={index} className="logos-box">
                <Image 
                    src={logo} 
                    alt={`Client ${index + 1}`} 
                    fill
                />
                </div>
            ))}
            </div>


      </div>
    </section>
  )
}
