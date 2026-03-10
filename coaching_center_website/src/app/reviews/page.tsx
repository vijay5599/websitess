'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function ReviewsPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const reviews = [
    {
      name: 'Amit Kumar',
      course: 'Python Programming',
      review: 'Excellent course! The trainer explained concepts very clearly. Got placed after just 2 months of learning.',
      rating: 5,
      icon: '👨',
    },
    {
      name: 'Divya Nair',
      course: 'Full Stack Web Dev',
      review: 'Best investment I made! The practical projects helped me build a strong portfolio. Highly recommended!',
      rating: 5,
      icon: '👩',
    },
    {
      name: 'Rohit Sharma',
      course: 'Data Science',
      review: 'In-depth knowledge of ML algorithms. The instructor made complex concepts easy to understand.',
      rating: 5,
      icon: '👨',
    },
    {
      name: 'Sneha Patel',
      course: 'Python Programming',
      review: 'The learning environment is very supportive. Peer discussions helped me learn faster!',
      rating: 5,
      icon: '👩',
    },
    {
      name: 'Vikram Singh',
      course: 'Full Stack Web Dev',
      review: 'Hands-on approach with real projects. I built 3 complete projects during the course!',
      rating: 5,
      icon: '👨',
    },
    {
      name: 'Pooja Verma',
      course: 'Data Science',
      review: 'Great mentorship and comprehensive curriculum. This course changed my career direction!',
      rating: 5,
      icon: '👩',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Student Reviews</h1>
          <p className="text-lg text-gray-300">
            What our students have to say about their learning journey
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-orange-500"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.course}</p>
                    <div className="flex text-orange-400 text-sm mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{item.review}"</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <p className="text-gray-300">Students Trained</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <p className="text-gray-300">Placement Rate</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border-t-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <Chatbot />
    </main>
  );
}
