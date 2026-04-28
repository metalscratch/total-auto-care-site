import React, { useState } from 'react';
import './PageHero.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
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
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch {
      // fail silently, user can call instead
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have a question or want to discuss a custom package? Reach out and we'll get back to you within a few hours.</p>

              <div className="contact-detail">
                <strong>Phone</strong>
                <a href="tel:0400000000">0400 000 000</a>
              </div>
              <div className="contact-detail">
                <strong>Email</strong>
                <a href="mailto:info@totalautocare.com.au">info@totalautocare.com.au</a>
              </div>
              <div className="contact-detail">
                <strong>WhatsApp</strong>
                <a href="https://wa.me/61400000000" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
              </div>
              <div className="contact-detail">
                <strong>Service Area</strong>
                <span>Perth Metro and surrounding suburbs, WA</span>
              </div>
              <div className="contact-detail">
                <strong>Hours</strong>
                <span>Monday to Saturday, 7am to 5pm</span>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h2>Send a Message</h2>
              {sent ? (
                <div className="contact-success">
                  <p>Thanks! We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Your name"
                    />
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
                  <div className="form-field">
                    <label>Phone (optional)</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      placeholder="04xx xxx xxx"
                    />
                  </div>
                  <div className="form-field">
                    <label>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn btn-gold" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
