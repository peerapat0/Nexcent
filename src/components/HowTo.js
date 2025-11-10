'use client'
import React from 'react'
import '../app/styles/howto.css'
import Image from "next/image";

export default function HowTo() {
return (
<section id="howto" className="howto">
<div className="container howto-grid">
<div className="art-small"><img src="/character/pana.png" alt="pana"/></div>
<div className="howto-text">
<h3>How to design your site footer like we did</h3>
<p className="sub">A small guide on footer structure, accessibility and responsive behaviour.</p>
<a className="btn primary" href="#">Learn More</a>
</div>
</div>
</section>
)
}