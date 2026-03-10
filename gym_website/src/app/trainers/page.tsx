'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import TrialBookingModal from '@/components/TrialBookingModal';
  

export default function TrainersPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
  const trainers = [
    {
      name: 'Rahul Sharma',
      specialization: 'Strength Trainer',
      experience: '8 years',
      bio: 'Expert in muscle building and powerlifting',
      certifications: 'NASM certified, CSM certified',
      specialties: ['Muscle Building', 'Powerlifting', 'Strength Training'],
      avatar: '👨‍🏫',
    },
    {
      name: 'Priya Nair',
      specialization: 'Weight Loss Coach',
      experience: '6 years',
      bio: 'Specialist in nutrition and fat loss programs',
      certifications: 'ACE certified, Nutrition specialist',
      specialties: ['Fat Loss', 'Nutrition Planning', 'HIIT Training'],
      avatar: '👩‍🏫',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Trainers</h1>
          <p className="text-lg text-gray-300">
            Get trained by certified professionals with years of experience
          </p>
        </div>
      </div>

      {/* Trainers Content */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <img src="/images/trainer.svg" alt={trainer.name} className="w-40 h-40" />
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{trainer.name}</h2>
                    <p className="text-xl text-red-600 font-semibold mb-1">{trainer.specialization}</p>
                    <p className="text-gray-600 mb-4">Experience: {trainer.experience}</p>
                    <p className="text-gray-700 mb-4">{trainer.bio}</p>

                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Certifications:</h3>
                      <p className="text-gray-700">{trainer.certifications}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Specialties:</h3>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Train with Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Benefits of Personal Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Customized Programs</h3>
              <p className="text-gray-700">
                Your trainer will create a personalized workout plan based on your goals and fitness level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Perfect Form</h3>
              <p className="text-gray-700">
                Learn proper technique to prevent injuries and maximize results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Nutrition Guidance</h3>
              <p className="text-gray-700">
                Get expert advice on nutrition to complement your training program.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">✓ Accountability</h3>
              <p className="text-gray-700">
                Stay motivated with regular progress tracking and adjustments to your plan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with a Trainer?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Book a consultation with one of our expert trainers today!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
            Book Free Consultation
          </button>
        </div>
      </div>

      <TrialBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
