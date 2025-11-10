'use client'
import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../app/styles/footer.css'
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h2 className="footer-logo">
        <Image
          src="/images/Icon.png"  
          alt="Nexcent Logo"
          width={40}  
          height={40}
          className="logo-icon"
        />
        <span>Nexcent</span>
      </h2>
          <p>Copyright © 2020 Nexcent ltd.</p>

          <p>All rights reserved</p>
          <div className="social-icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

       
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-subscribe">
          <h4>Stay up to date</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email address" />
            <button>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}