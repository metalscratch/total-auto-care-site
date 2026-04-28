import React from 'react';
import './PageHero.css';

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About Total Auto Care Group</h1>
          <p>Perth's trusted mobile car detailing team</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p>
                Total Auto Care Group is a family-owned mobile car detailing business
                serving Perth and surrounding suburbs. We bring professional-grade
                detailing directly to your home or workplace, so you never have to
                waste time dropping your car off at a shop.
              </p>
              <p>
                Our team of certified detailers uses only premium products to ensure
                your vehicle looks and feels showroom-fresh every time. Whether you
                need a quick maintenance detail or a full premium treatment, we have
                a package that suits your needs and budget.
              </p>
              <h2>Our Mission</h2>
              <p>
                We believe every vehicle deserves the best care, and every customer
                deserves a seamless experience. That is why we handle everything from
                booking to completion at your doorstep - no fuss, no waiting rooms,
                just exceptional results.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Mobile Service</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5-Star</div>
                <div className="stat-label">Rated Service</div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality First</h3>
                <p>We use premium detailing products and proven techniques for results that last.</p>
              </div>
              <div className="value-card">
                <h3>Convenience</h3>
                <p>We come to you - at home, at work, or wherever is most convenient.</p>
              </div>
              <div className="value-card">
                <h3>Reliability</h3>
                <p>We show up on time, every time, and deliver exactly what we promise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
