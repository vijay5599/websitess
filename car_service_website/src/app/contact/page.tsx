'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Get in touch with our service team
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-red-500">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400">
                      SpeedAuto Car Service<br />
                      HSR Layout<br />
                      Bangalore, India 560034
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-red-500 font-semibold hover:text-red-400 transition text-lg"
                    >
                      +91 9876543210
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Call us for bookings and inquiries</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                    <div className="text-gray-400">
                      <p className="mb-1"><span className="font-semibold">Monday - Friday:</span> 8 AM - 6 PM</p>
                      <p className="mb-1"><span className="font-semibold">Saturday:</span> 9 AM - 4 PM</p>
                      <p className="text-sm text-gray-500 mt-2">Closed on Sundays & Holidays</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Chat with Us</h3>
                    <p className="text-gray-400">
                      Use our AI chatbot to ask questions about services, pricing, and booking!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder & CTA */}
            <div>
              <div className="bg-gradient-to-br from-red-600 to-slate-700 rounded-lg h-80 flex items-center justify-center border-2 border-red-500 mb-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-white font-semibold">Visit Our Workshop</p>
                </div>
              </div>

              <div className="bg-red-600 bg-opacity-10 border-2 border-red-500 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Schedule Your Service</h3>
                <p className="text-gray-300 mb-6">
                  Don't wait! Book your car service with us today and keep your vehicle in perfect condition.
                </p>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
                >
                  Book Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
