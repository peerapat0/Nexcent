'use client'
import React from 'react'
import '../app/styles/hero.css'
import Image from "next/image";

export default function Hero() {
return (
<section className="hero">
<div className="container hero-grid">
<div className="hero-left">
<h1>Lessons and insights <span className="muted">from 8 years</span></h1>
<p className="lead">Where to grow your business as a photographer: site or social media?</p>
<div className="hero-actions">
<a className="btn primary" href="#">Register</a>

</div>
</div>
<div className="hero-right">
<div className="card-illustration">
<img src="/images/Illustration.png" alt="Illustration" />
</div>
</div>
</div>
</section>
)
}