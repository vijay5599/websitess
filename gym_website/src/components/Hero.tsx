'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
              Transform Your Body Today
            </h1>
            <p className="text-lg md:text-xl mb-2">📍 Indiranagar, Bangalore</p>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Premium gym with certified trainers and modern equipment
            </p>
            <div className="flex gap-4">
              <Link
                href="/programs"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
              >
                Explore Programs
              </Link>
              <Link
                href="/membership"
                className="border-2 border-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-gray-800 rounded-lg h-64 md:h-96 flex items-center justify-center border-2 border-red-500">
            <div className="text-center">
              <img src="/images/gym-facility.svg" alt="Gym Facility" className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">State-of-the-Art Facility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
