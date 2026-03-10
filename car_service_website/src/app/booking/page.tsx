'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function BookingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(true);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Book Your Service</h1>
          <p className="text-lg text-gray-300">
            Schedule a convenient time for your car service
          </p>
        </div>
      </div>

      {/* Booking Info */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6 border-t-4 border-red-600 text-center">
              <div className="text-5xl mb-3">📅</div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Scheduling</h3>
              <p className="text-gray-300">Book your slot in just a few clicks. We offer flexible scheduling.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border-t-4 border-red-600 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Service</h3>
              <p className="text-gray-300">Most services completed within the time frame with no compromise on quality.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border-t-4 border-red-600 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Confirmation</h3>
              <p className="text-gray-300">Instant booking confirmation with service reminders via SMS.</p>
            </div>
          </div>

          {/* Booking Hours */}
          <div className="bg-slate-800 rounded-lg p-8 border-t-4 border-red-600 mb-12">
            <h2 className="text-2xl font-bold text-red-500 mb-6">Operating Hours</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">🕐 Workshop Hours</h3>
                <div className="text-gray-300 space-y-2">
                  <p><span className="font-semibold">Monday - Friday:</span> 8 AM - 6 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 9 AM - 4 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">📍 Location</h3>
                <div className="text-gray-300 space-y-2">
                  <p>SpeedAuto Car Service</p>
                  <p>HSR Layout</p>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-600 bg-opacity-10 border-2 border-red-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Ready to Book?</h3>
            <p className="text-gray-300 mb-6">
              Click the button below to schedule your service. Our team will confirm your booking within 2 hours.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition text-lg"
            >
              Open Booking Form
            </button>
          </div>
        </div>
      </div>

      <ServiceBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
