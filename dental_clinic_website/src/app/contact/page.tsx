'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/src/components/AppointmentModal';

export default function Contact() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              
              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Address</p>
                <p className="text-white text-lg">Whitefield, Bangalore</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Phone</p>
                <a href="tel:+919876543210" className="text-blue-400 text-lg hover:text-blue-300">
                  +91 9876543210
                </a>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Hours</p>
                <p className="text-white text-lg">9 AM - 8 PM Daily</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:hello@smilecare.com" className="text-blue-400 text-lg hover:text-blue-300">
                  hello@smilecare.com
                </a>
              </div>

              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition mt-8"
              >
                Book Appointment
              </button>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Clinic Facilities</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Advanced Equipment</h3>
                  <p className="text-slate-300">Digital X-rays, laser therapy, oral scanners</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Sterilization</h3>
                  <p className="text-slate-300">Highest standards of sterilization and hygiene</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Comfortable Environment</h3>
                  <p className="text-slate-300">Relaxing ambiance with entertainment systems</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Parking Available</h3>
                  <p className="text-slate-300">Easy parking facilities for our patients</p>
                </div>
              </div>
            </div>
          </div>
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
