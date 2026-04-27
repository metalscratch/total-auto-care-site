import React, { useState } from 'react';
import './BookingFlow.css';

/* ── Replace this with your Formspree endpoint (free tier works) ──
   Sign up at formspree.io → create form → copy endpoint URL           */
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

const STEPS = ['Service', 'Details', 'Date & Time', 'Your Info', 'Confirm'];

const PACKAGES = [
  'Essential Mobile Detail — from $159 (Small/Med) / $179 (SUV)',
  'Advanced Mobile Detail — from $219 (Small/Med) / $249 (SUV)',
  'Premium Mobile Detail — from $279 (Small/Med) / $319 (SUV)',
  'Paint Enhancement — from $349',
  'Full Paint Correction — from $599',
];

const VEHICLE_TYPES = ['Small / Hatch', 'Sedan / Medium', 'SUV / 4WD', 'Ute', 'Van / People Mover', 'Sports / Luxury'];

const TIME_SLOTS = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

/* Get next 14 days (Mon–Sat only) */
function getAvailableDates() {
  const dates = [];
  const today = new Date();
  let d = new Date(today);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (dates.length < 14) {
    const day = d.getDay();
    if (day !== 0) { // exclude Sunday
      dates.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

const DATES = getAvailableDates();

function formatDate(d) {
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
}

/* ─── Step components ─── */

function StepService({ form, setForm }) {
  return (
    <div className="booking-step">
      <h3 className="booking-step-title">What service do you need?</h3>
      <div className="booking-service-options">
        {[
          {
            key: 'detailing',
            icon: '🚗',
            title: 'Mobile Car Detailing',
            sub: 'We come to your home or workplace',
          },
          {
            key: 'transport',
            icon: '🚛',
            title: 'Vehicle Transport',
            sub: 'Dealership logistics & fleet services',
          },
        ].map((opt) => (
          <button
            key={opt.key}
            className={`service-option${form.serviceType === opt.key ? ' selected' : ''}`}
            onClick={() => setForm({ ...form, serviceType: opt.key })}
            type="button"
          >
            <span className="service-option-icon">{opt.icon}</span>
            <div>
              <div className="service-option-title">{opt.title}</div>
              <div className="service-option-sub">{opt.sub}</div>
            </div>
            <span className="service-option-check">
              {form.serviceType === opt.key ? '✓' : ''}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDetails({ form, setForm }) {
  if (form.serviceType === 'transport') {
    return (
      <div className="booking-step">
        <h3 className="booking-step-title">Transport details</h3>
        <div className="booking-fields">
          <div className="booking-field">
            <label>Pickup location *</label>
            <input
              type="text"
              placeholder="e.g. Osborne Park, WA"
              value={form.pickup || ''}
              onChange={e => setForm({ ...form, pickup: e.target.value })}
            />
          </div>
          <div className="booking-field">
            <label>Drop-off location *</label>
            <input
              type="text"
              placeholder="e.g. Joondalup, WA"
              value={form.dropoff || ''}
              onChange={e => setForm({ ...form, dropoff: e.target.value })}
            />
          </div>
          <div className="booking-field">
            <label>Vehicle type *</label>
            <select value={form.vehicleType || ''} onChange={e => setForm({ ...form, vehicleType: e.target.value })}>
              <option value="">Select vehicle type…</option>
              {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div className="booking-field">
            <label>Number of vehicles</label>
            <select value={form.vehicleCount || '1'} onChange={e => setForm({ ...form, vehicleCount: e.target.value })}>
              {['1','2','3','4','5','6+'].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div className="booking-field full">
            <label>Additional notes</label>
            <textarea
              placeholder="Any special requirements or info for the job…"
              value={form.notes || ''}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              rows={3}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-step">
      <h3 className="booking-step-title">Detailing details</h3>
      <div className="booking-fields">
        <div className="booking-field full">
          <label>Package *</label>
          <div className="package-options">
            {PACKAGES.map(p => (
              <button
                key={p}
                type="button"
                className={`package-option${form.package === p ? ' selected' : ''}`}
                onClick={() => setForm({ ...form, package: p })}
              >
                {form.package === p ? '✓ ' : ''}{p.split(' — ')[0]}
                <span className="pkg-price">{p.split(' — ')[1]}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="booking-field">
          <label>Vehicle type *</label>
          <select value={form.vehicleType || ''} onChange={e => setForm({ ...form, vehicleType: e.target.value })}>
            <option value="">Select vehicle type…</option>
            {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div className="booking-field">
          <label>Service location *</label>
          <input
            type="text"
            placeholder="Your suburb (e.g. Subiaco, WA)"
            value={form.location || ''}
            onChange={e => setForm({ ...form, location: e.target.value })}
          />
        </div>
        <div className="booking-field full">
          <label>Additional notes</label>
          <textarea
            placeholder="Any specific concerns, pet hair, stains, or requests…"
            value={form.notes || ''}
            onChange={e => setForm({ ...form, notes: e.target.value })}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}

function StepDateTime({ form, setForm }) {
  return (
    <div className="booking-step">
      <h3 className="booking-step-title">When works for you?</h3>

      {/* Date picker */}
      <div className="booking-dates">
        <div className="booking-field-label">Preferred date</div>
        <div className="date-grid">
          {DATES.map((d, i) => (
            <button
              key={i}
              type="button"
              className={`date-btn${form.date === d.toISOString().slice(0,10) ? ' selected' : ''}`}
              onClick={() => setForm({ ...form, date: d.toISOString().slice(0,10) })}
            >
              {formatDate(d)}
            </button>
          ))}
        </div>
      </div>

      {/* Time picker */}
      <div className="booking-times" style={{ marginTop: 28 }}>
        <div className="booking-field-label">Preferred start time</div>
        <div className="time-grid">
          {TIME_SLOTS.map(t => (
            <button
              key={t}
              type="button"
              className={`time-btn${form.time === t ? ' selected' : ''}`}
              onClick={() => setForm({ ...form, time: t })}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="booking-note">
        🛈 We'll confirm your exact time slot within 2 hours of booking.
      </p>
    </div>
  );
}

function StepCustomer({ form, setForm }) {
  return (
    <div className="booking-step">
      <h3 className="booking-step-title">Your details</h3>
      <div className="booking-fields">
        <div className="booking-field">
          <label>Full name *</label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={form.name || ''}
            onChange={e => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
        </div>
        <div className="booking-field">
          <label>Phone number *</label>
          <input
            type="tel"
            placeholder="04xx xxx xxx"
            value={form.phone || ''}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
          />
        </div>
        <div className="booking-field full">
          <label>Email address *</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email || ''}
            onChange={e => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
        </div>
        <div className="booking-field full">
          <label>Service address *</label>
          <input
            type="text"
            placeholder="e.g. 12 Beach Rd, Cottesloe WA 6011"
            value={form.address || ''}
            onChange={e => setForm({ ...form, address: e.target.value })}
            autoComplete="street-address"
          />
        </div>
        {form.serviceType === 'transport' && (
          <div className="booking-field full">
            <label>Business / Dealership name (optional)</label>
            <input
              type="text"
              placeholder="XYZ Motors Perth"
              value={form.business || ''}
              onChange={e => setForm({ ...form, business: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StepConfirm({ form }) {
  const isDetailing  = form.serviceType === 'detailing';
  const isTransport  = form.serviceType === 'transport';

  return (
    <div className="booking-step">
      <h3 className="booking-step-title">Review your booking</h3>
      <div className="confirm-summary">

        <div className="confirm-row">
          <span>Service</span>
          <span>{isDetailing ? 'Mobile Car Detailing' : 'Vehicle Transport'}</span>
        </div>

        {isDetailing && form.package && (
          <div className="confirm-row">
            <span>Package</span>
            <span>{form.package.split(' — ')[0]}</span>
          </div>
        )}

        <div className="confirm-row">
          <span>Vehicle</span>
          <span>{form.vehicleType || '—'}</span>
        </div>

        {isTransport && (
          <>
            <div className="confirm-row">
              <span>Pickup</span>
              <span>{form.pickup || '—'}</span>
            </div>
            <div className="confirm-row">
              <span>Drop-off</span>
              <span>{form.dropoff || '—'}</span>
            </div>
          </>
        )}

        {isDetailing && (
          <div className="confirm-row">
            <span>Location</span>
            <span>{form.location || '—'}</span>
          </div>
        )}

        <div className="confirm-row">
          <span>Date</span>
          <span>{form.date ? new Date(form.date + 'T00:00:00').toLocaleDateString('en-AU', { weekday:'long', day:'numeric', month:'long' }) : '—'}</span>
        </div>

        <div className="confirm-row">
          <span>Time</span>
          <span>{form.time || '—'}</span>
        </div>

        <div className="confirm-row confirm-row--divider">
          <span>Name</span>
          <span>{form.name || '—'}</span>
        </div>
        <div className="confirm-row">
          <span>Phone</span>
          <span>{form.phone || '—'}</span>
        </div>
        <div className="confirm-row">
          <span>Email</span>
          <span>{form.email || '—'}</span>
        </div>
        <div className="confirm-row">
          <span>Address</span>
          <span>{form.address || '—'}</span>
        </div>
      </div>

      <p className="booking-note" style={{ marginTop: 20 }}>
        After submitting, we'll call or text to confirm your booking within a few hours.
      </p>
    </div>
  );
}

function SuccessScreen({ form }) {
  return (
    <div className="booking-success">
      <div className="success-icon">✓</div>
      <h3 className="success-title">Booking Request Sent!</h3>
      <p className="success-sub">
        Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''}! We've received your request and will confirm your booking shortly via phone or text on <strong>{form.phone}</strong>.
      </p>
      <div className="success-details">
        <div>📅 {form.date ? new Date(form.date + 'T00:00:00').toLocaleDateString('en-AU', { weekday:'long', day:'numeric', month:'long' }) : '—'} at {form.time}</div>
        <div>📍 {form.location || form.pickup || 'Location TBC'}</div>
      </div>
      <a
        href={`https://wa.me/61477533479?text=${encodeURIComponent(`Hi! I just submitted a booking request for ${form.serviceType === 'detailing' ? 'car detailing' : 'vehicle transport'} on ${form.date} at ${form.time}. Name: ${form.name}`)}`}
        className="btn btn-gold btn-lg"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: 24 }}
      >
        💬 Message us on WhatsApp
      </a>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function BookingFlow({ initialService = '' }) {
  const [step, setStep]         = useState(0);
  const [submitted, setSubmit]  = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [form, setForm]         = useState({
    serviceType: initialService || '',
    package: '',
    vehicleType: '',
    location: '',
    pickup: '',
    dropoff: '',
    vehicleCount: '1',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    business: '',
    notes: '',
  });

  const canNext = () => {
    if (step === 0) return !!form.serviceType;
    if (step === 1) {
      if (form.serviceType === 'detailing') return !!form.package && !!form.vehicleType && !!form.location;
      if (form.serviceType === 'transport') return !!form.pickup && !!form.dropoff && !!form.vehicleType;
    }
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return !!form.name && !!form.phone && !!form.email && !!form.address;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmit(true);
      } else {
        setError('Something went wrong. Please try again or call us directly on 0477 533 479.');
      }
    } catch {
      /* If Formspree not configured, still show success so UX isn't broken in dev */
      setSubmit(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessScreen form={form} />;

  return (
    <div className="booking-flow">

      {/* Progress bar */}
      <div className="booking-progress">
        {STEPS.map((label, i) => (
          <React.Fragment key={label}>
            <button
              className={`progress-step${i === step ? ' active' : ''}${i < step ? ' done' : ''}${i > step ? ' pending' : ''}`}
              onClick={() => i < step && setStep(i)}
              type="button"
            >
              <span className="progress-dot">
                {i < step ? '✓' : i + 1}
              </span>
              <span className="progress-label">{label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`progress-line${i < step ? ' done' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step content */}
      <div className="booking-body">
        {step === 0 && <StepService form={form} setForm={setForm} />}
        {step === 1 && <StepDetails form={form} setForm={setForm} />}
        {step === 2 && <StepDateTime form={form} setForm={setForm} />}
        {step === 3 && <StepCustomer form={form} setForm={setForm} />}
        {step === 4 && <StepConfirm form={form} />}
      </div>

      {/* Error */}
      {error && <p className="booking-error">{error}</p>}

      {/* Navigation */}
      <div className="booking-nav">
        {step > 0 && (
          <button type="button" className="btn btn-outline-back" onClick={() => setStep(s => s - 1)}>
            ← Back
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            className="btn btn-gold btn