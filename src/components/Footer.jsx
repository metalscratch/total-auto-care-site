import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const PHONE='0477 533 479',PHONE_HREF='tel:+61477533479',EMAIL='contact@totalautocare.au',EMAIL_HREF='mailto:contact@totalautocare.au',WA_URL='https://wa.me/61477533479?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20car%20detailing%20in%20Perth.';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-band">
        <div className="container footer-cta-inner">
          <div>
            <div className="footer-cta-heading">Ready for a spotless car?</div>
            <div className="footer-cta-sub">We come to you. Perth-wide. Book in under 2 minutes.</div>
          </div>
          <div className="footer-cta-actions">
            <Link to="/booking" className="btn btn-gold btn-lg">Book a Detail →</Link>
            <a href={PHONE_HREF} className="btn btn-outline-white">📞 Call {PHONE}</a>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Total Auto Care Group" className="footer-logo-img" />
              <span className="footer-logo-text">Total Auto Care Group</span>
            </div>
            <p className="footer-tagline">Professional mobile car detailing and vehicle transport services across Perth, Western Australia.</p>
            <div className="footer-contact-list">
              <a href={PHONE_HREF} className="footer-contact-item">📞 {PHONE}</a>
              <a href={EMAIL_HREF} className="footer-contact-item">✉️ {EMAIL}</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-item">💬 Chat on WhatsApp</a>
              <span className="footer-contact-item">📍 Perth, Western Australia</span>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-heading">Services</div>
            <ul className="footer-links">
              <li><Link to="/mobile-detailing">Mobile Car Detailing</Link></li>
              <li><Link to="/vehicle-transport">Vehicle Transport</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
              <li><Link to="/booking?service=detailing">Book a Detail</Link></li>
              <li><Link to="/booking?service=transport">Transport Quote</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-heading">Company</div>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Total Auto Care Group. All rights reserved.</span>
          <span>Perth, Western Australia</span>
        </div>
      </div>
    </footer>
  );
}
