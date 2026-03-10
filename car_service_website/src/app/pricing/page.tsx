'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pricingData = [
    {
      category: 'Basic Services',
      services: [
        { name: 'Oil Change', price: '₹1,200' },
        { name: 'Air Filter Replacement', price: '₹500' },
        { name: 'Cabin Filter Replacement', price: '₹800' },
      ],
    },
    {
      category: 'Maintenance Services',
      services: [
        { name: 'General Service', price: '₹2,500' },
        { name: 'Engine Flush', price: '₹2,000' },
        { name: 'Radiator Service', price: '₹1,500' },
      ],
    },
    {
      category: 'Repair Services',
      services: [
        { name: 'Brake Repair', price: '₹2,000' },
        { name: 'Transmission Service', price: '₹3,000' },
        { name: 'AC Service', price: '₹1,800' },
      ],
    },
    {
      category: 'Detailing Services',
      services: [
        { name: 'Car Detailing', price: '₹3,500' },
        { name: 'Engine Cleaning', price: '₹1,500' },
        { name: 'Ceramic Coating', price: '₹5,000' },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Service Pricing</h1>
          <p className="text-lg text-gray-300">
            Transparent and competitive pricing for all services
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricingData.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-lg p-8 shadow-lg border-t-4 border-red-600"
              >
                <h2 className="text-2xl font-bold text-red-500 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.services.map((service, serviceIdx) => (
                    <div
                      key={serviceIdx}
                      className="flex justify-between items-center pb-4 border-b border-slate-700"
                    >
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-red-500 font-bold text-lg">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-red-600 bg-opacity-10 border-2 border-red-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Special Offers</h3>
            <p className="text-gray-300 mb-4">
              ✓ 10% discount on general service when combined with oil change<br/>
              ✓ Free car wash with all service packages above ₹2,500<br/>
              ✓ Loyalty card available - get 5% off on all services
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
            >
              Book Your Service Now
            </button>
          </div>
        </div>
      </div>

      <ServiceBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
