import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/BookingPage.css';

const PACKAGE_DATA = {
    essential: {
          name: 'Essential Mobile Detail',
          price: 159,
          description: 'The perfect everyday refresh',
          features: ['Full exterior hand wash & dry', 'Wheel & tyre clean', 'Interior vacuum', 'Dashboard & console wipe-down', 'Window clean (interior + exterior)', 'Door jambs cleaned']
    },
    advanced: {
          name: 'Advanced Mobile Detail',
          price: 219,
          description: 'Our most popular package',
          features: ['Everything in Essential, plus:', 'Clay bar decontamination', 'Hand wax & paint protection', 'Interior shampoo (seats & carpet)', 'Leather clean & condition', 'Tyre dressing applied', 'Engine bay light clean']
    },
    premium: {
          name: 'Premium Mobile Detail',
          price: 279,
          description: 'Showroom finish at your door',
          features: ['Everything in Advanced, plus:', 'Full paint decontamination', 'Two-stage machine polish', 'Premium ceramic sealant', 'Deep interior steam clean', 'Odour elimination treatment', 'Full protection coat applied']
    }
};

export default function BookingPage() {
    const [searchParams] = useSearchParams();
    const packageType = searchParams.get('package') || 'essential';
    const package_ = PACKAGE_DATA[packageType] || PACKAGE_DATA.essential;
    const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', address: '', preferredDate: '', preferredTime: '', vehicleType: '', notes: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDepositPayment = () => {
        setLoading(true);
        // TODO: Stripe Checkout integration here
        // const response = await fetch('/api/create-checkout-session', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ packageType, depositAmount: 50, customerData: formData })
        // });
        // const { sessionId } = await response.json();
        // window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
        setTimeout(() => { setSubmitted(true); setLoading(false); }, 1000);
  };

  const handleCallback = () => {
        setLoading(true);
        // TODO: Send to backend /api/request-callback
        setTimeout(() => { setSubmitted(true); setLoading(false); }, 1000);
  };

  if (submitted) {
        return (
                <div className="booking-container">
                        <div className="confirmation-message">
                                  <div className="confirmation-icon">✓</div>div>
                                  <h2>Booking Request Received</h2>h2>
                                  <p>Your booking request has been received. We will contact you shortly to confirm availability.</p>p>
                                  <p className="confirmation-email">We'll reach out to you at <strong>{formData.phone}</strong>strong> or <strong>{formData.email}</strong>strong></p>p>
                                  <a href="/" className="btn-primary">Return to Home</a>a>
                        </div>div>
                </div>div>
              );
  }
  
    return (
          <div className="booking-container">
                <div className="booking-header">
                        <h1>Complete Your Booking</h1>h1>
                        <p>Secure your car detailing service in Perth</p>p>
                </div>div>
                <div className="booking-content">
                        <div className="booking-package">
                                  <div className="package-card">
                                              <h3>{package_.name}</h3>h3>
                                              <p className="package-desc">{package_.description}</p>p>
                                              <div className="package-price">
                                                            <span className="price">${package_.price}</span>span>
                                                            <span className="subtext">from (small to medium vehicle)</span>span>
                                              </div>div>
                                              <div className="package-features">
                                                            <h4>What's Included:</h4>h4>
                                                            <ul>
                                                              {package_.features.map((feature, idx) => (<li key={idx}>✓ {feature}</li>li>))}
                                                            </ul>ul>
                                              </div>div>
                                              <div className="trust-elements">
                                                            <div className="trust-item"><span className="trust-icon">📍</span>span><span className="trust-text">Perth-based, mobile service</span>span></div>div>
                                                            <div className="trust-item"><span className="trust-icon">⭐</span>span><span className="trust-text">Satisfaction guarantee</span>span></div>div>
                                                            <div className="trust-item"><span className="trust-icon">🧪</span>span><span className="trust-text">Professional-grade products</span>span></div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                        <div className="booking-form-section">
                                  <form className="booking-form">
                                              <div className="form-group">
                                                            <label htmlFor="fullName">Full Name *</label>label>
                                                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your full name" required />
                                              </div>div>
                                              <div className="form-row">
                                                            <div className="form-group">
                                                                            <label htmlFor="phone">Phone Number *</label>label>
                                                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+61 477 533 479" required />
                                                            </div>div>
                                                            <div className="form-group">
                                                                            <label htmlFor="email">Email Address *</label>label>
                                                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                                                            </div>div>
                                              </div>div>
                                              <div className="form-group">
                                                            <label htmlFor="address">Service Address *</label>label>
                                                            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Your home or workplace address" required />
                                              </div>div>
                                              <div className="form-row">
                                                            <div className="form-group">
                                                                            <label htmlFor="preferredDate">Preferred Date *</label>label>
                                                                            <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} required />
                                                            </div>div>
                                                            <div className="form-group">
                                                                            <label htmlFor="preferredTime">Preferred Time *</label>label>
                                                                            <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} required>
                                                                                              <option value="">Select time</option>option>
                                                                                              <option value="morning">Morning (8am - 12pm)</option>option>
                                                                                              <option value="afternoon">Afternoon (12pm - 4pm)</option>option>
                                                                                              <option value="late">Late (4pm - 6pm)</option>option>
                                                                            </select>select>
                                                            </div>div>
                                              </div>div>
                                              <div className="form-group">
                                                            <label htmlFor="vehicleType">Vehicle Type *</label>label>
                                                            <select id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} required>
                                                                            <option value="">Select vehicle type</option>option>
                                                                            <option value="sedan">Sedan</option>option>
                                                                            <option value="suv">SUV / 4WD</option>option>
                                                                            <option value="ute">Ute</option>option>
                                                                            <option value="van">Van</option>option>
                                                                            <option value="truck">Truck</option>option>
                                                                            <option value="other">Other</option>option>
                                                            </select>select>
                                              </div>div>
                                              <div className="form-group">
                                                            <label htmlFor="notes">Additional Notes</label>label>
                                                            <textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Any special requests? (optional)" rows="3" />
                                              </div>div>
                                              <div className="deposit-section">
                                                            <h4>Secure Your Booking</h4>h4>
                                                            <p className="deposit-message">Secure your booking with a $50 deposit. The remaining balance is paid after the service is completed.</p>p>
                                                            <div className="deposit-amount"><span>Deposit:</span>span><span className="amount">$50</span>span></div>div>
                                                            <div className="deposit-balance"><span>Balance due after service:</span>span><span className="amount">${package_.price - 50}</span>span></div>div>
                                              </div>div>
                                              <div className="form-buttons">
                                                            <button type="button" className="btn-primary btn-deposit" onClick={handleDepositPayment} disabled={loading || !formData.fullName || !formData.phone || !formData.email || !formData.address || !formData.preferredDate || !formData.preferredTime || !formData.vehicleType}>
                                                              {loading ? 'Processing...' : 'Pay $50 Deposit & Book Now'}
                                                            </button>button>
                                                            <button type="button" className="btn-secondary btn-callback" onClick={handleCallback} disabled={loading}>Request Callback Instead</button>button>
                                              </div>div>
                                              <p className="form-note">We'll confirm your booking within 24 hours. Questions? Call <a href="tel:+61477533479">0477 533 479</a>a></p>p>
                                  </form>form>
                        </div>div>
                </div>div>
          </div>div>
        );
}</div>
