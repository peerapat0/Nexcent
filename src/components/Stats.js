'use client'
import React from 'react'
import '../app/styles/stats.css'
import Image from "next/image"

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        
        
        <div className="stats-text">
          <h2 className='black'>Helping a local </h2>
          <h2 className='green'>business reinvent itself</h2>
          <p>We reached here with our hard work and dedication.</p>
        </div>

      
        <div className="stats-info">
          {/* แถวที่ 1 */}
          <div className="stats-row">
            <div className="stats-item">
              <Image src="/icon/Icon.png" alt="Members" width={50} height={50} />
              <div>
                <h4>2,245,341</h4>
                <p>Members</p>
              </div>
            </div>
            <div className="stats-item">
              <Image src="/icon/Icon2.png" alt="Clubs" width={50} height={50} />
              <div>
                <h4>46,328</h4>
                <p>Clubs</p>
              </div>
            </div>
          </div>

          
          <div className="stats-row">
            <div className="stats-item">
              <Image src="/icon/Icon3.png" alt="Event bookings" width={50} height={50} />
              <div>
                <h4>828,867</h4>
                <p>Event bookings</p>
              </div>
            </div>
            <div className="stats-item">
              <Image src="/icon/Icon4.png" alt="Payments" width={50} height={50} />
              <div>
                <h4>1,926,436</h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
