'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Gallery() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: "Hair Transformation",
      before: "/images/before-1.svg",
      after: "/images/after-1.svg",
      category: "Hair Coloring"
    },
    {
      id: 2,
      title: "Bridal Makeover",
      before: "/images/before-2.svg",
      after: "/images/after-2.svg",
      category: "Bridal Makeup"
    },
    {
      id: 3,
      title: "Style Change",
      before: "/images/before-3.svg",
      after: "/images/after-3.svg",
      category: "Haircut"
    },
    {
      id: 4,
      title: "Facial Treatment",
      before: "/images/before-4.svg",
      after: "/images/after-4.svg",
      category: "Facial"
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Gallery</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Before and after transformations from our clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-pink-400 mb-4">{item.category}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Before</p>
                      <img src={item.before} alt="Before" className="w-full h-40 rounded" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-2">After</p>
                      <img src={item.after} alt="After" className="w-full h-40 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your Transformation Awaits</h2>
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition"
          >
            Book Your Appointment
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
