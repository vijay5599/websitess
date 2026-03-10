'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoursesHighlightSection from '@/components/CoursesHighlightSection';
import StudentStoriesSection from '@/components/StudentStoriesSection';
import Chatbot from '@/components/Chatbot';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function Home() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-600 to-slate-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-orange-500">
              <div className="text-center">
                <div className="text-7xl mb-4">🎓</div>
                <p className="text-white font-semibold">Hands-On Learning</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-orange-400">
                About BrightPath Academy
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                BrightPath Academy is a leading coding and data science training center in Bangalore, dedicated to transforming aspiring programmers into industry-ready professionals. With hours from 9 AM to 7 PM, we offer flexible learning schedules.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our experienced trainers and hands-on curriculum ensure you gain practical skills that employers are looking for in today's tech industry.
              </p>
              <div className="bg-orange-600 bg-opacity-20 border-l-4 border-orange-500 p-4">
                <p className="font-semibold text-gray-200 mb-2">✓ Industry Expert Trainers</p>
                <p className="font-semibold text-gray-200 mb-2">✓ 100% Placement Assistance</p>
                <p className="font-semibold text-gray-200">✓ Job-Ready Curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CoursesHighlightSection />
      <StudentStoriesSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Tech Career?</h2>
          <p className="text-lg text-orange-100 mb-8">Enroll in one of our courses today and begin your transformation</p>
          <button
            onClick={() => setIsEnrollmentOpen(true)}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <Chatbot />
    </main>
  );
}
