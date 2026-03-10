'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import TrialBookingModal from '@/components/TrialBookingModal';

export default function ProgramsPage() {

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const programs = [
    {
      name: 'Strength Training',
      description: 'Build muscle and increase your strength with our expert guidance',
      details: 'Our strength training programs focus on progressive overload and proper form to help you build lean muscle mass.',
      image: '/images/strength-training.svg',
    },
    {
      name: 'Fat Loss Training',
      description: 'Targeted programs designed to help you shed pounds effectively',
      details: 'Combine high-intensity interval training with strength work to maximize fat loss and preserve muscle.',
      image: '/images/fat-loss.svg',
    },
    {
      name: 'Cardio Programs',
      description: 'Improve your cardiovascular health and endurance',
      details: 'From steady-state cardio to HIIT, we have programs to suit your fitness level and goals.',
      image: '/images/cardio.svg',
    },
    {
      name: 'Weight Training',
      description: 'Progressive weight training routines for all levels',
      details: 'Learn proper technique with our certified trainers and progress safely through advanced exercises.',
      image: '/images/weight-training.svg',
    },
    {
      name: 'Personal Training',
      description: 'One-on-one training sessions with certified trainers',
      details: 'Get customized workout plans and nutrition guidance tailored to your specific goals.',
      image: '/images/personal-training.svg',
    },
    {
      name: 'Flexibility & Recovery',
      description: 'Yoga and stretching sessions to prevent injuries',
      details: 'Essential for injury prevention and recovery. Includes yoga, stretching, and mobility work.',
      image: '/images/flexibility.svg',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h1>
          <p className="text-lg text-gray-300">
            Find the perfect program to achieve your fitness goals
          </p>
        </div>
      </div>

      {/* Programs Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="border-l-4 border-red-600 bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img src={program.image} alt={program.name} className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{program.description}</p>
                <p className="text-gray-700">{program.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Programs?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Expert Trainers</h3>
              <p className="text-gray-700">
                Our certified trainers have years of experience and are passionate about helping you succeed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Customized Plans</h3>
              <p className="text-gray-700">
                Every program is tailored to your fitness level and specific goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Modern Equipment</h3>
              <p className="text-gray-700">
                Train with state-of-the-art equipment in a clean, well-maintained facility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Progress Tracking</h3>
              <p className="text-gray-700">
                Monitor your progress with regular assessments and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
{/* CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Program</h2>
          <p className="text-lg text-gray-300 mb-8">
            Start with a free trial session and discover your fitness potential!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
            Book Free Trial
          </button>
        </div>
      </div>

      <TrialBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      <Chatbot />
    </main>
  );
}
