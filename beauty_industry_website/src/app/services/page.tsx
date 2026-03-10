'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Services() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: "Haircut",
      price: "₹400",
      description: "Professional haircuts tailored to your style and face shape",
      image: "/images/haircut.svg"
    },
    {
      id: 2,
      name: "Hair Coloring",
      price: "₹2500",
      description: "Premium hair coloring with international brands",
      image: "/images/hair-coloring.svg"
    },
    {
      id: 3,
      name: "Facial",
      price: "₹1500",
      description: "Rejuvenating facials with organic products",
      image: "/images/facial.svg"
    },
    {
      id: 4,
      name: "Manicure",
      price: "₹600",
      description: "Nail care and design services",
      image: "/images/manicure.svg"
    },
    {
      id: 5,
      name: "Pedicure",
      price: "₹800",
      description: "Complete foot care and nail designing",
      image: "/images/pedicure.svg"
    },
    {
      id: 6,
      name: "Bridal Makeup",
      price: "₹8000",
      description: "Complete bridal makeover with trials included",
      image: "/images/bridal-makeup.svg"
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Our Services</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Premium beauty and hair services at Glow Studio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl transition">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-pink-400 text-xl font-semibold mb-3">{service.price}</p>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <button
                    onClick={() => setIsAppointmentOpen(true)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition"
                  >
                    Book Service
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
