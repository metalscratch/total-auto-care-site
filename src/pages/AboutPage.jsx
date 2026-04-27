import React from 'react';
import { Link } from 'react-router-dom';
import BookingCTA from '../components/BookingCTA';
import './PageHero.css';

export default function AboutPage() {
  return (
    <>
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1 className="page-hero-title">About Total Auto Care Group</h1>
          <p className="page-hero-sub">
            Perth-based mobile detailing and vehicle transport specialists, built on a simple idea: professional car care should come to you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-heading">Local. Mobile. Professional.</h2>
            <div className="divider-gold" />
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 20 }}>
              Total Auto Care Group was founded with one clear mission: make professional car detailing accessible without the inconvenience of dropping your car off somewhere.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 20 }}>
              We operate entirely mobile — our fully equipped setup comes to you, whether you're at home, at work, or anywhere across the Perth metro area.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 32 }}>
              Beyond individual car owners, we've built strong relationships with car dealerships across Western Australia, providing reliable detailing and vehicle transport services that fit their workflow.
            </p>
            <Link to="/booking" className="btn btn-gold btn-lg">Book a Service →</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'Perth Mobile Detailing', value: '🚗' , desc: 'We travel to your location — no drop-offs required.' },
              { label: 'Satisfaction Guarantee', value: '🚡️', desc: 'If you\'re not happy, we\'ll make it right. Every time.' },
              { label: 'Professional Products', value: '✨', desc: 'We only use professional-grade, vehicle-safe products.' },
              { label: 'Dealership Experience', value: '🌯', desc: 'Trusted by dealerships for detailing & transport across WA.' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: '22px 24px',
                background: 'var(--off-white)',
                borderRadius: 14,
                border: '1px solid var(--border-light)',
              }}>
                <span style={{ fontSize: 30, flexShrink: 0 }}>{item.value}</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
