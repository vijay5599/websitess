'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

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
                <p className="text-white text-lg">Koramangala, Bangalore</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Phone</p>
                <a href="tel:+919876543210" className="text-pink-400 text-lg hover:text-pink-300">
                  +91 9876543210
                </a>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Hours</p>
                <p className="text-white text-lg">10 AM - 9 PM Daily</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 text-sm uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:hello@glowstudio.com" className="text-pink-400 text-lg hover:text-pink-300">
                  hello@glowstudio.com
                </a>
              </div>

              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition mt-8"
              >
                Book Appointment
              </button>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Why Visit Us?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Expert Stylists</h3>
                  <p className="text-slate-300">Trained professionals with years of experience</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Premium Products</h3>
                  <p className="text-slate-300">Using best international beauty brands</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Comfortable Ambiance</h3>
                  <p className="text-slate-300">Relaxing atmosphere for your beauty session</p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Affordable Pricing</h3>
                  <p className="text-slate-300">Best value for premium services</p>
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
