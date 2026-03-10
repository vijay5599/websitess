'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-2xl text-red-600 flex items-center gap-2">
              <img src="/images/strength-training.svg" alt="IronCore" className="w-8 h-8" />
              IronCore Fitness
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-500 transition">
              Home
            </Link>
            <Link href="/programs" className="hover:text-red-500 transition">
              Programs
            </Link>
            <Link href="/trainers" className="hover:text-red-500 transition">
              Trainers
            </Link>
            <Link href="/membership" className="hover:text-red-500 transition">
              Membership
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition">
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
          <div className="md:hidden bg-gray-800 space-y-2 pb-4">
            <Link href="/" className="block px-2 py-2 hover:bg-gray-700 rounded">
              Home
            </Link>
            <Link href="/programs" className="block px-2 py-2 hover:bg-gray-700 rounded">
              Programs
            </Link>
            <Link href="/trainers" className="block px-2 py-2 hover:bg-gray-700 rounded">
              Trainers
            </Link>
            <Link href="/membership" className="block px-2 py-2 hover:bg-gray-700 rounded">
              Membership
            </Link>
            <Link href="/contact" className="block px-2 py-2 hover:bg-gray-700 rounded">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
