import React from 'react';
import { Link } from 'react-router-dom';
import './WhyUs.css';

const REASONS = [
  { icon: '🚗', title: 'We Come to You', desc: 'No drop-offs. No waiting rooms. We bring our full professional setup to your home, office, or wherever suits you best.' },
  { icon: '⏱', title: 'Zero Disruption', desc: 'Keep your car, keep your day. Book a time that works and let us handle everything while you focus on what matters.' },
  { icon: '🏆', title: 'Professional-Grade Results', desc: 'We use the same products and techniques as prestige car detailers. The result speaks for itself — every time.' },
  { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: "If you're not happy, we'll make it right. Our reputation is built on delivering results, not just services." },
  { icon: '📍', title: 'Perth-Wide Coverage', desc: "From Joondalup to Fremantle, we service the full Perth metro area. Check with us if you're further out." },
  { icon: '💬', title: 'Direct Communication', desc: 'No call centres. You deal with us directly via phone or WhatsApp. Fast answers, no runaround.' },
];

export default function WhyUs() {
  return (
    <section className="why-us section">
      <div className="container">
        <div className="why-us-layout">
          <div className="why-us-copy">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-heading">Perth's Mobile Detailing Specialists</h2>
            <div className="divider-gold" />
            <p className="section-sub">We're not a car wash you drive to. We're a professional mobile detailing service that brings everything to you.</p>
            <div className="why-us-cta-group">
              <Link to="/booking" className="btn btn-gold btn-lg">Book a Detail →</Link>
              <Link to="/about" className="btn btn-dark">Meet the Team</Link>
            </div>
          </div>
          <div className="why-us-grid">
            {REASONS.map((r) => (
              <div key={r.title} className="why-us-card">
                <div className="why-us-icon">{r.icon}</div>
                <div>
                  <div className="why-us-title">{r.title}</div>
                  <div className="why-us-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
