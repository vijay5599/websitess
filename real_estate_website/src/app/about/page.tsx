'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import PropertyVisitModal from '@/components/PropertyVisitModal';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">About UrbanNest</h1>
          <p className="text-lg text-gray-300">
            Your trusted partner in finding dream properties in Bangalore
          </p>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-teal-600 to-slate-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-teal-500">
              <div className="text-center">
                <div className="text-7xl mb-4">🏢</div>
                <p className="text-white font-semibold">10+ Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-teal-400">Who We Are</h2>
              <p className="text-lg text-gray-300 mb-4">
                UrbanNest Properties is Bangalore's leading real estate company with over 10 years of experience in the industry. We specialize in premium residential properties across the city's most desirable locations.
              </p>
              <p className="text-lg text-gray-300">
                Our team of expert real estate consultants is dedicated to making your property journey smooth, transparent, and rewarding. We pride ourselves on customer satisfaction and have helped over 500 families find their dream homes.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-teal-500">
              <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-teal-500">
              <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
              <p className="text-gray-300">Premium Properties</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-teal-500">
              <div className="text-4xl font-bold text-teal-400 mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-teal-500">
              <div className="text-4xl font-bold text-teal-400 mb-2">₹500Cr+</div>
              <p className="text-gray-300">Property Value</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide transparent, ethical, and expert real estate services that help our clients make informed decisions and find properties that perfectly match their needs and aspirations.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be Bangalore's most trusted real estate partner, known for integrity, expertise, and exceptional customer service in helping people find their dream homes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PropertyVisitModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
