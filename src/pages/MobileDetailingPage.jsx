import React from 'react';
import './PageHero.css';

const PACKAGES = [
  {
    name: 'Maintenance Detail',
    price: 'From $159',
    duration: '1.5 - 2 hrs',
    features: [
      'Exterior hand wash and dry',
      'Wheel and tyre clean',
      'Interior vacuum',
      'Dashboard and console wipe-down',
      'Window clean (interior and exterior)',
      'Door jambs wiped',
    ],
  },
  {
    name: 'Full Detail',
    price: 'From $299',
    duration: '3 - 4 hrs',
    features: [
      'Everything in Maintenance Detail',
      'Machine polish (minor swirl removal)',
      'Carnauba wax application',
      'Leather conditioning',
      'Interior steam clean',
      'Odour treatment',
      'Engine bay wipe-down',
    ],
    highlight: true,
  },
  {
    name: 'Premium Detail',
    price: 'From $499',
    duration: '5 - 7 hrs',
    features: [
      'Everything in Full Detail',
      'Paint decontamination (iron remover)',
      'Clay bar treatment',
      'Two-stage machine polish',
      'Ceramic coating prep',
      'Full interior detail with steam',
      'Headlight restoration',
      'Paint sealant application',
    ],
  },
];

export default function MobileDetailingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Mobile Car Detailing Perth</h1>
          <p>Professional detailing delivered to your door</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <h2>We Come To You</h2>
            <p>
              No more wasting half a day dropping your car off and waiting around.
              Our fully equipped mobile detailing van comes to your home or workplace
              anywhere in the Perth metro area. All we need is a water tap and power
              outlet nearby.
            </p>
          </div>

          <div className="packages-grid">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={`package-card ${pkg.highlight ? 'package-card--highlight' : ''}`}>
                {pkg.highlight && <div className="package-badge">Most Popular</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <div className="package-duration">{pkg.duration}</div>
                <ul className="package-features">
                  {pkg.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="/booking" className="btn btn-gold">Book Now</a>
              </div>
            ))}
          </div>

          <div className="service-note">
            <h3>Pricing Note</h3>
            <p>
              Prices vary based on vehicle size and condition. Large 4WDs, vans and
              heavily soiled vehicles may incur additional charges. We'll confirm the
              exact price before we start. No hidden fees.
            </p>
          </div>

          <div className="service-areas">
            <h2>Areas We Service</h2>
            <p>
              We cover all Perth metro suburbs including Joondalup, Wanneroo,
              Stirling, Bayswater, Swan, Belmont, Canning, Fremantle, Rockingham,
              Armadale, and more. Not sure if we cover your area? Give us a call.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
