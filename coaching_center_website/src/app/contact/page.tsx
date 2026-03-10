'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function ContactPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Get in touch with our team
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-orange-400">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400">
                      BrightPath Academy<br />
                      BTM Layout<br />
                      Bangalore, India 560076
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-orange-400 font-semibold hover:text-orange-300 transition text-lg"
                    >
                      +91 9876543210
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Call us for inquiries</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                    <div className="text-gray-400">
                      <p className="mb-1"><span className="font-semibold">Monday - Friday:</span> 9 AM - 7 PM</p>
                      <p className="mb-1"><span className="font-semibold">Saturday:</span> 9 AM - 4 PM</p>
                      <p className="text-sm text-gray-500 mt-2">Closed on Sundays</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Chat with Us</h3>
                    <p className="text-gray-400">
                      Use our AI chatbot to ask questions about courses, fees, and enrollment!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder & CTA */}
            <div>
              <div className="bg-gradient-to-br from-orange-600 to-slate-700 rounded-lg h-80 flex items-center justify-center border-2 border-orange-500 mb-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-white font-semibold">Visit Our Academy</p>
                </div>
              </div>

              <div className="bg-orange-600 bg-opacity-10 border-2 border-orange-500 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Ready to Enroll?</h3>
                <p className="text-gray-300 mb-6">
                  Start your tech career journey with us. Enroll in one of our industry-focused courses today!
                </p>
                <button
                  onClick={() => setIsEnrollmentOpen(true)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <Chatbot />
    </main>
  );
}
