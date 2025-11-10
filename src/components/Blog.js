'use client'
import React from 'react'
import Image from "next/image"
import '../app/styles/blog.css'

export default function Blog() {
  const posts = [
    {
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      
      img: '/images/image 18.png'
    },
    {
      title: 'Revamping the Membership Model with Triathlon Australia',
     
      img: '/images/image 19.png'
    },
    {
      title: 'Optimising Member Communications for Better Retention',
      
      img: '/images/image 20.png'
    },
  ]

  return (
    <section className="blog">
      <div className="container text-center">
        <h3>Caring is the new marketing</h3>
        <p className="sub">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more.
        </p>

        <div className="grid blog-grid">
          {posts.map((post, i) => (
          <article key={i} className="post-card">
                
                <div className="post-img-box">
                    <Image 
                    src={post.img} 
                    alt={post.title} 
                    width={400} 
                    height={180} 
                    className="post-img-inner" 
                    />
                </div>

                
                <div className="post-content-box">
                    <h4>{post.title}</h4>
                    <p className="sub small">{post.desc}</p>
                    <p className="readmore">Readmore →</p>
                </div>
                </article>

          ))}
        </div>
      </div>
    </section>
  )
}
