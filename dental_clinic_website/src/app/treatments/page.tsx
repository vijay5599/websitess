'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/src/components/AppointmentModal';

export default function Treatments() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const treatments = [
    {
      id: 1,
      name: "Dental Cleaning",
      price: "₹1200",
      description: "Professional cleaning to remove plaque and tartar buildup",
      icon: "🪥"
    },
    {
      id: 2,
      name: "Root Canal",
      price: "₹4500",
      description: "Advanced treatment to save infected or damaged teeth",
      icon: "⚕️"
    },
    {
      id: 3,
      name: "Teeth Whitening",
      price: "₹3500",
      description: "Professional whitening for a brighter, whiter smile",
      icon: "✨"
    },
    {
      id: 4,
      name: "Dental Implants",
      price: "₹25000",
      description: "Permanent replacement for missing teeth",
      icon: "🦷"
    },
    {
      id: 5,
      name: "Braces Consultation",
      price: "₹500",
      description: "Consultation for orthodontic treatment planning",
      icon: "📋"
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Our Dental Treatments</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Comprehensive dental care services at SmileCare Dental Clinic
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="text-5xl mb-4">{treatment.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{treatment.name}</h3>
                  <p className="text-blue-400 text-xl font-semibold mb-3">{treatment.price}</p>
                  <p className="text-slate-300 mb-4">{treatment.description}</p>
                  <button
                    onClick={() => setIsAppointmentOpen(true)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
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
