import React from 'react';
import '../styles/SupportPage.css';

const SupportPage = () => {
    return (
          <div className="support-container">
            {/* Header */}
                <div className="support-header">
                        <h1>Customer Support</h1>h1>
                        <p>We're here to help. Get in touch with our team.</p>p>
                </div>div>
          
                <div className="support-content">
                  {/* Contact Information */}
                        <section className="support-section contact-section">
                                  <h2>Get in Touch</h2>h2>
                                  <div className="contact-grid">
                                              <div className="contact-item">
                                                            <div className="contact-icon">📧</div>div>
                                                            <h3>Email</h3>h3>
                                                            <p><a href="mailto:admin@totalautocare.au">admin@totalautocare.au</a>a></p>p>
                                              </div>div>
                                              <div className="contact-item">
                                                            <div className="contact-icon">📱</div>div>
                                                            <h3>Phone</h3>h3>
                                                            <p><a href="tel:+61477533479">+61 477 533 479</a>a></p>p>
                                              </div>div>
                                              <div className="contact-item">
                                                            <div className="contact-icon">⏱️</div>div>
                                                            <h3>Response Time</h3>h3>
                                                            <p>We aim to respond to all enquiries within 24 hours.</p>p>
                                              </div>div>
                                  </div>div>
                        </section>section>
                
                  {/* FAQ Sections */}
                        <section className="support-section faq-section">
                                  <h2>Frequently Asked Questions</h2>h2>
                        
                          {/* Bookings & Payments */}
                                  <div className="faq-card">
                                              <h3>📅 Bookings & Payments</h3>h3>
                                              <p>
                                                            Have questions about your booking or payment? We're happy to help. You can contact us regarding:
                                              </p>p>
                                              <ul>
                                                            <li>Booking changes or modifications</li>li>
                                                            <li>Payment inquiries</li>li>
                                                            <li>Service availability and scheduling</li>li>
                                                            <li>Special requests or requirements</li>li>
                                              </ul>ul>
                                              <p className="faq-contact">
                                                            <a href="mailto:admin@totalautocare.au" className="link-email">Email us</a>a> or <a href="tel:+61477533479" className="link-phone">call us</a>a> to discuss your booking.
                                              </p>p>
                                  </div>div>
                        
                          {/* Cancellations & Rescheduling */}
                                  <div className="faq-card">
                                              <h3>🔄 Cancellations & Rescheduling</h3>h3>
                                              <p>
                                                            Your plans change, and we understand. Bookings can be rescheduled with reasonable notice.
                                              </p>p>
                                              <ul>
                                                            <li>Contact us at least 48 hours before your scheduled service</li>li>
                                                            <li>We'll work with you to find a suitable alternative date</li>li>
                                                            <li>Deposits are maintained when rescheduling</li>li>
                                                            <li>Emergency situations? Give us a call and we'll do our best to help</li>li>
                                              </ul>ul>
                                              <p className="faq-tip">
                                                            <strong>Pro tip:</strong>strong> For faster rescheduling, call us directly at <a href="tel:+61477533479">0477 533 479</a>a>
                                              </p>p>
                                  </div>div>
                        
                          {/* Refunds */}
                                  <div className="faq-card">
                                              <h3>💰 Refunds & Deposits</h3>h3>
                                              <p>
                                                            We want you to be satisfied. Here's our refund policy:
                                              </p>p>
                                              <ul>
                                                            <li><strong>After confirmation:</strong>strong> Deposits are non-refundable once the booking is confirmed</li>li>
                                                            <li><strong>Transfer option:</strong>strong> Your deposit can be transferred to another date</li>li>
                                                            <li><strong>Service not completed:</strong>strong> Full refund of remaining balance if we cannot provide the service</li>li>
                                                            <li><strong>Pre-payment disputes:</strong>strong> Contact us immediately to discuss your concerns</li>li>
                                              </ul>ul>
                                              <p className="faq-note">
                                                            We stand behind our work. If you have concerns, reach out and we'll make it right.
                                              </p>p>
                                  </div>div>
                        
                          {/* Service Guarantee */}
                                  <div className="faq-card guarantee-card">
                                              <h3>⭐ Service Guarantee</h3>h3>
                                              <p>
                                                            We aim for 100% satisfaction with every detail. Here's what we guarantee:
                                              </p>p>
                                              <ul>
                                                            <li><strong>Professional results:</strong>strong> Using premium products and proven techniques</li>li>
                                                            <li><strong>On-time service:</strong>strong> We arrive within your scheduled time window</li>li>
                                                            <li><strong>Respectful service:</strong>strong> Professional, courteous team at your location</li>li>
                                                            <li><strong>Concern resolution:</strong>strong> Any issues will be addressed promptly after service</li>li>
                                              </ul>ul>
                                              <p className="guarantee-text">
                                                            Not happy with the results? Contact us within 48 hours and we'll discuss solutions. Your satisfaction matters to us.
                                              </p>p>
                                  </div>div>
                        </section>section>
                
                  {/* Support Buttons */}
                        <section className="support-section cta-section">
                                  <h2>Ready to Book or Have Questions?</h2>h2>
                                  <div className="cta-buttons">
                                              <a href="/booking" className="btn-primary">Book a Service</a>a>
                                              <a href="mailto:admin@totalautocare.au" className="btn-secondary">Send us an Email</a>a>
                                              <a href="tel:+61477533479" className="btn-secondary">Call Us Now</a>a>
                                  </div>div>
                        </section>section>
                </div>div>
          </div>div>
        );
};

export default SupportPage;</div>
