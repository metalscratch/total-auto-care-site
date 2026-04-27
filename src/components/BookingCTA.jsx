import React from 'react';
import { Link } from 'react-router-dom';
import './BookingCTA.css';

export default function BookingCTA() {
  return (
    <section className="booking-cta-section section section-black">
      <div className="container booking-cta-inner">
        <div className="booking-cta-badge badge badge-gold">Perth Mobile Detailing</div>
        <h2 className="section-heading booking-cta-heading">
          Ready for a car that looks<br />
          <span style={{ color: 'var(--gold)' }}>brand new?</span>
        </h2>
        <p className="section-sub booking-cta-sub">
          We come to you. Book takes 2 minutes. We confirm within the hour.
          Perth-wide, 6 days a week.
        </p>
        <div className="booking-cta-actions">
          <Link to="/booking" className="btn btn-gold btn-lg">
            Book a Detail →
          </Link>
          <a
            href="https://wa.me/61477533479?text=Hi!%20I%27d%20like%20to%20get%20a%20quote%20for%20car%20detailing."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white btn-lg"
          >
            💬 Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
