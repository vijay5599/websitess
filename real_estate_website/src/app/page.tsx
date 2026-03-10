'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedPropertiesSection from '@/components/FeaturedPropertiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Chatbot from '@/components/Chatbot';
import PropertyVisitModal from '@/components/PropertyVisitModal';

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
            <div className="bg-gradient-to-br from-teal-600 to-slate-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-teal-500">
              <div className="text-center">
                <div className="text-7xl mb-4">🌆</div>
                <p className="text-white font-semibold">Premium Locations</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-teal-400">
                About UrbanNest Properties
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                UrbanNest Properties is Bangalore's leading real estate company, dedicated to connecting you with your dream home. With over 10 years of experience, we specialize in premium residential properties across prime locations.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Whether you're looking for an investment opportunity or your perfect home, our expert team is here to guide you every step of the way.
              </p>
              <div className="bg-teal-600 bg-opacity-20 border-l-4 border-teal-500 p-4">
                <p className="font-semibold text-gray-200 mb-2">✓ 500+ Happy Clients</p>
                <p className="font-semibold text-gray-200 mb-2">✓ 50+ Premium Properties</p>
                <p className="font-semibold text-gray-200">✓ Expert Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedPropertiesSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Visit Your Dream Property?</h2>
          <p className="text-lg text-teal-100 mb-8">Schedule a property visit with our team today</p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
          >
            Book Property Visit
          </button>
        </div>
      </div>

      <PropertyVisitModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
