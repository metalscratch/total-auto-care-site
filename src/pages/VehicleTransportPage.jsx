import React, { useState } from 'react';
import './PageHero.css';

export default function VehicleTransportPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    vehicleMake: '',
    vehicleModel: '',
    notes: '',
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Vehicle Transport Enquiry' }),
      });
      if (res.ok) setSent(true);
    } catch {
      // fail silently
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Vehicle Transport Perth</h1>
          <p>Safe, enclosed transport across Perth and surrounds</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="transport-intro">
            <h2>Professional Vehicle Transport</h2>
            <p>
              Need your vehicle moved safely across Perth? Whether you have purchased
              a car interstate, are relocating, or simply need your vehicle delivered
              without adding kilometres, our enclosed transport service is the
              professional solution.
            </p>
          </div>

          <div className="transport-features">
            <div className="feature-card">
              <h3>Enclosed Transport</h3>
              <p>Your vehicle is fully enclosed and protected from the elements during transit.</p>
            </div>
            <div className="feature-card">
              <h3>Fully Insured</h3>
              <p>We carry full transit insurance so your vehicle is protected door to door.</p>
            </div>
            <div className="feature-card">
              <h3>All Vehicle Types</h3>
              <p>We transport sedans, SUVs, 4WDs, sports cars, classics and more.</p>
            </div>
            <div className="feature-card">
              <h3>Perth Metro and Beyond</h3>
              <p>Servicing the entire Perth metro area and regional WA routes.</p>
            </div>
          </div>

          <div className="transport-quote">
            <h2>Get a Transport Quote</h2>
            <p>Fill in the details below and we'll get back to you with a price within a few hours.</p>

            {sent ? (
              <div className="contact-success">
                <p>Thanks! We'll be in touch shortly with a quote.</p>
              </div>
            ) : (
              <form className="transport-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      placeholder="04xx xxx xxx"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="you@email.com"
                  />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Vehicle Make</label>
                    <input
                      type="text"
                      required
                      value={form.vehicleMake}
                      onChange={e => update('vehicleMake', e.target.value)}
                      placeholder="e.g. Toyota"
                    />
                  </div>
                  <div className="form-field">
                    <label>Vehicle Model</label>
                    <input
                      type="text"
                      required
                      value={form.vehicleModel}
                      onChange={e => update('vehicleModel', e.target.value)}
                      placeholder="e.g. Hilux"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Pickup Location</label>
                  <input
                    type="text"
                    required
                    value={form.pickup}
                    onChange={e => update('pickup', e.target.value)}
                    placeholder="Suburb or full address"
                  />
                </div>
                <div className="form-field">
                  <label>Drop-off Location</label>
                  <input
                    type="text"
                    required
                    value={form.dropoff}
                    onChange={e => update('dropoff', e.target.value)}
                    placeholder="Suburb or full address"
                  />
                </div>
                <div className="form-field">
                  <label>Additional Notes (optional)</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={e => update('notes', e.target.value)}
                    placeholder="Preferred dates, special requirements, etc."
                  />
                </div>
                <button type="submit" className="btn btn-gold" disabled={sending}>
                  {sending ? 'Sending...' : 'Request Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
