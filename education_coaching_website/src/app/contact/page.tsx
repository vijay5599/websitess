'use client';

import { useState } from 'react';
import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Contact Form: ${formData.name} (${formData.email}) - Subject: ${formData.subject}. Message: ${formData.message}`,
        }),
      });

      if (response.ok) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-950 via-orange-900 to-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-orange-100 mb-6">Contact Us</h1>
          <p className="text-xl text-orange-50">
            Have questions? We'd love to hear from you. Get in touch with our support team.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-orange-100 mb-2 font-bold">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400"
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
                  className="w-full px-4 py-3 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-orange-100 mb-2 font-bold">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-orange-100 mb-2 font-bold">Message</label>
                <textarea
                  placeholder="Tell us more details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-orange-500 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:border-orange-400 h-32"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition mt-6"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-orange-100 font-bold mb-2">Email</p>
                  <p className="text-orange-50">support@brightpath.com</p>
                </div>

                <div>
                  <p className="text-orange-100 font-bold mb-2">Phone</p>
                  <p className="text-orange-50">+91 9876 543 210</p>
                </div>

                <div>
                  <p className="text-orange-100 font-bold mb-2">Address</p>
                  <p className="text-orange-50">BrightPath Academy, Mumbai, India</p>
                </div>

                <div>
                  <p className="text-orange-100 font-bold mb-2">Office Hours</p>
                  <p className="text-orange-50">Monday - Friday: 9 AM - 6 PM IST</p>
                  <p className="text-orange-50">Saturday: 10 AM - 4 PM IST</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>

              <div className="space-y-3">
                <a href="/courses" className="block text-orange-100 hover:text-white transition">
                  → Browse Courses
                </a>
                <a href="/trainers" className="block text-orange-100 hover:text-white transition">
                  → Meet Our Trainers
                </a>
                <a href="/reviews" className="block text-orange-100 hover:text-white transition">
                  → Student Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
