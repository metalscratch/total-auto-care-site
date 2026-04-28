import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Contact Form Enquiry' }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out any time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a question or want to book a service? Contact us via any of the options below and we'll get back to you promptly.</p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-label">Phone</span>
                <a href="tel:+61477533479">0477 533 479</a>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Email</span>
                <a href="mailto:contact@totalautocare.au">contact@totalautocare.au</a>
              </div>
              <div className="contact-detail">
                <span className="contact-label">WhatsApp</span>
                <a href="https://wa.me/61477533479?text=Hi" target="_blank" rel="noreferrer">Message us on WhatsApp</a>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Service Area</span>
                <span>Perth Metro and surrounding suburbs, WA</span>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Hours</span>
                <span>Monday to Saturday, 7am to 5pm</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send a Message</h2>
            {status === 'sent' ? (
              <div className="form-success">
                <p>Thanks! We'll be in touch shortly.</p>
                <Link to="/booking" className="btn btn-gold">Book a Service</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Your name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="04xx xxx xxx" value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>How can we help?</label>
                  <textarea placeholder="How can we help?" rows={5} value={form.message} onChange={e => update('message', e.target.value)} required />
                </div>
                {status === 'error' && <p className="form-error">Something went wrong. Please try again or call us directly.</p>}
                <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
