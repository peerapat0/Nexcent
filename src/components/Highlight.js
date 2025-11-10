'use client'
import React from 'react'
import '../app/styles/highlight.css'
import Image from "next/image";

export default function Highlight() {
return (
<section className="highlight">
<div className="container highlight-grid">

<div className="art">
<img src="/images/rafiki.png" alt="rafiki" />
</div>

<div className="text">
<h3>The unseen of spending three years at Pixelgrade</h3>
<p className="sub">A short story and visual case study about our time building better membership experiences.</p>
<a className="btn green" href="#">Learn More</a>
</div>

</div>
</section>
)
}