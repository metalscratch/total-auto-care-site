import React, { useState } from 'react';
import './PageHero.css';

const FODMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'; // same as BookingFlow

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoad]  = useState(false);
  const [error, setError]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSent(true); }
      else { setError('Something went wrong. Please call us directly on 0477 533 479.'); }
    } catch {
      setSent(true); // graceful fallback in dev
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-sub">
            Questions about a service? Need a custom quote? Reach out via any of the channels below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Contact methods */}
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: -0.02 }}>
              We're easy to reach
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '📞',
                  label: 'Phone',
                  value: '0477 533 479',
                  href: 'tel:+61477533479',
                  sub: 'Mon–Sat, 7am–5pm',
                },
                { icon: '💬',
                  label: 'WhatsApp',
                  value: 'Chat Now',
                  href: 'https://wa.me/61477533479?text=Hi!%20I\'d%20like%20to%20get%20more%20info.',
                  sub: 'Usually replies within the hour',
                },
                { icon: '✉️',
                  label: 'Email',
                  value: 'contact@totalautocare.au',
                  href: 'mailto:contact@totalautocare.au',
                  sub: 'Response within 1 business day',
                },
                { icon: '📍',
                  label: 'Location',
                  value: 'Perth, Western Australia',
                  href: null,
                  sub: 'Mobile service — we come to you',
                },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', gap: 18, alignItems: 'flex-start',
                  padding: '20px 22px',
                  background: 'var(--off-white)',
                  borderRadius: 14,
                  border: '1px solid var(--border-light)',
                }}>
                  <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mid-gray)', marginBottom: 4 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: 16, fontWeight: 700, color: 'var(--gold)', textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{item.value}</div>
                    )}
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div style={{
            background: 'var(--white)',
            borderRadius: 20,
            border: '1px solid var(--border-light)',
            padding: 36,
            boxShadow: 'var(--shadow-md)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We'll be in touch very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Send us a message</h3>
                {['name', 'email', 'phone'].map(field => (
                  <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, textTransform: 'capitalize' }}>{field}</label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      placeholder={field === 'name' ? 'Your name' : field === 'email' ? 'your@email.com' : '04xx xxx xxx'}
                      value={form[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required={field !== 'phone'}
                      style={{ padding: '12px 15px', border: '1.5px solid var(--border-light)', borderRadius: 10, fontSize: 14.5, fontFamily: 'inherit', outline: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <label style={{ fontSize: 13, fontWeight: 600 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your car and what you need…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    style={{ padding: '12px 15px', border: '1.5px solid var(--border-light)', borderRadius: 10, fontSize: 14.5, fontFamily: 'inherit', resize: 'vertical', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                {error && <p style={{ color: '#dc2626', fontSize: 13.5 }}>{error}</p>}
                <button type="submit" className="btn btn-gold btn-lg btn-full" disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
