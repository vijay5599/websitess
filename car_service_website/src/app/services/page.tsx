'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: 'General Service',
      price: '₹2500',
      duration: '2-3 hours',
      description: 'Complete vehicle inspection, oil change, filter replacement, and fluid top-ups',
      includes: ['Oil & Filter Change', 'Engine Inspection', 'Brake Check', 'Light Check', 'Tire Pressure Check'],
      icon: '🔧',
    },
    {
      id: 2,
      name: 'Oil Change Service',
      price: '₹1200',
      duration: '30 mins',
      description: 'Quick oil and filter change with quality synthetic or conventional oil',
      includes: ['Premium Oil Selection', 'Oil Filter Replacement', 'Engine Cleanup', 'Waste Disposal'],
      icon: '🛢️',
    },
    {
      id: 3,
      name: 'Brake Repair & Service',
      price: '₹2000',
      duration: '1-2 hours',
      description: 'Brake inspection, pad replacement, rotor servicing, and fluid check',
      includes: ['Brake Pad Replacement', 'Rotor Service', 'Brake Fluid Check', 'Test Drive'],
      icon: '🛑',
    },
    {
      id: 4,
      name: 'AC Service & Repair',
      price: '₹1800',
      duration: '1.5 hours',
      description: 'AC refrigerant refill, compressor check, and filter cleaning',
      includes: ['Refrigerant Check & Refill', 'Compressor Inspection', 'Filter Cleaning', 'Vent Service'],
      icon: '❄️',
    },
    {
      id: 5,
      name: 'Car Detailing',
      price: '₹3500',
      duration: '3-4 hours',
      description: 'Complete exterior and interior detailing with wax and polish',
      includes: ['Exterior Wash & Polish', 'Interior Vacuum & Cleaning', 'Wax Application', 'Glass Treatment'],
      icon: '✨',
    },
    {
      id: 6,
      name: 'Transmission Service',
      price: '₹3000',
      duration: '2-3 hours',
      description: 'Transmission fluid check, filter replacement, and system flush',
      includes: ['Fluid Level Check', 'Filter Replacement', 'System Flush', 'Inspection'],
      icon: '⚙️',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Our Services</h1>
          <p className="text-lg text-gray-300">
            Comprehensive car maintenance and repair solutions
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-t-4 border-red-600"
              >
                <div className="h-48 bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center text-7xl">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-red-500 font-bold text-2xl mb-2">{service.price}</p>
                  <p className="text-gray-400 mb-2">⏱️ {service.duration}</p>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-gray-400 font-semibold mb-2">Includes:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
