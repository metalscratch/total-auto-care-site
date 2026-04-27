import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const PACKAGES = [
  { name: 'Essential Mobile Detail', tagline: 'The perfect everyday refresh', priceSmall: 159, priceSUV: 179, popular: false, icon: '✦',
    includes: ['Full exterior hand wash & dry','Wheel & tyre clean','Interior vacuum','Dashboard & console wipe-down','Window clean (interior + exterior)','Door jambs cleaned'] },
  { name: 'Advanced Mobile Detail', tagline: 'Our most popular package', priceSmall: 219, priceSUV: 249, popular: true, icon: '◆',
    includes: ['Everything in Essential, plus:','Clay bar decontamination','Hand wax & paint protection','Interior shampoo (seats & carpet)','Leather clean & condition','Tyre dressing applied','Engine bay light clean'] },
  { name: 'Premium Mobile Detail', tagline: 'Showroom finish at your door', priceSmall: 279, priceSUV: 319, popular: false, icon: '◈',
    includes: ['Everything in Advanced, plus:','Full paint decontamination','Two-stage machine polish','Premium ceramic sealant','Deep interior steam clean','Odour elimination treatment','Full protection coat applied'] },
];

const ADD_ONS = [
  { name: 'Paint Enhancement', desc: 'One-stage machine polish to remove light swirl marks and restore gloss.', price: 'From $349', time: '4–5 hrs' },
  { name: 'Full Paint Correction', desc: 'Two-stage correction to eliminate deep scratches, swirls, and oxidation.', price: 'From $599', time: '6–8 hrs' },
];

export default function Pricing() {
  const [vehicleType, setVehicleType] = useState('small');
  return (
    <section className="pricing section section-dark" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>Mobile Car Detailing Packages</h2>
          <p className="section-sub">We come to you — at your home or workplace. All packages include professional-grade products and a 100% satisfaction guarantee.</p>
          <div className="pricing-toggle" role="group" aria-label="Vehicle type">
            <button className={`pricing-toggle-btn${vehicleType === 'small' ? ' active' : ''}`} onClick={() => setVehicleType('small')}>🚗 Small / Medium</button>
            <button className={`pricing-toggle-btn${vehicleType === 'suv' ? ' active' : ''}`} onClick={() => setVehicleType('suv')}>🚙 SUV / 4WD</button>
          </div>
        </div>
        <div className="pricing-grid">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={`pricing-card${pkg.popular ? ' pricing-card--popular' : ''}`}>
              {pkg.popular && <div className="pricing-popular-badge">Most Popular</div>}
              <div className="pricing-card-header">
                <div className="pricing-icon">{pkg.icon}</div>
                <div className="pricing-card-name">{pkg.name}</div>
                <div className="pricing-card-tagline">{pkg.tagline}</div>
              </div>
              <div className="pricing-price-block">
                <div className="pricing-price">
                  <span className="pricing-from">from</span>
                  <span className="pricing-amount">${vehicleType === 'small' ? pkg.priceSmall : pkg.priceSUV}</span>
                </div>
                <div className="pricing-vehicle-note">{vehicleType === 'small' ? 'Small to medium vehicle' : 'SUV / 4WD / Large vehicle'}</div>
              </div>
              <ul className="pricing-includes">
                {pkg.includes.map((item) => (
                  <li key={item} className="pricing-include-item">
                    <span className={item.startsWith('Everything') ? 'include-bold' : ''}>{item.startsWith('Everything') ? '' : '✓ '}{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/booking?package=${encodeURIComponent(pkg.name)}`} className={`btn btn-full${pkg.popular ? ' btn-gold' : ' pricing-btn-outline'}`}>Book This Package</Link>
            </div>
          ))}
        </div>
        <div className="pricing-addons">
          <div className="pricing-addons-label">
            <span className="eyebrow">Paint Services</span>
            <h3 className="pricing-addons-heading">Take It Further</h3>
          </div>
          <div className="pricing-addons-grid">
            {ADD_ONS.map((item) => (
              <div key={item.name} className="addon-card">
                <div className="addon-left">
                  <div className="addon-name">{item.name}</div>
                  <div className="addon-desc">{item.desc}</div>
                  <div className="addon-time">⏱ {item.time}</div>
                </div>
                <div className="addon-right">
                  <div className="addon-price">{item.price}</div>
                  <Link to="/booking" className="btn btn-gold btn-sm" style={{marginTop: 12}}>Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="pricing-note">Prices are indicative. Final quote provided after vehicle inspection. <Link to="/contact" style={{ color: 'var(--gold)' }}>Contact us</Link> with any questions.</p>
      </div>
    </section>
  );
}
