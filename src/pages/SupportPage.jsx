import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SupportPage.css';

export default function SupportPage() {
  return (
    <div className="support-page">
      {/* Hero */}
      <section className="support-hero">
        <div className="support-hero-inner">
          <h1 className="support-hero-title">Customer Support</h1>
          <p className="support-hero-subtitle">
            We're here to help. Reach out anytime — we respond within 24 hours.
          </p>
          <div className="support-contact-bar">
            <a href="mailto:admin@totalautocare.au" className="support-contact-item">
              <span className="contact-icon">✉</span>
              admin@totalautocare.au
            </a>
            <a href="tel:+61477533479" className="support-contact-item">
              <span className="contact-icon">📞</span>
              +61 477 533 479
            </a>
            <span className="support-contact-item">
              <span className="contact-icon">🕐</span>
              24-hour response time
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="support-sections">
        <div className="support-sections-inner">

          {/* Bookings & Payments */}
          <div className="support-card">
            <div className="support-card-icon">📅</div>
            <h2 className="support-card-title">Bookings &amp; Payments</h2>
            <div className="support-qa">
              <div className="support-q">How do I book a service?</div>
              <div className="support-a">
                Select your package on our{' '}
                <Link to="/#pricing">Pricing page</Link> and click "Book This
                Package". Complete the booking form and pay the $50 deposit to
                secure your appointment.
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">What payment methods do you accept?</div>
              <div className="support-a">
                We accept all major credit and debit cards. The $50 deposit is
                collected securely online. The remaining balance can be paid in
                cash or by card on the day of service.
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">When is the remaining balance due?</div>
              <div className="support-a">
                The balance is due after the service is completed to your
                satisfaction. We never ask for full payment upfront.
              </div>
            </div>
          </div>

          {/* Cancellations & Rescheduling */}
          <div className="support-card">
            <div className="support-card-icon">🔄</div>
            <h2 className="support-card-title">Cancellations &amp; Rescheduling</h2>
            <div className="support-qa">
              <div className="support-q">How do I reschedule my booking?</div>
              <div className="support-a">
                Contact us at least 24 hours before your appointment by phone or
                email and we'll move your booking to a suitable time at no extra
                charge.
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">What if I need to cancel?</div>
              <div className="support-a">
                Cancellations made more than 24 hours in advance are accepted
                without penalty. Cancellations within 24 hours of the
                appointment may forfeit the deposit (see Refunds section below).
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">What happens if weather prevents the service?</div>
              <div className="support-a">
                If we need to reschedule due to severe weather, we will contact
                you as early as possible to arrange an alternative time at no
                additional cost.
              </div>
            </div>
          </div>

          {/* Refunds & Deposits */}
          <div className="support-card">
            <div className="support-card-icon">💳</div>
            <h2 className="support-card-title">Refunds &amp; Deposits</h2>
            <div className="support-qa">
              <div className="support-q">Is the $50 deposit refundable?</div>
              <div className="support-a">
                Deposits are non-refundable but are fully transferable. If you
                need to cancel, your deposit can be applied to a future booking
                within 6 months.
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">How long do refunds take to process?</div>
              <div className="support-a">
                In eligible cases, refunds are processed within 5–10 business
                days and returned to the original payment method.
              </div>
            </div>
            <div className="support-qa">
              <div className="support-q">Who do I contact about a payment issue?</div>
              <div className="support-a">
                Email us at{' '}
                <a href="mailto:admin@totalautocare.au">
                  admin@totalautocare.au
                </a>{' '}
                or call{' '}
                <a href="tel:+61477533479">+61 477 533 479</a> and we'll resolve
                it promptly.
              </div>
            </div>
          </div>

          {/* Service Guarantee */}
          <div className="support-card guarantee-card">
            <div className="support-card-icon">🛡️</div>
            <h2 className="support-card-title">100% Satisfaction Guarantee</h2>
            <p className="guarantee-body">
              We stand behind every detail. If you're not completely satisfied
              with the result, contact us within 48 hours of your service and
              we'll return to address any concerns — free of charge.
            </p>
            <div className="support-qa">
              <div className="support-q">How do I raise a concern about my service?</div>
              <div className="support-a">
                Get in touch within 48 hours of your appointment by phone or
                email. Please include photos where possible so we can assess and
                respond quickly.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="support-cta">
        <div className="support-cta-inner">
          <h2 className="support-cta-title">Still have a question?</h2>
          <p className="support-cta-subtitle">
            Our team is ready to help. We'll get back to you within 24 hours.
          </p>
          <a href="mailto:admin@totalautocare.au" className="btn-gold">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
