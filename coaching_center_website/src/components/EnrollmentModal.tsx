'use client';

import { useState } from 'react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    courseInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      enrollments.push({
        ...formData,
        enrollmentDate: new Date().toISOString(),
      });
      localStorage.setItem('enrollments', JSON.stringify(enrollments));

      setSubmitMessage('✓ Enrollment interest registered! We will contact you soon.');
      
      setFormData({
        name: '',
        phone: '',
        courseInterest: '',
        message: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error processing enrollment. Please try again or call +91 9876543210');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-2xl">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Enroll Now</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-400 text-xl font-bold"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Course Interest</label>
            <select
              name="courseInterest"
              value={formData.courseInterest}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option value="">Select a Course</option>
              <option value="Python Programming">Python Programming</option>
              <option value="Data Science">Data Science</option>
              <option value="Full Stack Web Dev">Full Stack Web Dev</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your experience"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          {submitMessage && (
            <div className="bg-orange-100 border border-orange-400 text-orange-900 px-4 py-3 rounded">
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition disabled:bg-gray-400"
          >
            {isSubmitting ? 'Processing...' : 'Enroll Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
