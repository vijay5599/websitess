'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import Chatbot from '@/components/Chatbot';
import TrialBookingModal from '@/components/TrialBookingModal';

export default function MembershipPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership Plans</h1>
          <p className="text-lg text-gray-300">
            Choose the plan that best fits your fitness goals and budget
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Comparison Table */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left">Feature</th>
                  <th className="px-6 py-3 text-center">Monthly</th>
                  <th className="px-6 py-3 text-center">Quarterly</th>
                  <th className="px-6 py-3 text-center">Personal Training</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-gray-900">Equipment Access</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Locker Facility</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-gray-900">Fitness Assessment</td>
                  <td className="px-6 py-4 text-center">Monthly</td>
                  <td className="px-6 py-4 text-center">Quarterly</td>
                  <td className="px-6 py-4 text-center">Bi-weekly</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Trainer Priority</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-gray-900">Nutrition Plan</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">One-on-One Training</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">—</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade my plan?</h3>
              <p className="text-gray-700">
                Yes! You can upgrade to a better plan at any time. We'll adjust your membership accordingly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a cancellation fee?</h3>
              <p className="text-gray-700">
                We believe in commitment-free fitness. Cancel anytime without any hidden fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-700">
                Absolutely! You can book a free trial session to experience our gym and meet our trainers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What if I have an injury?</h3>
              <p className="text-gray-700">
                Our trainers can modify workouts based on any injuries or limitations. Always inform your trainer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join IronCore Fitness Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your transformation with a free trial session!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
            Book Your Trial
          </button>
        </div>
      </div>

      <TrialBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Chatbot />
    </main>
  );
}
