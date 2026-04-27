import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const PHONE_HREF = 'tel:+61477533479';
const PHONE = '0477 533 479';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-overlay" />
        <div className="hero-accent-line" />
      </div>
      <div className="hero-inner container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Perth, Western Australia
          </div>
          <h1 className="hero-heading">
            Mobile Car Detailing
            <span className="hero-heading-sub">
              <span className="hero-gold">in Perth</span> —<br />We Come to You
            </span>
          </h1>
          <p className="hero-sub">Professional detailing at your home or workplace. No disruption. No driving anywhere. Just a spotless car waiting for you.</p>
          <div className="hero-pills">
            <span className="hero-pill">✓ Home & Workplace</span>
            <span className="hero-pill">✓ All Vehicle Types</span>
            <span className="hero-pill">✓ Satisfaction Guaranteed</span>
          </div>
          <div className="hero-ctas">
            <Link to="/booking" className="btn btn-gold btn-lg hero-cta-primary">Book a Detail →</Link>
            <a href={PHONE_HREF} className="btn btn-outline-white btn-lg hero-cta-secondary">{PHONE}</a>
          </div>
          <p className="hero-b2b-note">
            Running a dealership?{' '}
            <Link to="/vehicle-transport" className="hero-b2b-link">See our dealership & transport services →</Link>
          </p>
        </div>
        <div className="hero-stats">
          {[{value:'500+',label:'Vehicles Detailed'},{value:'5★',label:'Average Rating'},{value:'100%',label:'Mobile Service'},{value:'Perth',label:'Wide Coverage'}].map(({value,label})=>(
            <div key={label} className="hero-stat-card">
              <div className="hero-stat-value">{value}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" /><span>Scroll</span><div className="hero-scroll-line" />
      </div>
    </section>
  );
}
