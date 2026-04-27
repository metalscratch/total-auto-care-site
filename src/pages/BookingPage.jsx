import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingFlow from '../components/BookingFlow';
import './PageHero.css';

export default function BookingPage() {
  const [params] = useSearchParams();
  const service  = params.get('service') || '';

  return (
    <>
      {/* Page hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="eyebrow">Get Started</span>
          <h1 className="page-hero-title">Book a Service</h1>
          <p className="page-hero-sub">
            Fill in your details below and we'll confirm your booking within a couple of hours. Fast, no fuss.
          </p>
        </div>
      </div>

      {/* Booking form */}
      <section className="section section-gray" style={{ paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: 'var(--section-pad)' }}>
          <BookingFlow initialService={service} />

          {/* Alternative contact */}
          <div className="booking-alt-contact">
            <p>Prefer to talk? Call us directly on{' '}
              <a href="tel:+61477533479" style={{ color: 'var(--gold)', fontWeight: 700 }}>0477 533 479</a>
              {' '}or{' '}
              <a
                href="https://wa.me/61477533479?text=Hi!%20I'd%20like%20to%20book%20a%20car%20detail."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold)', fontWeight: 700 }}
              >
                message us on WhatsApp
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
