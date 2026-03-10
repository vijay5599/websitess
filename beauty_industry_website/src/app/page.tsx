'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentModal from '@/components/AppointmentModal';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      <Hero onBookClick={() => setIsAppointmentOpen(true)} />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      
      <section className="py-20 px-4 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Glow?</h2>
          <p className="text-lg text-pink-100 mb-8">
            Book your appointment today and experience premium beauty services at Glow Studio
          </p>
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Book Now
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
