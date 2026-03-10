'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function CoursesPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const courses = [
    {
      id: 1,
      name: 'Python Programming',
      price: '₹12,000',
      duration: '4 weeks',
      level: 'Beginner',
      description: 'Master Python basics, OOP, and real-world applications',
      topics: ['Variables & Loops', 'Functions & Modules', 'OOP Concepts', 'File Handling'],
      image: '🐍',
    },
    {
      id: 2,
      name: 'Data Science',
      price: '₹25,000',
      duration: '8 weeks',
      level: 'Intermediate',
      description: 'Learn data analysis, visualization, and machine learning',
      topics: ['Pandas & NumPy', 'Data Visualization', 'Machine Learning', 'Real Projects'],
      image: '📊',
    },
    {
      id: 3,
      name: 'Full Stack Web Development',
      price: '₹30,000',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Complete web development with React, Node.js, and databases',
      topics: ['React.js', 'Node.js & Express', 'MongoDB', 'Deployment'],
      image: '🌐',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Our Courses</h1>
          <p className="text-lg text-gray-300">
            Industry-focused programming and data science courses
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-t-4 border-orange-500"
              >
                <div className="h-48 bg-gradient-to-br from-orange-500 to-slate-700 flex items-center justify-center text-7xl">
                  {course.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-orange-400 font-bold text-2xl mb-2">{course.price}</p>
                  <p className="text-gray-400 mb-2">⏱️ {course.duration}</p>
                  <p className="text-gray-400 mb-4">📚 {course.level}</p>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="mb-4">
                    <p className="text-gray-400 font-semibold mb-2">Topics Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-600 bg-opacity-20 text-orange-300 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEnrollmentOpen(true)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition"
                  >
                    Enroll Now
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
