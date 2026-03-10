'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-2xl text-orange-500 flex items-center gap-2">
              📚 BrightPath Academy
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/courses" className="hover:text-orange-400 transition">
              Courses
            </Link>
            <Link href="/trainers" className="hover:text-orange-400 transition">
              Trainers
            </Link>
            <Link href="/reviews" className="hover:text-orange-400 transition">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-slate-800 space-y-2 pb-4">
            <Link href="/" className="block px-2 py-2 hover:bg-slate-700 rounded">
              Home
            </Link>
            <Link href="/courses" className="block px-2 py-2 hover:bg-slate-700 rounded">
              Courses
            </Link>
            <Link href="/trainers" className="block px-2 py-2 hover:bg-slate-700 rounded">
              Trainers
            </Link>
            <Link href="/reviews" className="block px-2 py-2 hover:bg-slate-700 rounded">
              Reviews
            </Link>
            <Link href="/contact" className="block px-2 py-2 hover:bg-slate-700 rounded">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
