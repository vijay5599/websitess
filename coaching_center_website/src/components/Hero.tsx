'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
              Learn Tech Skills, Build Your Future
            </h1>
            <p className="text-lg md:text-xl mb-2">📍 BTM Layout, Bangalore</p>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Industry-focused programming and data science courses
            </p>
            <div className="flex gap-4">
              <Link
                href="/courses"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Explore Courses
              </Link>
              <Link
                href="/trainers"
                className="border-2 border-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
              >
                Meet Trainers
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-slate-800 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-orange-500">
            <div className="text-center">
              <div className="text-7xl mb-4">💻</div>
              <p className="text-white font-semibold">Learn to Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
