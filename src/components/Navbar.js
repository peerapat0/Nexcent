'use client';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import '../app/styles/navbar.css';
import Image from "next/image"; 

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useAppContext();

  return (
    <nav className="navbar">
      <div className="container header-inner">
        
       <div className="brand">
          <Image
            src="/images/Logo1.png"
            alt="Nexcent Logo"
            width={100}
            height={50}
          />
          <span className="logo-text">Nexcent</span>
        </div>

       
        <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Feature</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>

            <div className="nav-actions">
              <a className="btn ghost" href="#">Login</a>
              <a className="btn primary" href="#">Sign up</a>
            </div>
          </div>

        
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
