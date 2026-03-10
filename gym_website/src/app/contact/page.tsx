'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import TrialBookingModal from '@/components/TrialBookingModal';

export default function ContactPage() {

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Location</h1>
          <p className="text-lg text-gray-300">
            Visit us today or get in touch with any questions
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <img src="/images/strength-training.svg" alt="Location" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-700">
                      IronCore Fitness<br />
                      Indiranagar<br />
                      Bangalore, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <img src="/images/personal-training.svg" alt="Phone" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-red-600 font-semibold hover:text-red-700 transition text-lg"
                    >
                      +91 9876543210
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call us anytime for inquiries</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <img src="/images/flexibility.svg" alt="Hours" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="text-gray-700">
                      <p className="mb-1"><span className="font-semibold">Monday - Friday:</span> 5 AM - 10 PM</p>
                      <p className="mb-1"><span className="font-semibold">Saturday - Sunday:</span> 6 AM - 10 PM</p>
                      <p className="text-sm text-gray-600 mt-2">Open 7 days a week!</p>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                <div className="flex gap-4">
                  <img src="/images/chatbot.svg" alt="Chat" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Chat with Us</h3>
                    <p className="text-gray-700">
                      Use our AI chatbot to ask questions about membership, programs, and more!
                    </p>
                  </div>
                </div>

                {/* Email or social */}
                <div className="flex gap-4">
                  <img src="/images/strength-training.svg" alt="Community" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Community</h3>
                    <p className="text-gray-700">
                      Follow us on social media for daily fitness tips and member updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder & Form */}
            <div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-8 border-2 border-red-500">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold text-lg">📍 Google Maps Integration</p>
                  <p className="text-gray-600 text-sm mt-2">Location map would display here</p>
                  <p className="text-gray-600 text-sm mt-2">Indiranagar, Bangalore</p>
                </div>
              </div>

              {/* Quick Form */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Visit Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Visit IronCore Fitness?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/strength-training.svg" alt="Modern Facility" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Modern Facility</h3>
              <p className="text-gray-700 text-sm">
                State-of-the-art equipment and clean, well-maintained facility
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/trainer.svg" alt="Expert Trainers" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Expert Trainers</h3>
              <p className="text-gray-700 text-sm">
                Certified professionals ready to guide your fitness journey
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/pricing.svg" alt="Results Focused" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Results Focused</h3>
              <p className="text-gray-700 text-sm">
                Programs designed to help you achieve your fitness goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Book your free trial session with us today!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
            Book Trial Session
          </button>
        </div>
      </div>

      <TrialBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
