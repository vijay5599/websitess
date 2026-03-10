'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import PropertyVisitModal from '@/components/PropertyVisitModal';

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: 'Apartment Sales',
      description: 'Browse and purchase premium residential apartments across Bangalore with expert guidance',
      icon: '🏘️',
      details: 'Budget range: ₹50L - ₹2Cr',
    },
    {
      name: 'Villa Sales',
      description: 'Luxury villas with premium amenities in prime locations for discerning buyers',
      icon: '🏰',
      details: 'Premium properties: ₹1.5Cr+',
    },
    {
      name: 'Property Rental',
      description: 'Find rental properties that match your lifestyle and budget requirements',
      icon: '🔑',
      details: 'Rental assistance & tenant verification',
    },
    {
      name: 'Investment Consultation',
      description: 'Expert advice on real estate investments with high ROI potential',
      icon: '📈',
      details: 'Portfolio analysis & recommendations',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">Our Services</h1>
          <p className="text-lg text-gray-300">
            Comprehensive real estate solutions for your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition border-t-4 border-teal-500"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-teal-400 font-semibold">{service.details}</p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">1️⃣</div>
                <h4 className="text-white font-bold mb-2">Consultation</h4>
                <p className="text-gray-400">Understand your requirements and preferences</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">2️⃣</div>
                <h4 className="text-white font-bold mb-2">Property Search</h4>
                <p className="text-gray-400">Get curated list of matching properties</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">3️⃣</div>
                <h4 className="text-white font-bold mb-2">Site Visit</h4>
                <p className="text-gray-400">Schedule visits to shortlisted properties</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">4️⃣</div>
                <h4 className="text-white font-bold mb-2">Finalización</h4>
                <p className="text-gray-400">Complete documentation and handover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PropertyVisitModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
