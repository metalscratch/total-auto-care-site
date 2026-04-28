import React, { useState } from 'react';
import './BookingFlow.css';

const SERVICES = [
  {
    id: 'maintenance',
    name: 'Maintenance Detail',
    desc: 'Exterior wash, interior vacuum & wipe-down. Perfect for regular upkeep.',
    price: 'From $159',
  },
  {
    id: 'full',
    name: 'Full Detail',
    desc: 'Full interior & exterior detail. Includes polish, wax and leather conditioning.',
    price: 'From $299',
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    desc: 'Everything in Full Detail plus paint decontamination and ceramic coating prep.',
    price: 'From $499',
  },
  {
    id: 'transport',
    name: 'Vehicle Transport',
    desc: 'Safe, enclosed transport across Perth and surrounds.',
    price: 'Get a Quote',
  },
];

const VEHICLE_SIZES = [
  { id: 'small', label: 'Small (Hatch / Sedan)' },
  { id: 'medium', label: 'Medium (SUV / Wagon)' },
  { id: 'large', label: 'Large (4WD / Van / Ute)' },
];

const STEPS = ['Service', 'Vehicle', 'Schedule', 'Details', 'Confirm'];

const initialForm = {
  service: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleSize: '',
  date: '',
  time: '',
  address: '',
  suburb: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
};

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const canProceed = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return form.vehicleMake && form.vehicleModel && form.vehicleSize;
    if (step === 2) return form.date && form.time && form.address && form.suburb;
    if (step === 3) return form.name && form.email && form.phone;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          service: form.service,
          vehicle: `${form.vehicleMake} ${form.vehicleModel} (${form.vehicleSize})`,
          date: form.date,
          time: form.time,
          address: `${form.address}, ${form.suburb}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          notes: form.notes,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please call us on 0400 000 000.');
      }
    } catch {
      setError('Network error. Please call us on 0400 000 000.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success__icon">&#10003;</div>
        <h2>Booking Request Received!</h2>
        <p>
          Thanks, <strong>{form.name}</strong>. We will confirm your{' '}
          <strong>{SERVICES.find(s => s.id === form.service)?.name}</strong> on{' '}
          <strong>{form.date}</strong> at <strong>{form.time}</strong> via email or phone within
          2 hours.
        </p>
        <p className="booking-success__address">
          Service location: {form.address}, {form.suburb}
        </p>
      </div>
    );
  }

  return (
    <div className="booking-flow">
      {/* Progress bar */}
      <div className="booking-steps">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={`booking-step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`}
          >
            <div className="booking-step__dot">
              {i < step ? <span>&#10003;</span> : <span>{i + 1}</span>}
            </div>
            <span className="booking-step__label">{label}</span>
          </div>
        ))}
      </div>

      {/* Step 0: Service */}
      {step === 0 && (
        <div className="booking-panel">
          <h3 className="booking-panel__title">Choose Your Service</h3>
          <div className="service-cards">
            {SERVICES.map(svc => (
              <button
                key={svc.id}
                type="button"
                className={`service-card ${form.service === svc.id ? 'selected' : ''}`}
                onClick={() => update('service', svc.id)}
              >
                <div className="service-card__name">{svc.name}</div>
                <div className="service-card__desc">{svc.desc}</div>
                <div className="service-card__price">{svc.price}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Vehicle */}
      {step === 1 && (
        <div className="booking-panel">
          <h3 className="booking-panel__title">Your Vehicle</h3>
          <div className="booking-fields">
            <div className="booking-field">
              <label>Make</label>
              <input
                type="text"
                placeholder="e.g. Toyota"
                value={form.vehicleMake}
                onChange={e => update('vehicleMake', e.target.value)}
              />
            </div>
            <div className="booking-field">
              <label>Model</label>
              <input
                type="text"
                placeholder="e.g. Hilux"
                value={form.vehicleModel}
                onChange={e => update('vehicleModel', e.target.value)}
              />
            </div>
          </div>
          <div className="booking-field">
            <label>Vehicle Size</label>
            <div className="size-options">
              {VEHICLE_SIZES.map(sz => (
                <button
                  key={sz.id}
                  type="button"
                  className={`size-option ${form.vehicleSize === sz.id ? 'selected' : ''}`}
                  onClick={() => update('vehicleSize', sz.id)}
                >
                  {sz.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Schedule & Address */}
      {step === 2 && (
        <div className="booking-panel">
          <h3 className="booking-panel__title">Date, Time &amp; Location</h3>
          <p className="booking-panel__sub">We come to you - home or workplace.</p>
          <div className="booking-fields">
            <div className="booking-field">
              <label>Preferred Date</label>
              <input
                type="date"
                value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => update('date', e.target.value)}
              />
            </div>
            <div className="booking-field">
              <label>Preferred Time</label>
              <select value={form.time} onChange={e => update('time', e.target.value)}>
                <option value="">Select a time</option>
                <option value="7:00am">7:00am</option>
                <option value="8:00am">8:00am</option>
                <option value="9:00am">9:00am</option>
                <option value="10:00am">10:00am</option>
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="3:00pm">3:00pm</option>
              </select>
            </div>
          </div>
          <div className="booking-field">
            <label>Street Address</label>
            <input
              type="text"
              placeholder="e.g. 12 Smith Street"
              value={form.address}
              onChange={e => update('address', e.target.value)}
            />
          </div>
          <div className="booking-field">
            <label>Suburb</label>
            <input
              type="text"
              placeholder="e.g. Joondalup"
              value={form.suburb}
              onChange={e => update('suburb', e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <div className="booking-panel">
          <h3 className="booking-panel__title">Your Details</h3>
          <div className="booking-fields">
            <div className="booking-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => update('name', e.target.value)}
              />
            </div>
            <div className="booking-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={e => update('email', e.target.value)}
              />
            </div>
          </div>
          <div className="booking-field">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="04xx xxx xxx"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
            />
          </div>
          <div className="booking-field">
            <label>Special Requests (optional)</label>
            <textarea
              placeholder="Anything we should know?"
              rows={3}
              value={form.notes}
              onChange={e => update('notes', e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Step 4: Confirm */}
      {step === 4 && (
        <div className="booking-panel">
          <h3 className="booking-panel__title">Confirm Your Booking</h3>
          <div className="booking-summary">
            <div className="summary-row">
              <span>Service</span>
              <strong>{SERVICES.find(s => s.id === form.service)?.name}</strong>
            </div>
            <div className="summary-row">
              <span>Vehicle</span>
              <strong>
                {form.vehicleMake} {form.vehicleModel} ({form.vehicleSize})
              </strong>
            </div>
            <div className="summary-row">
              <span>Date &amp; Time</span>
              <strong>
                {form.date} at {form.time}
              </strong>
            </div>
            <div className="summary-row">
              <span>Location</span>
              <strong>
                {form.address}, {form.suburb}
              </strong>
            </div>
            <div className="summary-row">
              <span>Name</span>
              <strong>{form.name}</strong>
            </div>
            <div className="summary-row">
              <span>Email</span>
              <strong>{form.email}</strong>
            </div>
            <div className="summary-row">
              <span>Phone</span>
              <strong>{form.phone}</strong>
            </div>
            {form.notes && (
              <div className="summary-row">
                <span>Notes</span>
                <strong>{form.notes}</strong>
              </div>
            )}
          </div>
          {error && <p className="booking-error">{error}</p>}
        </div>
      )}

      {/* Navigation */}
      <div className="booking-nav">
        {step > 0 && (
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStep(s => s - 1)}
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            className={`btn btn-gold ${!canProceed() ? 'btn-disabled' : ''}`}
            disabled={!canProceed()}
            onClick={() => setStep(s => s + 1)}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-gold"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting ? 'Submitting...' : 'Confirm Booking'}
          </button>
        )}
      </div>
    </div>
  );
}
