'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import PropertyVisitModal from '@/components/PropertyVisitModal';

export default function PropertiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const properties = [
    {
      id: 1,
      name: '2BHK Apartment in Indiranagar',
      price: '₹85L',
      area: '1200 sqft',
      location: 'Indiranagar, Bangalore',
      description: 'Modern 2BHK apartment with natural light, gym facilities, parking, and community center',
      amenities: ['Gym', 'Parking', 'Water Supply', 'Security'],
      image: '🏠',
    },
    {
      id: 2,
      name: '3BHK Apartment in Koramangala',
      price: '₹1.2Cr',
      area: '1800 sqft',
      location: 'Koramangala, Bangalore',
      description: 'Spacious 3BHK apartment with smart home features, terrace, and premium amenities',
      amenities: ['Smart Home', 'Terrace', 'AC', 'Modular Kitchen'],
      image: '🏙️',
    },
    {
      id: 3,
      name: 'Luxury Villa in Whitefield',
      price: '₹2.5Cr',
      area: '3500 sqft',
      location: 'Whitefield, Bangalore',
      description: 'Stunning villa with private garden, swimming pool, home theater, and landscaped grounds',
      amenities: ['Pool', 'Garden', 'Theater', 'Garage'],
      image: '🏡',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">Our Properties</h1>
          <p className="text-lg text-gray-300">
            Explore our premium collection of apartments and villas
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-t-4 border-teal-500"
              >
                <div className="h-48 bg-gradient-to-br from-teal-500 to-slate-700 flex items-center justify-center text-7xl">
                  {property.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{property.name}</h3>
                  <p className="text-teal-400 font-bold text-2xl mb-2">{property.price}</p>
                  <p className="text-gray-400 mb-2">📍 {property.location}</p>
                  <p className="text-gray-400 mb-4">📏 {property.area}</p>
                  <p className="text-gray-300 mb-4">{property.description}</p>
                  <div className="mb-4">
                    <p className="text-gray-400 font-semibold mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-teal-600 bg-opacity-20 text-teal-300 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold hover:bg-teal-700 transition"
                  >
                    Schedule Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PropertyVisitModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
