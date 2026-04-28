import { useState } from 'react';

const STEPS = ['Service', 'Vehicle', 'Schedule', 'Details', 'Confirm'];

const SERVICES = [
  { id: 'maintenance', name: 'Maintenance Detail', desc: 'Exterior wash, interior vacuum & wipe-down. Perfect for regular upkeep.', price: 'From $159' },
  { id: 'full',        name: 'Full Detail',        desc: 'Full interior & exterior detail. Includes polish, wax and leather conditioning.', price: 'From $299' },
  { id: 'premium',     name: 'Premium Detail',     desc: 'Everything in Full Detail plus paint decontamination and ceramic coating prep.', price: 'From $499' },
  { id: 'transport',   name: 'Vehicle Transport',  desc: 'Safe, enclosed transport across Perth and surrounds.', price: 'Get a Quote' },
];

const TIMES = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'];

const INIT = {
  service: '', vehicleMake: '', vehicleModel: '', vehicleSize: '',
  date: '', time: '', address: '', suburb: '',
  name: '', email: '', phone: '', notes: '',
};

export default function BookingFlow() {
  const [step, setStep]           = useState(0);
  const [form, setForm]           = useState(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const canProceed = [
    !!form.service,
    !!(form.vehicleMake && form.vehicleModel && form.vehicleSize),
    !!(form.date && form.time && form.address && form.suburb),
    !!(form.name && form.email && form.phone),
    true,
  ][step];

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Booking Request' }),
      });
      setSubmitted(true);
    } catch {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success__icon">&#10003;</div>
        <h2>Booking Request Sent!</h2>
        <p>Thanks {form.name}! We'll confirm your booking within a couple of hours.</p>
        <a href="/" className="btn btn-gold">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="booking-flow">

      <div className="booking-progress">
        {STEPS.map((label, i) => (
          <div key={i}
            className={`progress-step${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}
            onClick={() => i < step && setStep(i)}>
            <div className="progress-dot">
              {i < step ? <span>&#10003;</span> : i + 1}
            </div>
            <span className="progress-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="booking-body">

        {step === 0 && (
          <div className="booking-step-content">
            <h2>Choose Your Service</h2>
            <div className="service-cards">
              {SERVICES.map(s => (
                <button key={s.id}
                  className={`service-card${form.service === s.id ? ' selected' : ''}`}
                  onClick={() => update('service', s.id)}>
                  <div className="service-card__name">{s.name}</div>
                  <div className="service-card__desc">{s.desc}</div>
                  <div className="service-card__price">{s.price}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="booking-step-content">
            <h2>Your Vehicle</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Make</label>
                <input type="text" placeholder="e.g. Toyota"
                  value={form.vehicleMake} onChange={e => update('vehicleMake', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Model</label>
                <input type="text" placeholder="e.g. Hilux"
                  value={form.vehicleModel} onChange={e => update('vehicleModel', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Vehicle Size</label>
              <div className="size-options">
                {[['small','Small (Hatch / Sedan)'],['medium','Medium (SUV / Wagon)'],['large','Large (4WD / Van / Ute)']].map(([val, lbl]) => (
                  <button key={val}
                    className={`size-option${form.vehicleSize === val ? ' selected' : ''}`}
                    onClick={() => update('vehicleSize', val)}>{lbl}</button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="booking-step-content">
            <h2>Date, Time & Location</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" value={form.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => update('date', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <select value={form.time} onChange={e => update('time', e.target.value)}>
                  <option value="">Select a time</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Street Address</label>
              <input type="text" placeholder="e.g. 12 Smith Street"
                value={form.address} onChange={e => update('address', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Suburb</label>
              <input type="text" placeholder="e.g. Joondalup"
                value={form.suburb} onChange={e => update('suburb', e.target.value)} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="booking-step-content">
            <h2>Your Details</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name"
                value={form.name} onChange={e => update('name', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@email.com"
                value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="04xx xxx xxx"
                value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Special Requests (optional)</label>
              <textarea placeholder="Anything we should know?" rows={4}
                value={form.notes} onChange={e => update('notes', e.target.value)} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="booking-step-content">
            <h2>Confirm Your Booking</h2>
            <div className="booking-summary">
              <p><strong>Service</strong><span>{SERVICES.find(s => s.id === form.service)?.name}</span></p>
              <p><strong>Vehicle</strong><span>{form.vehicleMake} {form.vehicleModel} ({form.vehicleSize})</span></p>
              <p><strong>Date &amp; Time</strong><span>{form.date} at {form.time}</span></p>
              <p><strong>Location</strong><span>{form.address}, {form.suburb}</span></p>
              <p><strong>Name</strong><span>{form.name}</span></p>
              <p><strong>Email</strong><span>{form.email}</span></p>
              <p><strong>Phone</strong><span>{form.phone}</span></p>
              {form.notes && <p><strong>Notes</strong><span>{form.notes}</span></p>}
            </div>
          </div>
        )}

        <div className="booking-nav">
          {step > 0 && (
            <button className="btn btn-outline" onClick={() => setStep(s => s - 1)}>
              &larr; Back
            </button>
          )}
          {step < 4 ? (
            <button className="btn btn-gold" disabled={!canProceed}
              onClick={() => setStep(s => s + 1)}>
              Next &rarr;
            </button>
          ) : (
            <button className="btn btn-gold" disabled={!canProceed || sending}
              onClick={handleSubmit}>
              {sending ? 'Sending…' : 'Confirm Booking'}
            </button>
          )}
        </div>
      </div>

      <p className="booking-footer-note">
        Prefer to talk? Call us directly on{' '}
        <a href="tel:+61477533479">0477 533 479</a> or{' '}
        <a href="https://wa.me/61477533479" target="_blank" rel="noreferrer">message us on WhatsApp</a>.
      </p>
    </div>
  );
}
