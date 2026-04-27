import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import MobileDetailingPage from './pages/MobileDetailingPage';
import VehicleTransportPage from './pages/VehicleTransportPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"                    element={<HomePage />} />
            <Route path="/mobile-detailing"    element={<MobileDetailingPage />} />
            <Route path="/vehicle-transport"   element={<VehicleTransportPage />} />
            <Route path="/booking"             element={<BookingPage />} />
            <Route path="/about"               element={<AboutPage />} />
            <Route path="/contact"             element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
