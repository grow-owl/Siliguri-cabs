import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OutstationRoutes from './components/OutstationRoutes';
import AirportRoutes from './components/AirportRoutes';
import FleetShowcase from './components/FleetShowcase';
import AboutUs from './components/AboutUs';
import FAQAccordion from './components/FAQAccordion';
import Reviews from './components/Reviews';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-light text-charcoal font-sans selection:bg-gold selection:text-white flex flex-col">
      {/* Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero with Interactive Booking Engine */}
        <Hero />

        {/* Siliguri to Outstation Cabs */}
        <OutstationRoutes />

        {/* Bagdogra Airport Transfer Services */}
        <AirportRoutes />

        {/* Fleet Showcase */}
        <FleetShowcase />

        {/* About HillWay Cabs */}
        <AboutUs />

        {/* Frequently Asked Questions */}
        <FAQAccordion />

        {/* Traveler Reviews & Google Ratings */}
        <Reviews />

        {/* High-Converting Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer & Route Directory */}
      <Footer />

      {/* Floating Bottom Quick Action Dock for Mobile Devices (Android & iPhone) */}
      <FloatingMobileBar />
    </div>
  );
}
