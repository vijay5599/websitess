'use client';

import { useState } from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import CoursesHighlightSection from '@/src/components/CoursesHighlightSection';
import StudentStoriesSection from '@/src/components/StudentStoriesSection';
import EnrollmentModal from '@/src/components/EnrollmentModal';
import Chatbot from '@/src/components/Chatbot';

export default function Home() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onEnrollClick={() => setIsEnrollmentOpen(true)} />
      <Hero onEnrollClick={() => setIsEnrollmentOpen(true)} />
      <CoursesHighlightSection />
      <StudentStoriesSection />

      <section className="py-20 px-4 bg-gradient-to-br from-orange-900 to-orange-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Career?</h2>
          <p className="text-lg text-orange-100 mb-8">
            Join thousands of students who have upgraded their skills with BrightPath Academy
          </p>
          <button
            onClick={() => setIsEnrollmentOpen(true)}
            className="bg-white hover:bg-orange-50 text-orange-900 font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            Enroll Today
          </button>
        </div>
      </section>

      <Chatbot />
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </main>
  );
}
