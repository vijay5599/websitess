'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/src/components/AppointmentModal';

export default function Appointments() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">Book Your Appointment</h1>

          <div className="bg-slate-800 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose SmileCare?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Expert Dentists</h3>
                  <p className="text-slate-300">Highly qualified and experienced professionals</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Modern Technology</h3>
                  <p className="text-slate-300">Latest dental equipment and techniques</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Pain-Free Treatment</h3>
                  <p className="text-slate-300">Comfortable and anxiety-free dental care</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Affordable Pricing</h3>
                  <p className="text-slate-300">Transparent pricing with no hidden costs</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
          >
            Schedule Your Appointment Now
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
