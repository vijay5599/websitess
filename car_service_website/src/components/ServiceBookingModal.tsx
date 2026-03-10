'use client';

import { useState } from 'react';

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceBookingModal({ isOpen, onClose }: ServiceBookingModalProps) {
  const [formData, setFormData] = useState({
    carModel: '',
    problemDescription: '',
    phone: '',
    preferredDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const bookings = JSON.parse(localStorage.getItem('serviceBookings') || '[]');
      bookings.push({
        ...formData,
        bookingDate: new Date().toISOString(),
      });
      localStorage.setItem('serviceBookings', JSON.stringify(bookings));

      setSubmitMessage('✓ Service booking confirmed! We will contact you soon.');
      
      setFormData({
        carModel: '',
        problemDescription: '',
        phone: '',
        preferredDate: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error booking service. Please try again or call +91 9876543210');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-2xl">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Service</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Car Model</label>
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              placeholder="e.g., Maruti Swift, Hyundai Creta"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Problem Description</label>
            <textarea
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              placeholder="Describe the issue with your car"
              rows={3}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          {submitMessage && (
            <div className="bg-red-100 border border-red-400 text-red-900 px-4 py-3 rounded">
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition disabled:bg-gray-400"
          >
            {isSubmitting ? 'Booking...' : 'Book Service'}
          </button>
        </form>
      </div>
    </div>
  );
}
