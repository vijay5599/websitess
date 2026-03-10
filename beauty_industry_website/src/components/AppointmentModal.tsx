'use client';

import { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [message, setMessage] = useState('');

  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
  const services = ['Haircut', 'Hair Coloring', 'Facial', 'Manicure', 'Pedicure', 'Bridal Makeup'];

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.preferredDate || !formData.preferredTime) {
      setMessage('Please fill all required fields');
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push({ ...formData, id: Date.now() });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    setMessage('Appointment booked successfully! We will call you to confirm.');
    setTimeout(() => {
      onClose();
      setFormData({ name: '', phone: '', email: '', service: '', preferredDate: '', preferredTime: '' });
      setMessage('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="bg-pink-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Book Your Appointment</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-pink-100"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          {message ? (
            <div className={`p-4 rounded-lg mb-6 ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-bold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Preferred Time *</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">Additional Notes</label>
              <textarea
                name="notes"
                placeholder="Any special requests or preferences..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 h-24"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Book Appointment
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-300 text-slate-700 font-bold py-3 rounded-lg hover:bg-slate-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
