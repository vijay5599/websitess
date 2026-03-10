'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/src/components/AppointmentModal';

export default function Doctors() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Orthodontist",
      experience: "15 years",
      qualifications: "BDS, MDS Orthodontics",
      phone: "+91-9876543210"
    },
    {
      id: 2,
      name: "Dr. Meera Singh",
      specialty: "Cosmetic Dentist",
      experience: "12 years",
      qualifications: "BDS, Cosmetic Dentistry Specialist",
      phone: "+91-9876543211"
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Our Dental Experts</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Highly qualified and experienced dentists
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-slate-800 p-8 rounded-lg">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">👨‍⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">{doctor.name}</h3>
                <p className="text-blue-400 text-center font-semibold mb-4">{doctor.specialty}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Experience</p>
                    <p className="text-white">{doctor.experience}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Qualifications</p>
                    <p className="text-white">{doctor.qualifications}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Contact</p>
                    <a href={`tel:${doctor.phone}`} className="text-blue-400 hover:text-blue-300">
                      {doctor.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
                >
                  Book with {doctor.name.split(' ')[1]}
                </button>
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
