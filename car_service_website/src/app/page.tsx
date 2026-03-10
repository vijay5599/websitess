'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicePackagesSection from '@/components/ServicePackagesSection';
import CustomerReviewsSection from '@/components/CustomerReviewsSection';
import Chatbot from '@/components/Chatbot';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Hero />

      {/* About Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-600 to-slate-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-red-500">
              <div className="text-center">
                <div className="text-7xl mb-4">⚙️</div>
                <p className="text-white font-semibold">Quality Service</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-red-500">
                About SpeedAuto
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                SpeedAuto is your trusted car service center in HSR Layout, Bangalore. With over 5 years of experience, we provide comprehensive car maintenance and repair services. Open from 8 AM to 6 PM every day with same-day service options.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our qualified technicians use genuine parts and advanced diagnostic equipment to ensure your vehicle gets the best care possible.
              </p>
              <div className="bg-red-600 bg-opacity-20 border-l-4 border-red-500 p-4">
                <p className="font-semibold text-gray-200 mb-2">✓ Certified Technicians</p>
                <p className="font-semibold text-gray-200 mb-2">✓ Genuine Parts Only</p>
                <p className="font-semibold text-gray-200">✓ Warranty on Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicePackagesSection />
      <CustomerReviewsSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Car Service?</h2>
          <p className="text-lg text-red-100 mb-8">Book your service appointment today and keep your car running smoothly</p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
          >
            Book Service
          </button>
        </div>
      </div>

      <ServiceBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
