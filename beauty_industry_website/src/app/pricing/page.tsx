'use client';

import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Pricing() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <Navbar onAppointmentClick={() => setIsAppointmentOpen(true)} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Pricing</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Transparent pricing for all our services
          </p>

          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left p-4 text-white">Service</th>
                  <th className="text-right p-4 text-white">Price</th>
                  <th className="text-center p-4 text-white">Book</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="p-4 text-slate-100">Haircut</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹400</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="p-4 text-slate-100">Hair Coloring</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹2500</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="p-4 text-slate-100">Facial</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹1500</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="p-4 text-slate-100">Manicure</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹600</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="p-4 text-slate-100">Pedicure</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹800</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-750">
                  <td className="p-4 text-slate-100 font-semibold">Bridal Makeup</td>
                  <td className="text-right p-4 text-pink-400 font-semibold">₹8000</td>
                  <td className="text-center p-4">
                    <button
                      onClick={() => setIsAppointmentOpen(true)}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Special Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Bridal Package</h3>
                <p className="text-slate-300 mb-4">Complete bridal makeup + trial session</p>
                <p className="text-pink-400 text-2xl font-bold">₹8000</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Beauty Combo</h3>
                <p className="text-slate-300 mb-4">Makeup + hair styling + nails</p>
                <p className="text-pink-400 text-2xl font-bold">₹5000</p>
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
