import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import Pricing from '../components/Pricing';
import WhyUs from '../components/WhyUs';
import BookingCTA from '../components/BookingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyUs />
      <Pricing />
      <BookingCTA />
    </>
  );
}
