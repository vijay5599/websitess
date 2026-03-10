'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onAppointmentClick: () => void;
}

export default function Navbar({ onAppointmentClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          🦷 SmileCare
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:relative top-16 md:top-0 left-0 md:left-0 right-0 md:right-0 bg-slate-900 md:bg-transparent p-4 md:p-0 flex-col md:flex-row`}>
          <Link href="/" className="text-slate-100 hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/treatments" className="text-slate-100 hover:text-blue-400 transition">
            Treatments
          </Link>
          <Link href="/doctors" className="text-slate-100 hover:text-blue-400 transition">
            Doctors
          </Link>
          <Link href="/appointments" className="text-slate-100 hover:text-blue-400 transition">
            Appointments
          </Link>
          <Link href="/contact" className="text-slate-100 hover:text-blue-400 transition">
            Contact
          </Link>
          <button
            onClick={onAppointmentClick}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
