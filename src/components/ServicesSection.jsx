import React from 'react';
import './ServicesSection.css';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <section className="services section section-gray">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading">Two Services, One Team</h2>
          <p className="section-sub">Whether you need your personal vehicle looking its best, or you run a dealership that needs reliable detailing and transport — we've got you covered.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-card-accent" />
            <div className="service-card-body">
              <div className="service-card-tag">For Individuals</div>
              <div className="service-card-icon">🚗</div>
              <h3 className="service-card-title">Mobile Car Detailing</h3>
              <p className="service-card-desc">We drive to your home, office, or any location across Perth metro.</p>
              <ul className="service-card-points">
                <li>Interior & exterior packages</li>
                <li>Paint correction & enhancement</li>
                <li>Ceramic coating options</li>
                <li>All vehicle types accepted</li>
              </ul>
              <div className="service-card-price">Packages from <strong>$159</strong></div>
              <div className="service-card-actions">
                <Link to="/mobile-detailing" className="btn btn-dark">Learn More</Link>
                <Link to="/booking?service=detailing" className="btn btn-gold">Book a Detail →</Link>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-card-accent" />
            <div className="service-card-body">
              <div className="service-card-tag service-card-tag--b2b">For Dealerships</div>
              <div className="service-card-icon">🚛</div>
              <h3 className="service-card-title">Vehicle Transport & Logistics</h3>
              <p className="service-card-desc">Reliable vehicle transport and pre-delivery detailing for car dealerships across Western Australia.</p>
              <ul className="service-card-points">
                <li>Dealership-to-dealership transport</li>
                <li>Pre-delivery detailing & prep</li>
                <li>Fleet detailing programs</li>
                <li>Auction to dealership transfers</li>
              </ul>
              <div className="service-card-price">Custom quotes for dealerships</div>
              <div className="service-card-actions">
                <Link to="/vehicle-transport" className="btn btn-dark">Learn More</Link>
                <Link to="/booking?service=transport" className="btn btn-gold">Get a Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
