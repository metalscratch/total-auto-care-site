import React from 'react';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';
import BookingCTA from '../components/BookingCTA';
import './PageHero.css';

const HOW_IT_WORKS = [
  { step: '01', title: 'Book Online or Call', desc: 'Choose your package, select a date and time, and tell us where you\'ll be. Takes 2 minutes.' },
  { step: '02', title: 'We Arrive at Your Location', desc: 'Our team arrives fully equipped — water, power, and all professional products. You don\'t need to provide anything.' },
  { step: '03', title: 'We Get to Work', desc: 'While you go about your day at home or the office, we detail your vehicle to a professional standard.' },
  { step: '04', title: 'You Inspect & Approve', desc: 'We walk you through the finished result. Only when you\'re 100% satisfied do we consider the job done.' },
];

export default function MobileDetailingPage() {
  return (
    <>
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="eyebrow">Mobile Car Detailing Perth</span>
          <h1 className="page-hero-title">Professional Detailing<br />at Your Door</h1>
          <p className="page-hero-sub">We bring our full setup to your home, workplace, or anywhere in Perth metro. No drop-off, no disruption — just an immaculate car.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/booking?service=detailing" className="btn btn-gold btn-lg">Book a Detail →</Link>
            <a href="tel:+61477533479" className="btn btn-outline-white btn-lg">📞 0477 533 479</a>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <span className="eyebrow">The Process</span>
          <h2 className="section-heading" style={{ marginBottom: 48 }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} style={{ padding: '28px 24px', background: 'var(--off-white)', borderRadius: 16, border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--gold)', letterSpacing: -2, marginBottom: 12 }}>{item.step}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pricing />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Coverage</span>
              <h2 className="section-heading">We Service All of Perth Metro</h2>
              <div className="divider-gold" />
              <p className="section-sub">From the northern suburbs down to Fremantle and across to the hills — if you're in Perth metro, we come to you. Not sure if we cover your area? Just call or message.</p>
              <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Joondalup', 'Stirling', 'Subiaco', 'Fremantle', 'Midland', 'Armadale', 'Rockingham', 'Mandurah'].map(s => (
                  <span key={s} className="badge badge-gold">{s}</span>
                ))}
                <span className="badge badge-gold">+ All Metro Suburbs</span>
              </div>
            </div>
            <div style={{ background: 'var(--off-white)', borderRadius: 20, padding: 36, border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Quick Quote</div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>Not sure which package? Call or message us with your vehicle and we'll recommend the best option.</p>
              <a href="tel:+61477533479" className="btn btn-gold btn-full btn-lg">📞 Call for a Quote</a>
              <a href="https://wa.me/61477533479?text=Hi!%20I%27d%20like%20a%20quote%20for%20car%20detailing." target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-full" style={{ marginTop: 12 }}>💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
