import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const PHONE = '0477 533 479';
const PHONE_HREF = 'tel:+61477533479';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servDropOpen, setServDrop] = useState(false);
  const location = useLocation();
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setServDrop(false); }, [location]);

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setServDrop(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Total Auto Care — Home">
            <img src="/logo.png" alt="Total Auto Care Group" className="nav-logo-img" />
            <span className="nav-logo-text">
              <span className="nav-logo-bold">Total</span>
              <span className="nav-logo-thin"> Auto Care</span>
            </span>
          </Link>
          <ul className="nav-links">
            <li className="nav-item nav-dropdown" ref={dropRef}>
              <button className={`nav-link nav-link--btn${servDropOpen ? ' active' : ''}`}
                onClick={() => setServDrop(v => !v)} aria-expanded={servDropOpen}>
                Services
                <svg className={`nav-chevron${servDropOpen ? ' rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {servDropOpen && (
                <div className="nav-drop-menu">
                  <Link to="/mobile-detailing" className="nav-drop-item">
                    <span className="drop-icon">🚗</span>
                    <div><div className="drop-title">Mobile Car Detailing</div><div className="drop-sub">We come to you — home or workplace</div></div>
                  </Link>
                  <Link to="/vehicle-transport" className="nav-drop-item">
                    <span className="drop-icon">🚛</span>
                    <div><div className="drop-title">Vehicle Transport</div><div className="drop-sub">Dealership logistics across WA</div></div>
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item"><Link to="/#pricing" className="nav-link">Pricing</Link></li>
            <li className="nav-item"><Link to="/about" className={`nav-link${isActive('/about') ? ' nav-link--active' : ''}`}>About</Link></li>
            <li className="nav-item"><Link to="/contact" className={`nav-link${isActive('/contact') ? ' nav-link--active' : ''}`}>Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <a href={PHONE_HREF} className="nav-phone">{PHONE}</a>
            <Link to="/booking" className="btn btn-gold btn-sm">Get a Quote</Link>
          </div>
          <button className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="mobile-drawer-inner">
          <nav className="mobile-nav">
            <div className="mobile-nav-section">
              <div className="mobile-nav-label">Services</div>
              <Link to="/mobile-detailing" className="mobile-nav-link">🚗 Mobile Car Detailing</Link>
              <Link to="/vehicle-transport" className="mobile-nav-link">🚛 Vehicle Transport</Link>
            </div>
            <div className="mobile-nav-section">
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
            </div>
          </nav>
          <div className="mobile-drawer-ctas">
            <a href={PHONE_HREF} className="btn btn-outline-white btn-lg btn-full">📞 Call {PHONE}</a>
            <Link to="/booking" className="btn btn-gold btn-lg btn-full" style={{marginTop: 12}}>Get a Free Quote →</Link>
          </div>
        </div>
      </div>
      <div className="mobile-sticky-bar">
        <a href={PHONE_HREF} className="sticky-bar-btn sticky-bar-call">Call Now</a>
        <Link to="/booking" className="sticky-bar-btn sticky-bar-book">Book Now →</Link>
      </div>
    </>
  );
}
