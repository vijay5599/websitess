'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import TrainersSection from '@/components/TrainersSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Chatbot from '@/components/Chatbot';
import TrialBookingModal from '@/components/TrialBookingModal';


  
export default function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Hero />

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-600 to-gray-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-red-500">
              <div className="text-center">
                <img src="/images/gym-facility.svg" alt="Premium Fitness" className="w-32 h-32 mx-auto mb-4" />
                <p className="text-white font-semibold">Premium Fitness Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                About IronCore Fitness
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                IronCore Fitness is Indiranagar's premier fitness destination, dedicated to helping you achieve your fitness goals. With state-of-the-art equipment and certified trainers, we provide a supportive environment for your transformation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a beginner or a seasoned athlete, our diverse programs and expert trainers will guide you every step of the way.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <p className="font-semibold text-gray-900 mb-2">✓ Certified Expert Trainers</p>
                <p className="font-semibold text-gray-900 mb-2">✓ Modern Equipment & Facilities</p>
                <p className="font-semibold text-gray-900">✓ 24/7 Support & Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <ProgramsSection />

      {/* Trainers Section */}
      <TrainersSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join IronCore Fitness today and start your fitness journey with us!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition text-lg">
            Book Your Trial Session
          </button>
        </div>
      </div>

      <TrialBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
