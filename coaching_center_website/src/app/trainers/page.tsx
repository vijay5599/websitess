'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function TrainersPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const trainers = [
    {
      name: 'Rajesh Verma',
      expertise: 'Python & Backend Development',
      experience: '8 years',
      bio: 'Expert Python developer with experience in building scalable applications. Passionate about teaching best practices.',
      icon: '👨‍🏫',
      specialization: 'Python, Django, FastAPI',
    },
    {
      name: 'Priya Sharma',
      expertise: 'Full Stack Development',
      experience: '6 years',
      bio: 'Full Stack developer specializing in React, Node.js, and MongoDB. Mentored 100+ students.',
      icon: '👩‍🏫',
      specialization: 'React, Node.js, MongoDB',
    },
    {
      name: 'Arun Singh',
      expertise: 'Data Science & Machine Learning',
      experience: '7 years',
      bio: 'Data scientist with expertise in ML algorithms and data visualization. Industry experience with top companies.',
      icon: '👨‍🏫',
      specialization: 'ML, Deep Learning, NLP',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Meet Our Trainers</h1>
          <p className="text-lg text-gray-300">
            Learn from experienced industry professionals
          </p>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-t-4 border-orange-500"
              >
                <div className="h-40 bg-gradient-to-br from-orange-500 to-slate-700 flex items-center justify-center text-6xl">
                  {trainer.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                  <p className="text-orange-400 font-bold mb-2">{trainer.expertise}</p>
                  <p className="text-gray-400 mb-4">⏱️ {trainer.experience} experience</p>
                  <p className="text-gray-300 mb-4">{trainer.bio}</p>
                  <div className="mb-4 bg-orange-600 bg-opacity-10 border border-orange-600 rounded p-3">
                    <p className="text-orange-300 text-sm">
                      <span className="font-semibold">Specialization:</span> {trainer.specialization}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEnrollmentOpen(true)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition"
                  >
                    Learn from This Trainer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <Chatbot />
    </main>
  );
}
