'use client';

import { useState } from 'react';

interface PropertyVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyVisitModal({ isOpen, onClose }: PropertyVisitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    property: '',
    preferredDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookings = JSON.parse(localStorage.getItem('propertyVisits') || '[]');
      bookings.push({
        ...formData,
        bookingDate: new Date().toISOString(),
      });
      localStorage.setItem('propertyVisits', JSON.stringify(bookings));

      setSubmitMessage('✓ Property visit booked! We will confirm shortly.');
      
      setFormData({
        name: '',
        phone: '',
        property: '',
        preferredDate: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error booking visit. Please try again or call +91 9876543210');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-2xl">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Property Visit</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-teal-400 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Property</label>
            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            >
              <option value="">Select Property</option>
              <option value="2BHK Apartment - ₹85L">2BHK Apartment - ₹85L</option>
              <option value="3BHK Apartment - ₹1.2Cr">3BHK Apartment - ₹1.2Cr</option>
              <option value="Luxury Villa - ₹2.5Cr">Luxury Villa - ₹2.5Cr</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Preferred Visit Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {submitMessage && (
            <div className="bg-teal-100 border border-teal-400 text-teal-900 px-4 py-3 rounded">
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition disabled:bg-gray-400"
          >
            {isSubmitting ? 'Booking...' : 'Schedule Visit'}
          </button>
        </form>
      </div>
    </div>
  );
}
