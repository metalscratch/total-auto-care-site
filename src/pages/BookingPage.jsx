import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import '../styles/BookingPage.css';

const PACKAGES = {
  essential: {
    name: 'Essential Mobile Detail',
    price: 120,
    duration: '2–3 hours',
    features: [
      'Exterior hand wash & dry',
      'Wheel & tyre clean',
      'Window clean (exterior)',
      'Interior vacuum',
      'Dashboard & console wipe',
    ],
  },
  advanced: {
    name: 'Advanced Mobile Detail',
    price: 220,
    duration: '4–5 hours',
    features: [
      'Everything in Essential',
      'Clay bar treatment',
      'Paint decontamination',
      'Interior deep clean',
      'Leather conditioning',
      'Engine bay clean',
    ],
  },
  premium: {
    name: 'Premium Mobile Detail',
    price: 380,
    duration: '6–8 hours',
    features: [
      'Everything in Advanced',
      'Machine polish (1-stage)',
      'Ceramic spray coating',
      'Full paint correction prep',
      'Odour elimination treatment',
      'Complimentary follow-up inspection',
    ],
  },
};

const NAME_TO_SLUG = {
  'essential mobile detail': 'essential',
  'advanced mobile detail': 'advanced',
  'premium mobile detail': 'premium',
};

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const rawParam = (searchParams.get('package') || 'essential').toLowerCase();
  const slug = NAME_TO_SLUG[rawParam] || rawParam;
  const pkg = PACKAGES[slug] || PACKAGES.essential;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    vehicle: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDepositPayment = () => {
    setLoading(true);
    // TODO: Stripe Checkout integration
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ package: slug, amount: 5000 }),
    // });
    // const { url } = await response.json();
    // window.location.href = url;
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const handleCallback = () => {
    window.location.href = 'tel:+61477533479';
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-confirmation">
          <div className="confirmation-icon">✓</div>
          <h2>Booking Request Received</h2>
          <p>
            Your booking request has been received. We will contact you shortly
            to confirm availability.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-inner">
        {/* Package Summary Card */}
        <aside className="booking-package-card">
          <div className="package-card-header">
            <span className="package-label">Selected Package</span>
            <h2 className="package-name">{pkg.name}</h2>
            <div className="package-price">
              ${pkg.price}
              <span className="package-duration"> / {pkg.duration}</span>
            </div>
          </div>

          <ul className="package-features">
            {pkg.features.map((f) => (
              <li key={f}>
                <span className="feature-check">✓</span> {f}
              </li>
            ))}
          </ul>

          <Link to="/#pricing" className="change-package-link">
            ← Change package
          </Link>

          {/* Trust Elements */}
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="trust-icon">📍</span>
              <span>Perth-based &amp; mobile</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">🛡️</span>
              <span>Satisfaction guarantee</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">✨</span>
              <span>Professional-grade products</span>
            </div>
          </div>
        </aside>

        {/* Booking Form */}
        <section className="booking-form-section">
          <h1 className="booking-title">Book Your Detail</h1>
          <p className="booking-subtitle">
            Fill in your details below and we'll confirm your appointment within
            24 hours.
          </p>

          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="04xx xxx xxx"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Service Address *</label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Example St, Perth WA 6000"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time *</label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="7:00 AM">7:00 AM</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicle">Vehicle Type *</label>
              <select
                id="vehicle"
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                required
              >
                <option value="">Select vehicle type</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="SUV / Crossover">SUV / Crossover</option>
                <option value="4WD / Ute">4WD / Ute</option>
                <option value="Van / People Mover">Van / People Mover</option>
                <option value="Coupe / Sports">Coupe / Sports</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Any special requests, pet hair, heavy soiling, etc."
              />
            </div>

            {/* Deposit Section */}
            <div className="deposit-section">
              <div className="deposit-info">
                <h3 className="deposit-title">Secure Your Booking</h3>
                <p className="deposit-desc">
                  Secure your booking with a{' '}
                  <strong>$50 deposit</strong>. The remaining balance of{' '}
                  <strong>${pkg.price - 50}</strong> is paid after the service
                  is completed.
                </p>
              </div>
              <button
                type="button"
                className="btn-deposit"
                onClick={handleDepositPayment}
                disabled={loading}
              >
                {loading ? 'Processing…' : 'Pay $50 Deposit & Book Now'}
              </button>
              <button
                type="button"
                className="btn-callback"
                onClick={handleCallback}
              >
                Request Callback Instead
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
