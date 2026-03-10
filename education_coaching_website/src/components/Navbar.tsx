'use client';

import { useState } from 'react';

interface NavbarProps {
  onEnrollClick?: () => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-orange-900 to-orange-800 z-40 py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-100">BrightPath Academy</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-100 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="text-orange-100 hover:text-white transition">
            Home
          </a>
          <a href="/courses" className="text-orange-100 hover:text-white transition">
            Courses
          </a>
          <a href="/trainers" className="text-orange-100 hover:text-white transition">
            Trainers
          </a>
          <a href="/reviews" className="text-orange-100 hover:text-white transition">
            Reviews
          </a>
          <a href="/contact" className="text-orange-100 hover:text-white transition">
            Contact
          </a>
          <button
            onClick={onEnrollClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="/" className="text-orange-100 hover:text-white transition">
            Home
          </a>
          <a href="/courses" className="text-orange-100 hover:text-white transition">
            Courses
          </a>
          <a href="/trainers" className="text-orange-100 hover:text-white transition">
            Trainers
          </a>
          <a href="/reviews" className="text-orange-100 hover:text-white transition">
            Reviews
          </a>
          <a href="/contact" className="text-orange-100 hover:text-white transition">
            Contact
          </a>
          <button
            onClick={onEnrollClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
}
