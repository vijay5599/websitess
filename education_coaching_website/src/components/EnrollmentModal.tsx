'use client';

import { useState } from 'react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Web Development',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Enrollment Request: ${formData.name} (${formData.email}) wants to enroll in ${formData.course}. Message: ${formData.message}`,
        }),
      });

      if (response.ok) {
        alert('Thank you for your interest! We will contact you soon.');
        setFormData({ name: '', email: '', course: 'Web Development', message: '' });
        onClose();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting enrollment request');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-lg p-6 w-full max-w-md border border-orange-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-orange-100">Start Your Journey</h2>
          <button
            onClick={onClose}
            className="text-orange-100 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-orange-100 mb-2 font-bold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-orange-100 mb-2 font-bold">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-orange-100 mb-2 font-bold">Select Course</label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-orange-500 rounded-lg text-white focus:outline-none focus:border-orange-400"
            >
              <option>Web Development</option>
              <option>Data Science</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-orange-100 mb-2 font-bold">Message (Optional)</label>
            <textarea
              placeholder="Tell us about yourself..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400 h-24"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition mt-6"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}
