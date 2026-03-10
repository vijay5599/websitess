'use client';

import { useState } from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import TreatmentsSection from '@/src/components/TreatmentsSection';
import TestimonialsSection from '@/src/components/TestimonialsSection';
import AppointmentModal from '@/src/components/AppointmentModal';
import Chatbot from '@/src/components/Chatbot';

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      <Hero onBookClick={() => setIsAppointmentOpen(true)} />
      <TreatmentsSection />
      <TestimonialsSection />
      
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Your Smile Matters to Us</h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule your dental checkup today and maintain your perfect smile
          </p>
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Book Appointment
          </button>
        </div>
      </section>

      <Chatbot />
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </main>
  );
}
