'use client'
import React from 'react'
import '../app/styles/features.css'
import Image from 'next/image'

export default function Features() {
  const items = [
    { 
      title: 'Membership Organisations', 
      desc: 'Full automation of membership renewals and payments.',
      icon: '/images/Icon (3).png' 
    },
    { 
      title: 'National Associations', 
      desc: 'Manage national memberships and events.',
      icon: '/images/Icon (1).png' 
    },
    { 
      title: 'Clubs And Groups', 
      desc: 'Powerful tools for clubs and community groups.',
      icon: '/images/Icon (2).png' 
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container text-center">
        <h2>Manage your entire community in a single system</h2>
        <p className="sub">Who is Nexcent suitable for?</p>

        <div className="grid cols-3">
          {items.map((f,i) => (
            <div key={i} className="card feature-card">
              
              <div className="icon">
                <Image 
                  src={f.icon} 
                  alt={f.title} 
                  width={48} 
                  height={48} 
                  objectFit="contain"
                />
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
